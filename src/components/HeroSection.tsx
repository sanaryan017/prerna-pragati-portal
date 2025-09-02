import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import { Users, Building2, Settings, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                🇮🇳 Government of India Initiative
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                AI-Powered{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  PM Internship
                </span>{" "}
                Platform
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Connecting talented students with industry opportunities through intelligent matching. 
                A flagship initiative under PM Narendra Modi's leadership for skill development and employment.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-primary">
                Register as Student
              </Button>
              <Button variant="outline" size="lg">
                Company Registration
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">10K+ Students</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Building2 className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm font-medium">500+ Companies</p>
              </div>
              <div className="text-center">
                <div className="bg-success/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <p className="text-sm font-medium">85% Match Rate</p>
              </div>
              <div className="text-center">
                <div className="bg-government/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Settings className="w-6 h-6 text-government" />
                </div>
                <p className="text-sm font-medium">AI Powered</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="AI-Powered PM Internship Platform" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;