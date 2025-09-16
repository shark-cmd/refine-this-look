import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden gradient-hero min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <Badge variant="secondary" className="text-white bg-white/20 border-white/30 backdrop-blur-sm animate-scale-in">
            <Sparkles className="w-3 h-3 mr-1" />
            Next-Generation RAG
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Epic A2A Multi-Collection
          <br />
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            RAG System
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Intelligent knowledge retrieval across multiple vector collections with AI-powered agents for seamless information discovery
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          <div className="flex items-center gap-2 text-white bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Real-time</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Multi-Collection</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button variant="hero" size="lg" className="shadow-glow">
            Start Conversation
          </Button>
          <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
            Admin Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};