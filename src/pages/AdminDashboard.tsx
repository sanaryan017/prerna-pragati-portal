import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Shield, Users, Building2, TrendingUp, Brain, AlertTriangle, CheckCircle, Clock, MapPin } from "lucide-react";
import indianFlag from "@/assets/indian-flag.png";

const AdminDashboard = () => {
  const adminData = {
    totalStudents: 12500,
    totalCompanies: 750,
    activeInternships: 1200,
    completionRate: 87.5,
    aiAccuracy: 91.2,
    fairnessScore: 94.8
  };

  const stateDistribution = [
    { state: "Maharashtra", students: 2100, companies: 145, color: "#FF9500" },
    { state: "Karnataka", students: 1850, companies: 120, color: "#007AFF" },
    { state: "Delhi", students: 1600, companies: 98, color: "#34C759" },
    { state: "Tamil Nadu", students: 1400, companies: 87, color: "#AF52DE" },
    { state: "Gujarat", students: 1200, companies: 76, color: "#FF2D92" },
    { state: "Others", students: 4350, companies: 224, color: "#8E8E93" }
  ];

  const monthlyStats = [
    { month: "Aug", applications: 1200, placements: 980, accuracy: 89 },
    { month: "Sep", applications: 1450, placements: 1190, accuracy: 90 },
    { month: "Oct", applications: 1680, placements: 1420, accuracy: 91 },
    { month: "Nov", applications: 1850, placements: 1580, accuracy: 91.5 },
    { month: "Dec", applications: 2100, placements: 1820, accuracy: 92 }
  ];

  const sectorDistribution = [
    { sector: "IT/Software", value: 35, color: "#FF9500" },
    { sector: "Finance", value: 20, color: "#007AFF" },
    { sector: "Healthcare", value: 15, color: "#34C759" },
    { sector: "Manufacturing", value: 12, color: "#AF52DE" },
    { sector: "Consulting", value: 10, color: "#FF2D92" },
    { sector: "Others", value: 8, color: "#8E8E93" }
  ];

  const alerts = [
    { type: "warning", message: "Bias detected in Chennai region - investigating", time: "2 hours ago" },
    { type: "success", message: "AI accuracy improved by 2% this week", time: "6 hours ago" },
    { type: "info", message: "New company verification pending: Infosys Mysore", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-government text-government-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img src={indianFlag} alt="Indian Flag" className="w-8 h-8" />
              <div>
                <h1 className="text-xl font-bold">PM Internship Platform - Admin</h1>
                <p className="text-xs opacity-80">Ministry of Corporate Affairs</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium">Admin Portal</p>
                <p className="text-xs opacity-80">Government Dashboard</p>
              </div>
              <Shield className="w-8 h-8" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{adminData.totalStudents.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <Building2 className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold text-secondary">{adminData.totalCompanies}</p>
                <p className="text-sm text-muted-foreground">Partner Companies</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                <p className="text-2xl font-bold text-success">{adminData.activeInternships}</p>
                <p className="text-sm text-muted-foreground">Active Internships</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-government mx-auto mb-2" />
                <p className="text-2xl font-bold text-government">{adminData.completionRate}%</p>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{adminData.aiAccuracy}%</p>
                <p className="text-sm text-muted-foreground">AI Accuracy</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-success mx-auto mb-2" />
                <p className="text-2xl font-bold text-success">{adminData.fairnessScore}%</p>
                <p className="text-sm text-muted-foreground">Fairness Score</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <span>System Alerts & Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                  alert.type === 'success' ? 'bg-green-50 border-green-400' :
                  'bg-blue-50 border-blue-400'
                }`}>
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Platform Overview</TabsTrigger>
            <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
            <TabsTrigger value="regional">Regional Distribution</TabsTrigger>
            <TabsTrigger value="fairness">Fairness Monitoring</TabsTrigger>
            <TabsTrigger value="insights">Predictive Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Application Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="applications" stroke="#FF9500" strokeWidth={2} />
                      <Line type="monotone" dataKey="placements" stroke="#34C759" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sector-wise Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sectorDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ sector, value }) => `${sector}: ${value}%`}
                      >
                        {sectorDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Match Accuracy</span>
                      <span className="text-sm font-bold text-primary">{adminData.aiAccuracy}%</span>
                    </div>
                    <Progress value={adminData.aiAccuracy} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Response Time</span>
                      <span className="text-sm font-bold text-secondary">0.3s</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">System Uptime</span>
                      <span className="text-sm font-bold text-success">99.8%</span>
                    </div>
                    <Progress value={99.8} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>ML Model Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={monthlyStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="accuracy" fill="#FF9500" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regional" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>State-wise Platform Adoption</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {stateDistribution.map((state, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: state.color }}
                        ></div>
                        <div>
                          <h4 className="font-medium">{state.state}</h4>
                          <p className="text-sm text-muted-foreground">
                            {state.students.toLocaleString()} students • {state.companies} companies
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{((state.students / adminData.totalStudents) * 100).toFixed(1)}%</p>
                        <p className="text-sm text-muted-foreground">of total</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fairness" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bias Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-2">2</div>
                    <p className="text-muted-foreground">Minor biases detected</p>
                    <div className="mt-4">
                      <Badge variant="outline" className="text-yellow-600">Under Investigation</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Gender Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Male Students</span>
                      <span className="text-sm font-medium">58%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Female Students</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                      Target: 50-50 balance
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Economic Background</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">General Category</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">OBC</span>
                      <span className="text-sm font-medium">27%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">SC/ST</span>
                      <span className="text-sm font-medium">28%</span>
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
                  <CardTitle>AI-Powered Predictive Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium text-primary mb-2">📈 Demand Forecast</h4>
                    <p className="text-sm text-muted-foreground">
                      Predicted 40% increase in AI/ML internship demand in Q2 2024. Recommend increasing 
                      partner company outreach in tech sector.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-medium text-secondary mb-2">🎯 Skill Gap Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Critical shortage in cybersecurity and cloud computing skills. Consider launching 
                      targeted skill development programs.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-success/5 rounded-lg">
                    <h4 className="font-medium text-success mb-2">🌍 Regional Expansion</h4>
                    <p className="text-sm text-muted-foreground">
                      Northeast states show high student engagement but low company participation. 
                      Strategic opportunity for regional expansion.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-government/5 rounded-lg">
                    <h4 className="font-medium text-government mb-2">⚖️ Policy Recommendations</h4>
                    <p className="text-sm text-muted-foreground">
                      Current policies achieving 94.8% fairness score. Suggest minor adjustments to 
                      regional quotas to improve rural participation.
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

export default AdminDashboard;