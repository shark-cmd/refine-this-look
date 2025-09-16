import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Rocket,
  Target,
  Search
} from "lucide-react";

export const QuickActions = () => {
  const actions = [
    {
      title: "Admin Dashboard",
      description: "Manage collections and settings", 
      icon: Settings,
      color: "gradient-primary",
      action: () => console.log("Admin Dashboard")
    },
    {
      title: "Analytics",
      description: "View usage and performance metrics",
      icon: BarChart3,
      color: "bg-green-500",
      action: () => console.log("Analytics")
    },
    {
      title: "Quick Search",
      description: "Search across all collections",
      icon: Search,
      color: "bg-blue-500", 
      action: () => console.log("Quick Search")
    },
    {
      title: "Help & Support",
      description: "Get help and documentation",
      icon: HelpCircle,
      color: "bg-orange-500",
      action: () => console.log("Help")
    }
  ];

  const startConversation = [
    "What collections are available?",
    "How does the auto selection mode work?", 
    "Show me the most relevant collections for medical research"
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="gradient-primary p-2 rounded-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Quick Actions</h2>
              <p className="text-muted-foreground text-sm">Common tasks and shortcuts</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actions.map((action, index) => (
              <div
                key={index}
                onClick={action.action}
                className="p-4 border border-muted rounded-lg hover:shadow-card transition-smooth cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color}`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm group-hover:text-primary transition-smooth">
                      {action.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Start Conversation */}
      <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="gradient-primary p-2 rounded-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Start a Conversation</h2>
              <p className="text-muted-foreground text-sm">Ask questions about your collections or select a mode to get started</p>
            </div>
          </div>

          <div className="space-y-3">
            {startConversation.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4 hover:shadow-card transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center mt-0.5">
                    <Brain className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">{question}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};