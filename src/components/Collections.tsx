import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  RefreshCw, 
  Database, 
  Star, 
  Settings, 
  AlertCircle,
  CheckCircle2,
  FolderOpen
} from "lucide-react";

export const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMode, setSelectedMode] = useState("auto");

  const collections = [
    { id: 1, name: "Medical Research Papers", count: 1243, status: "active", type: "research" },
    { id: 2, name: "Technical Documentation", count: 856, status: "active", type: "docs" },
    { id: 3, name: "Legal Documents", count: 442, status: "syncing", type: "legal" },
    { id: 4, name: "Product Specifications", count: 234, status: "active", type: "product" },
  ];

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="gradient-primary p-2 rounded-lg">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Collections</h2>
            <p className="text-muted-foreground text-sm">Browse and select collections to query</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Search and Controls */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search collections..."
                className="pl-10 border-muted focus:border-primary transition-smooth"
              />
            </div>
            <Button variant="outline" size="icon" className="hover:shadow-card transition-smooth">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>

          {/* Mode Selection */}
          <div className="flex gap-2 p-3 bg-muted/50 rounded-lg">
            <Button
              variant={selectedMode === "auto" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedMode("auto")}
              className="transition-smooth"
            >
              Auto
            </Button>
            <Button
              variant={selectedMode === "manual" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedMode("manual")}
              className="transition-smooth"
            >
              Manual
            </Button>
            <Button
              variant={selectedMode === "hybrid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedMode("hybrid")}
              className="transition-smooth"
            >
              Hybrid
            </Button>
          </div>

          {/* Collections List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredCollections.length > 0 ? (
              filteredCollections.map((collection) => (
                <div
                  key={collection.id}
                  className="p-4 border border-muted rounded-lg hover:shadow-card transition-smooth cursor-pointer group animate-fade-in"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center group-hover:gradient-primary group-hover:text-white transition-smooth">
                        <FolderOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{collection.name}</h3>
                        <p className="text-xs text-muted-foreground">{collection.count} documents</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {collection.status === "active" ? (
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Active
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Syncing
                        </Badge>
                      )}
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Star className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Database className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="font-medium mb-2">No collections found</h3>
                <p className="text-sm">No collections match your search criteria</p>
              </div>
            )}
          </div>

          {/* Auto Mode Info */}
          {selectedMode === "auto" && (
            <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg animate-fade-in">
              <p className="text-xs text-primary">
                <Settings className="w-3 h-3 inline mr-1" />
                AI selects collections automatically based on your query
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};