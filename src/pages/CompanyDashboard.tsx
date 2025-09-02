import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Brain, Users, TrendingUp, Star, Bell, Plus, Search, Filter } from "lucide-react";
import indianFlag from "@/assets/indian-flag.png";

const CompanyDashboard = () => {
  const companyData = {
    name: "Tech Mahindra",
    activeInternships: 8,
    totalApplications: 245,
    shortlisted: 32,
    aiMatchAccuracy: 91
  };

  const candidateRankings = [
    {
      name: "Rahul Kumar",
      score: 94,
      skills: ["Python", "Machine Learning", "Data Science"],
      education: "IIT Delhi - B.Tech Computer Science",
      experience: "2 Previous Internships",
      location: "Delhi",
      status: "Available"
    },
    {
      name: "Sneha Patel",
      score: 91,
      skills: ["React", "Node.js", "JavaScript"],
      education: "NIT Surat - B.Tech Information Technology", 
      experience: "3 Projects, 1 Internship",
      location: "Gujarat",
      status: "Available"
    },
    {
      name: "Arjun Singh",
      score: 88,
      skills: ["Java", "Spring Boot", "MySQL"],
      education: "VIT Vellore - B.Tech Software Engineering",
      experience: "Multiple Projects",
      location: "Tamil Nadu", 
      status: "Interview Scheduled"
    }
  ];

  const internshipPostings = [
    {
      title: "AI/ML Engineer Intern",
      applications: 67,
      deadline: "2024-01-15",
      status: "Active",
      shortlisted: 8
    },
    {
      title: "Full Stack Developer Intern",
      applications: 89,
      deadline: "2024-01-20", 
      status: "Active",
      shortlisted: 12
    },
    {
      title: "Product Manager Intern",
      applications: 45,
      deadline: "2024-01-25",
      status: "Draft",
      shortlisted: 0
    }
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
                <p className="text-xs text-muted-foreground">Company Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Post Internship
              </Button>
              <Bell className="w-5 h-5 text-muted-foreground" />
              <div className="text-right">
                <p className="font-medium">{companyData.name}</p>
                <p className="text-xs text-muted-foreground">HR Department</p>
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
                  <p className="text-sm font-medium text-muted-foreground">Active Internships</p>
                  <p className="text-2xl font-bold text-primary">{companyData.activeInternships}</p>
                </div>
                <Plus className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                  <p className="text-2xl font-bold text-secondary">{companyData.totalApplications}</p>
                </div>
                <Users className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Shortlisted</p>
                  <p className="text-2xl font-bold text-success">{companyData.shortlisted}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">AI Match Accuracy</p>
                  <p className="text-2xl font-bold text-government">{companyData.aiMatchAccuracy}%</p>
                </div>
                <Brain className="w-8 h-8 text-government" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="candidates" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="candidates">AI-Ranked Candidates</TabsTrigger>
            <TabsTrigger value="internships">Manage Internships</TabsTrigger>
            <TabsTrigger value="analytics">Recruitment Analytics</TabsTrigger>
            <TabsTrigger value="insights">Market Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="candidates" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span>AI-Ranked Candidate Pool</span>
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Input placeholder="Search candidates..." className="w-64" />
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {candidateRankings.map((candidate, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold">{candidate.name}</h3>
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {candidate.score}% Match
                              </Badge>
                              <Badge variant={candidate.status === "Available" ? "default" : "secondary"}>
                                {candidate.status}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">{candidate.education}</p>
                            <p className="text-muted-foreground text-sm">{candidate.experience} • {candidate.location}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View Profile</Button>
                            <Button size="sm">Shortlist</Button>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill, skillIndex) => (
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

          <TabsContent value="internships" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Internship Postings</CardTitle>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Posting
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {internshipPostings.map((posting, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium">{posting.title}</h4>
                          <Badge variant={posting.status === "Active" ? "default" : "outline"}>
                            {posting.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {posting.applications} applications • {posting.shortlisted} shortlisted • Deadline: {posting.deadline}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">View Applications</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">245</div>
                    <p className="text-muted-foreground">Total applications this month</p>
                    <div className="mt-4 text-sm text-success">↑ 23% increase from last month</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quality Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">8.7/10</div>
                    <p className="text-muted-foreground">Average candidate quality score</p>
                    <div className="mt-4 text-sm text-success">↑ 0.5 improvement</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Top Skills Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Python</span>
                      <span className="text-sm font-medium">89 candidates</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Machine Learning</span>
                      <span className="text-sm font-medium">67 candidates</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">React.js</span>
                      <span className="text-sm font-medium">54 candidates</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Regional Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Maharashtra</span>
                      <span className="text-sm font-medium">78 applications</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Karnataka</span>
                      <span className="text-sm font-medium">65 applications</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Delhi NCR</span>
                      <span className="text-sm font-medium">52 applications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Market Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium text-primary mb-2">🎯 Talent Availability Forecast</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on current trends, expect 35% more AI/ML candidates available in Q2 2024. 
                      Consider expanding your ML internship programs.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-medium text-secondary mb-2">💡 Skill Gap Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      High demand for cloud computing skills (AWS, Azure) but low candidate availability. 
                      Consider offering training programs.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-success/5 rounded-lg">
                    <h4 className="font-medium text-success mb-2">📈 Competitive Intelligence</h4>
                    <p className="text-sm text-muted-foreground">
                      Your average stipend (₹25,000) is 15% above market average, giving you competitive advantage 
                      in attracting top talent.
                    </p>
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

export default CompanyDashboard;