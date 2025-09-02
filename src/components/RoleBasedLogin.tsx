import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Shield } from "lucide-react";

const RoleBasedLogin = () => {
  const roles = [
    {
      title: "Students",
      description: "Create your profile, get AI-powered recommendations, and apply to perfect internship opportunities.",
      icon: GraduationCap,
      color: "from-primary to-primary/80",
      features: ["Personalized recommendations", "Application tracking", "Skill gap analysis", "Selection probability"]
    },
    {
      title: "Companies", 
      description: "Post internships, discover top talent through AI ranking, and streamline your recruitment process.",
      icon: Building2,
      color: "from-secondary to-secondary/80", 
      features: ["AI-ranked candidates", "Smart filtering", "Application analytics", "Talent insights"]
    },
    {
      title: "Government/Admin",
      description: "Monitor platform performance, ensure fair allocation, and access comprehensive analytics dashboards.",
      icon: Shield,
      color: "from-success to-success/80",
      features: ["Platform oversight", "Fairness monitoring", "Predictive analytics", "Policy insights"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Role
          </h2>
          <p className="text-xl text-muted-foreground">
            Access tailored features designed specifically for your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${role.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{role.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" size="lg" onClick={() => window.location.href = '/login'}>
                  Login as {role.title.slice(0, -1)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleBasedLogin;