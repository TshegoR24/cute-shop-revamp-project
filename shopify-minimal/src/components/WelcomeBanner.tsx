import { useLocale } from '@/contexts/LocaleContext';

export const WelcomeBanner = () => {
  const { config } = useLocale();

  const getWelcomeMessage = () => {
    switch (config.locale) {
      case 'ng':
        return {
          title: '🇳🇬 Nigeria',
          subtitle: 'Free shipping over ₦50,000',
          highlight: '3-5 days delivery'
        };
      case 'za':
        return {
          title: '🇿🇦 South Africa',
          subtitle: 'Free shipping over R1,000',
          highlight: '2-4 days delivery'
        };
      default:
        return {
          title: 'Welcome',
          subtitle: 'Free shipping available',
          highlight: 'Fast delivery'
        };
    }
  };

  const welcome = getWelcomeMessage();

  return (
    <div className="bg-background/95 backdrop-blur-sm border-b border-border/30">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-center text-center">
          <div className="flex items-center gap-4 text-xs">
            <span className="text-muted-foreground">
              {welcome.title}
            </span>
            <span className="text-muted-foreground/70">
              {welcome.subtitle}
            </span>
            <span className="text-muted-foreground/60 bg-muted/50 px-2 py-0.5 rounded-full">
              {welcome.highlight}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}; 