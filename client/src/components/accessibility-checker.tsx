import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Eye, AlertTriangle, CheckCircle, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface ContrastResult {
  ratio: number;
  level: 'AAA' | 'AA' | 'FAIL';
  normal: boolean;
  large: boolean;
}

interface ColorPair {
  foreground: string;
  background: string;
}

export default function AccessibilityChecker() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorPair, setColorPair] = useState<ColorPair>({
    foreground: '#000000',
    background: '#ffffff'
  });
  const [contrastResult, setContrastResult] = useState<ContrastResult | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Convert hex to RGB
  const hexToRgb = (hex: string): [number, number, number] | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
  };

  // Calculate relative luminance
  const getLuminance = (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  // Calculate contrast ratio
  const getContrastRatio = (color1: string, color2: string): number => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;
    
    const lum1 = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
    const lum2 = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  };

  // Evaluate WCAG compliance
  const evaluateContrast = useCallback((ratio: number): ContrastResult => {
    const normal = ratio >= 4.5;
    const large = ratio >= 3.0;
    
    let level: 'AAA' | 'AA' | 'FAIL';
    if (ratio >= 7.0) {
      level = 'AAA';
    } else if (ratio >= 4.5) {
      level = 'AA';
    } else {
      level = 'FAIL';
    }
    
    return { ratio, level, normal, large };
  }, []);

  // Generate suggestions for improvement
  const generateSuggestions = useCallback((result: ContrastResult, fg: string, bg: string): string[] => {
    const suggestions: string[] = [];
    
    if (result.level === 'FAIL') {
      suggestions.push('Consider using darker text on light backgrounds or lighter text on dark backgrounds');
      suggestions.push('Increase the difference between foreground and background colors');
    }
    
    if (result.level === 'AA' && result.ratio < 7.0) {
      suggestions.push('To achieve AAA compliance, increase contrast ratio to 7.0 or higher');
    }
    
    if (!result.normal) {
      suggestions.push('Normal text requires a contrast ratio of at least 4.5:1');
    }
    
    if (!result.large) {
      suggestions.push('Large text requires a contrast ratio of at least 3.0:1');
    }
    
    return suggestions;
  }, []);

  // Update contrast calculation when colors change
  useEffect(() => {
    const ratio = getContrastRatio(colorPair.foreground, colorPair.background);
    const result = evaluateContrast(ratio);
    setContrastResult(result);
    setSuggestions(generateSuggestions(result, colorPair.foreground, colorPair.background));
  }, [colorPair, evaluateContrast, generateSuggestions]);

  const handleColorChange = (type: 'foreground' | 'background', value: string) => {
    setColorPair(prev => ({ ...prev, [type]: value }));
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'AAA': return 'bg-green-500 text-white';
      case 'AA': return 'bg-yellow-500 text-black';
      case 'FAIL': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'AAA': return <CheckCircle className="w-4 h-4" />;
      case 'AA': return <Info className="w-4 h-4" />;
      case 'FAIL': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-accent-orange hover:bg-accent-orange/80 text-white p-4 rounded-full shadow-lg transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Eye className="w-6 h-6" />
      </motion.button>

      {/* Accessibility checker modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-clash font-bold text-black">
                  WCAG Color Accessibility Checker
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Color inputs */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-clash font-medium text-gray-700 mb-2">
                    Foreground Color
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={colorPair.foreground}
                      onChange={(e) => handleColorChange('foreground', e.target.value)}
                      className="w-16 h-10 p-1 border-gray-300"
                    />
                    <Input
                      type="text"
                      value={colorPair.foreground}
                      onChange={(e) => handleColorChange('foreground', e.target.value)}
                      className="flex-1 font-mono"
                      placeholder="#000000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-clash font-medium text-gray-700 mb-2">
                    Background Color
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={colorPair.background}
                      onChange={(e) => handleColorChange('background', e.target.value)}
                      className="w-16 h-10 p-1 border-gray-300"
                    />
                    <Input
                      type="text"
                      value={colorPair.background}
                      onChange={(e) => handleColorChange('background', e.target.value)}
                      className="flex-1 font-mono"
                      placeholder="#ffffff"
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="mb-6">
                <label className="block text-sm font-clash font-medium text-gray-700 mb-2">
                  Preview
                </label>
                <div
                  className="p-6 rounded-lg border-2 border-gray-200"
                  style={{ backgroundColor: colorPair.background }}
                >
                  <div style={{ color: colorPair.foreground }}>
                    <p className="text-lg font-clash font-medium mb-2">
                      Normal Text (18px)
                    </p>
                    <p className="text-2xl font-clash font-bold">
                      Large Text (24px+)
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              {contrastResult && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-clash font-bold text-black">
                        {contrastResult.ratio.toFixed(2)}:1
                      </div>
                      <div className="text-sm text-gray-600">Contrast Ratio</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getLevelIcon(contrastResult.level)}
                      <Badge className={getLevelBadgeColor(contrastResult.level)}>
                        WCAG {contrastResult.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Compliance details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg border-2 ${contrastResult.normal ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {contrastResult.normal ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        )}
                        <span className="font-clash font-medium">Normal Text</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Requires 4.5:1 contrast ratio
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border-2 ${contrastResult.large ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {contrastResult.large ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        )}
                        <span className="font-clash font-medium">Large Text</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Requires 3.0:1 contrast ratio
                      </p>
                    </div>
                  </div>

                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                      <h3 className="font-clash font-medium text-blue-900 mb-2 flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        Suggestions for Improvement
                      </h3>
                      <ul className="space-y-1">
                        {suggestions.map((suggestion, index) => (
                          <li key={index} className="text-sm text-blue-800">
                            • {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* WCAG Guidelines reference */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-clash font-medium text-gray-900 mb-2">
                      WCAG 2.1 Guidelines
                    </h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>AA Level:</strong> Minimum contrast ratio of 4.5:1 for normal text, 3.0:1 for large text</p>
                      <p><strong>AAA Level:</strong> Enhanced contrast ratio of 7.0:1 for normal text, 4.5:1 for large text</p>
                      <p><strong>Large Text:</strong> 18pt+ or 14pt+ bold text</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}