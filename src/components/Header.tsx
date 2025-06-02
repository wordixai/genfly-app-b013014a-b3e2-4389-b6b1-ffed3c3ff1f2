import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">OR</span>
            </div>
            <span className="font-semibold text-foreground">OpenRouter</span>
          </div>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search models" 
              className="pl-10 w-64 bg-background"
            />
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Models</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Chat</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Rankings</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Docs</a>
          <Button variant="outline" size="sm">Sign In</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;