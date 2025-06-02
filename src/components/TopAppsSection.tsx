import { BarChart3, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TopAppsSection = () => {
  const [timeFilter, setTimeFilter] = useState("Today");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const apps = [
    { rank: 1, name: "Cline", description: "Autonomous coding agent right in your IDE", tokens: "27.8B", url: "https://cline.bot/" },
    { rank: 2, name: "Roo Code", description: "A whole dev team of AI agents in your editor", tokens: "22.8B", url: "https://roocode.com/" },
    { rank: 3, name: "SillyTavern", description: "LLM frontend for power users", tokens: "5.53B", url: "https://sillytavern.app/" },
    { rank: 4, name: "Kilo Code", description: "AI coding agent for VS Code", tokens: "4.74B", url: "https://kilocode.ai/" },
    { rank: 5, name: "Chub AI", description: "GenAI for everyone", tokens: "4.59B", url: "https://chub.ai/" },
    { rank: 6, name: "liteLLM", description: "Open-source library to simplify LLM calls", tokens: "3.5B", url: "https://litellm.ai/" },
    { rank: 7, name: "HammerAI", description: "Chat with AI characters for free", tokens: "1.92B", url: "https://www.hammerai.com/" },
    { rank: 8, name: "Infinite Worlds", description: "Build your own adventures, share them with friends", tokens: "1.68B", url: "https://infiniteworlds.app/" },
    { rank: 9, name: "OpenRouter: Chatroom", description: "Chat with multiple LLMs at once", tokens: "1.42B", url: "https://openrouter.ai/" },
    { rank: 10, name: "shapes inc", description: "General purpose social agents", tokens: "1.06B", url: "https://shapes.inc/" },
    { rank: 11, name: "Quack", description: "Design and interact with characters", tokens: "1.03B", url: "https://quack.im/" },
    { rank: 12, name: "Caveduck", description: "AI character chat", tokens: "904M", url: "https://www.caveduck.io/" },
    { rank: 13, name: "RolePlai - Ai Chat", description: "new", tokens: "872M", url: "https://roleplai.app/", isNew: true },
    { rank: 14, name: "Khui AI", description: "new", tokens: "727M", url: "https://www.khuiai.com/", isNew: true },
    { rank: 15, name: "Jupi", description: "Roleplay & fantasy chat", tokens: "723M", url: "https://www.jupi.chat/" },
    { rank: 16, name: "Astra AI", description: "new", tokens: "649M", url: "https://astra-ai.co/", isNew: true },
    { rank: 17, name: "novelcrafter", description: "Your personal novel writing toolbox. Plan, write and tinker with your story.", tokens: "615M", url: "https://novelcrafter.com/" },
    { rank: 18, name: "Fraction AI", description: "Large perpetual datasets with community ownership", tokens: "614M", url: "https://dapp.fractionai.xyz/" },
    { rank: 19, name: "Kortix AI", description: "new", tokens: "545M", url: "https://kortix.ai/", isNew: true },
    { rank: 20, name: "Aider", description: "AI pair programming in your terminal", tokens: "464M", url: "https://aider.chat/" },
  ];

  const leftColumn = apps.slice(0, 10);
  const rightColumn = apps.slice(10, 20);

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-slate-9" />
            <h3 className="text-md font-medium text-slate-11">Top Apps</h3>
          </div>
          <p className="text-xs font-medium text-slate-11 hidden md:block">
            Largest public apps{" "}
            <a href="#" className="text-primary hover:underline">
              opting into
            </a>{" "}
            usage tracking on OpenRouter
          </p>
        </div>
        <div className="group relative">
          <Button
            variant="outline"
            className="border rounded-full text-sm pl-4 pr-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {timeFilter}
            <ChevronDown className="size-4" />
          </Button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-auto rounded-md shadow-slate-2 transition-opacity z-50 opacity-100 flex flex-col gap-1 p-1 right-0 overflow-visible text-sm md:text-xs bg-background shadow-lg border border-slate-6">
              {["Today", "This Week", "This Month"].map((option) => (
                <button
                  key={option}
                  className="whitespace-nowrap rounded w-full px-4 py-2 pr-8 text-left focus:outline-none text-foreground hover:text-slate-12 bg-background hover:bg-slate-4 text-sm"
                  onClick={() => {
                    setTimeFilter(option);
                    setDropdownOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="transition-opacity grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
        <div className="flex flex-col space-y-5">
          {leftColumn.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg">
              <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
              <div className="col-span-1">
                <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                  <div className="overflow-hidden rounded size-5">
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-6 pl-6 text-left">
                <a
                  className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer"
                  href={app.url}
                >
                  {app.name}
                  <ExternalLink className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">
                  {app.isNew ? (
                    <span className="text-primary">new</span>
                  ) : (
                    app.description
                  )}
                </div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-5">
          {rightColumn.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg">
              <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
              <div className="col-span-1">
                <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                  <div className="overflow-hidden rounded size-5">
                    <div className="h-full w-full bg-gradient-to-br from-green-400 to-blue-600 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-6 pl-6 text-left">
                <a
                  className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer"
                  href={app.url}
                >
                  {app.name}
                  <ExternalLink className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">
                  {app.isNew ? (
                    <span className="text-primary">new</span>
                  ) : (
                    app.description
                  )}
                </div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAppsSection;