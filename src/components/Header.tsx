import { Button } from "@/components/ui/button";
import indianFlag from "@/assets/indian-flag.png";

const Header = () => {
  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img 
              src={indianFlag} 
              alt="Indian Flag" 
              className="w-8 h-8"
            />
            <div>
              <h1 className="text-xl font-bold text-government">PM Internship Platform</h1>
              <p className="text-xs text-muted-foreground">Ministry of Corporate Affairs</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#eligibility" className="text-foreground hover:text-primary transition-colors">Eligibility</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;