import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Locale, localizationConfigs, formatCurrency, getLocalizedText } from '@/lib/localization';

interface LocaleContextType {
  currentLocale: Locale;
  setLocale: (locale: Locale) => void;
  formatCurrency: (amount: number) => string;
  getText: (key: string) => string;
  config: typeof localizationConfigs[Locale];
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ 
  children, 
  defaultLocale = 'ng' 
}) => {
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale);

  const setLocale = (locale: Locale) => {
    setCurrentLocale(locale);
    // Store in localStorage for persistence
    localStorage.setItem('preferred-locale', locale);
  };

  const formatCurrencyLocal = (amount: number) => {
    return formatCurrency(amount, currentLocale);
  };

  const getText = (key: string) => {
    return getLocalizedText(key, currentLocale);
  };

  const value: LocaleContextType = {
    currentLocale,
    setLocale,
    formatCurrency: formatCurrencyLocal,
    getText,
    config: localizationConfigs[currentLocale]
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}; 