import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Target, TrendingUp, Clock, MapPin, DollarSign, Users, Star, Bell, BookOpen } from "lucide-react";
import indianFlag from "@/assets/indian-flag.png";

const StudentDashboard = () => {
  const studentData = {
    name: "Priya Sharma",
    matchAccuracy: 87,
    appliedInternships: 12,
    shortlisted: 3,
    profileStrength: 85
  };

  const recommendations = [
    {
      title: "AI/ML Engineer Intern",
      company: "Tech Mahindra",
      location: "Mumbai, Maharashtra",
      stipend: "₹25,000",
      duration: "3 months",
      matchScore: 94,
      skills: ["Python", "Machine Learning", "TensorFlow"],
      deadline: "2024-01-15"
    },
    {
      title: "Product Manager Intern", 
      company: "Flipkart",
      location: "Bangalore, Karnataka",
      stipend: "₹30,000",
      duration: "6 months",
      matchScore: 89,
      skills: ["Product Strategy", "Analytics", "User Research"],
      deadline: "2024-01-20"
    },
    {
      title: "Data Analyst Intern",
      company: "Infosys",
      location: "Pune, Maharashtra", 
      stipend: "₹20,000",
      duration: "4 months",
      matchScore: 85,
      skills: ["SQL", "Python", "Tableau"],
      deadline: "2024-01-25"
    }
  ];

  const applications = [
    { company: "TCS", role: "Software Developer Intern", status: "Under Review", appliedDate: "2024-01-05" },
    { company: "Wipro", role: "UI/UX Designer Intern", status: "Shortlisted", appliedDate: "2024-01-03" },
    { company: "HCL", role: "Business Analyst Intern", status: "Interview Scheduled", appliedDate: "2024-01-01" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img src={indianFlag} alt="Indian Flag" className="w-8 h-8" />
              <div>
                <h1 className="text-xl font-bold text-government">PM Internship Platform</h1>
                <p className="text-xs text-muted-foreground">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <div className="text-right">
                <p className="font-medium">{studentData.name}</p>
                <p className="text-xs text-muted-foreground">Student ID: ST2024001</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">AI Match Accuracy</p>
                  <p className="text-2xl font-bold text-primary">{studentData.matchAccuracy}%</p>
                </div>
                <Brain className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Applications</p>
                  <p className="text-2xl font-bold text-secondary">{studentData.appliedInternships}</p>
                </div>
                <Target className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Shortlisted</p>
                  <p className="text-2xl font-bold text-success">{studentData.shortlisted}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Profile Strength</p>
                  <p className="text-2xl font-bold text-government">{studentData.profileStrength}%</p>
                </div>
                <Star className="w-8 h-8 text-government" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recommendations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="profile">Profile & Skills</TabsTrigger>
            <TabsTrigger value="analytics">Performance Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>AI-Powered Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {recommendations.map((internship, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold">{internship.title}</h3>
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {internship.matchScore}% Match
                              </Badge>
                            </div>
                            <p className="text-muted-foreground font-medium">{internship.company}</p>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{internship.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{internship.stipend}/month</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{internship.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">Due: {internship.deadline}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{app.role}</h4>
                        <p className="text-sm text-muted-foreground">{app.company}</p>
                        <p className="text-xs text-muted-foreground">Applied: {app.appliedDate}</p>
                      </div>
                      <Badge 
                        variant={app.status === "Shortlisted" ? "default" : app.status === "Interview Scheduled" ? "secondary" : "outline"}
                      >
                        {app.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Overall Profile Strength</span>
                    <span className="text-sm font-medium">{studentData.profileStrength}%</span>
                  </div>
                  <Progress value={studentData.profileStrength} className="h-2" />
                </div>
                
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Basic Information</span>
                    <Badge variant="default">Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Skills Assessment</span>
                    <Badge variant="default">Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Project Portfolio</span>
                    <Badge variant="secondary">80% Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Resume Upload</span>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25%</div>
                    <p className="text-muted-foreground">3 out of 12 applications resulted in interviews</p>
                    <div className="mt-4 text-sm text-success">↑ 5% improvement from last month</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Top Skills Match</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Python Programming</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Data Analysis</span>
                      <span className="text-sm font-medium">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Machine Learning</span>
                      <span className="text-sm font-medium">82%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;