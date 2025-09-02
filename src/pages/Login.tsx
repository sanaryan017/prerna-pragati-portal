import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Building2, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import indianFlag from "@/assets/indian-flag.png";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (role: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Login Successful",
        description: `Welcome back! Redirecting to ${role} dashboard...`,
      });
      // Redirect based on role
      window.location.href = `/${role.toLowerCase()}-dashboard`;
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const LoginForm = ({ role, icon: Icon, color }: { role: string; icon: any; color: string }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold">{role} Login</h3>
          <p className="text-muted-foreground text-sm mt-2">
            Access your personalized dashboard
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`${role}-email`}>Email</Label>
            <Input
              id={`${role}-email`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${role}-password`}>Password</Label>
            <Input
              id={`${role}-password`}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button 
            className="w-full" 
            onClick={() => handleLogin(role, email, password)}
            disabled={isLoading || !email || !password}
          >
            {isLoading ? "Signing in..." : `Login as ${role}`}
          </Button>
          <div className="text-center">
            <a href="/register" className="text-primary hover:underline text-sm">
              Don't have an account? Register here
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={indianFlag} alt="Indian Flag" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-government">PM Internship Platform</h1>
          </div>
          <p className="text-muted-foreground">Ministry of Corporate Affairs</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Secure Login</CardTitle>
            <CardDescription>
              Choose your role to access the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>
              
              <TabsContent value="student" className="mt-6">
                <LoginForm 
                  role="Student" 
                  icon={GraduationCap} 
                  color="from-primary to-primary/80" 
                />
              </TabsContent>
              
              <TabsContent value="company" className="mt-6">
                <LoginForm 
                  role="Company" 
                  icon={Building2} 
                  color="from-secondary to-secondary/80" 
                />
              </TabsContent>
              
              <TabsContent value="admin" className="mt-6">
                <LoginForm 
                  role="Admin" 
                  icon={Shield} 
                  color="from-success to-success/80" 
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;