import FeatureCard from "./FeatureCard";
import { Brain, Target, BarChart3, Shield, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Matching",
      description: "Advanced machine learning algorithms analyze skills, preferences, and compatibility to create perfect student-internship matches with 85%+ accuracy.",
      icon: Brain,
      gradient: "from-primary to-primary/80"
    },
    {
      title: "Smart Recommendations", 
      description: "Personalized internship suggestions based on your profile, career goals, and market trends. Get matched with opportunities that align with your aspirations.",
      icon: Target,
      gradient: "from-secondary to-secondary/80"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive dashboards for students, companies, and government administrators with live data, trends, and performance metrics.",
      icon: BarChart3,
      gradient: "from-success to-success/80"
    },
    {
      title: "Secure & Verified",
      description: "Government-grade security with multi-layer verification processes ensuring authentic profiles and legitimate opportunities.",
      icon: Shield,
      gradient: "from-government to-government/80"
    },
    {
      title: "Multi-Stakeholder Platform",
      description: "Seamlessly connects students, companies, and government administrators in one unified platform with role-based access and features.",
      icon: Users,
      gradient: "from-primary to-secondary"
    },
    {
      title: "Instant Processing",
      description: "Lightning-fast application processing, automated screening, and real-time notifications ensure quick turnaround times for all users.",
      icon: Zap,
      gradient: "from-success to-primary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge AI technology to revolutionize the internship allocation process, 
            ensuring fair, efficient, and optimal matches for all stakeholders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;