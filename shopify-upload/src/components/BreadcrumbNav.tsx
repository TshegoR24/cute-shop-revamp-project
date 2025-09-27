import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    switch (pathname) {
      case 'ladies':
        return 'Ladies Collection';
      case 'little-girls':
        return 'Little Girls Collection';
      case 'sleepwear':
        return 'Sleepwear Collection';
      case 'product':
        return 'Product Details';
      default:
        return pathname.charAt(0).toUpperCase() + pathname.slice(1);
    }
  };

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-background/50 backdrop-blur-sm border-b border-border/50 py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/">
            <Button variant="ghost" size="sm" className="h-6 px-2 text-muted-foreground hover:text-foreground">
              <Home className="h-3 w-3 mr-1" />
              Home
            </Button>
          </Link>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <div key={name} className="flex items-center space-x-2">
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                {isLast ? (
                  <span className="text-foreground font-medium">
                    {getBreadcrumbName(name)}
                  </span>
                ) : (
                  <Link to={routeTo}>
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-muted-foreground hover:text-foreground">
                      {getBreadcrumbName(name)}
                    </Button>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
