import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    { label: "Active Students", value: "12,500+", change: "+15%" },
    { label: "Partner Companies", value: "750+", change: "+25%" },
    { label: "Successful Placements", value: "8,900+", change: "+40%" },
    { label: "AI Match Accuracy", value: "87.5%", change: "+5%" },
    { label: "Average Stipend", value: "₹15,000", change: "+20%" },
    { label: "Platform Coverage", value: "28 States", change: "+8%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Platform Impact
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time data showcasing the success of PM Internship initiative
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-success font-medium">
                  {stat.change} this month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;