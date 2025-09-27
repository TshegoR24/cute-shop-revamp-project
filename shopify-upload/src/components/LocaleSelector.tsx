import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { localizationConfigs } from '@/lib/localization';

export const LocaleSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLocale, setLocale, config } = useLocale();

  const handleLocaleChange = (locale: 'ng' | 'za') => {
    setLocale(locale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 text-sm font-light"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span>{config.region.flag}</span>
        <span className="hidden sm:inline">{config.region.name}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="py-2">
            {Object.entries(localizationConfigs).map(([locale, config]) => (
              <button
                key={locale}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors flex items-center gap-3 ${
                  currentLocale === locale ? 'bg-accent/50' : ''
                }`}
                onClick={() => handleLocaleChange(locale as 'ng' | 'za')}
              >
                <span className="text-lg">{config.region.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{config.region.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {config.currency.symbol} {config.currency.code}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 