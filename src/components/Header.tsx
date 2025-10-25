import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span style={{ color: "hsl(var(--brand-orange))" }}>We</span>
            <span className="text-foreground">Qode Technologies</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground font-medium border-b-2 border-primary pb-1">Home</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
          </div>
          
          <Button 
            className="text-white rounded-xl px-6 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "hsl(var(--brand-orange))" }}
          >
            Contact us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
