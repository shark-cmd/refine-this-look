import { Hero } from "@/components/Hero";
import { ChatInterface } from "@/components/ChatInterface";
import { Collections } from "@/components/Collections";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ChatInterface />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <Collections />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
