import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Settings, MessageCircle, Sparkles } from "lucide-react";

export const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm your AI assistant. Ask me questions about your collections using natural language.",
      timestamp: new Date()
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot", 
        content: "I understand your question. Let me search through your collections to find the most relevant information...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const suggestedQuestions = [
    "What collections are available?",
    "How does the auto selection mode work?",
    "Show me the most relevant collections for medical research"
  ];

  return (
    <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="gradient-primary p-2 rounded-lg">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Chat Interface</h2>
            <p className="text-muted-foreground text-sm">Ask questions about your collections using AI-powered agents</p>
          </div>
        </div>

        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 animate-fade-in ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className={`flex gap-3 max-w-[80%] ${msg.type === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.type === "bot" ? "gradient-primary" : "bg-muted"
                }`}>
                  {msg.type === "bot" ? (
                    <Bot className="w-4 h-4 text-white" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  msg.type === "user" 
                    ? "gradient-primary text-white" 
                    : "bg-muted"
                }`}>
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setMessage(question)}
                className="text-xs hover:shadow-card transition-smooth"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                {question}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question about your collections..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border-muted focus:border-primary transition-smooth"
            />
            <Button 
              onClick={handleSend}
              className="gradient-primary text-white shadow-elegant hover:shadow-glow transition-smooth"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-4 border-t border-muted">
          <Badge variant="outline">Show Thinking</Badge>
          <Badge variant="outline">Clear</Badge>
          <Badge variant="outline">Auto</Badge>
          <Badge variant="outline">Manual</Badge>
          <Badge variant="outline">Hybrid</Badge>
        </div>
      </div>
    </Card>
  );
};