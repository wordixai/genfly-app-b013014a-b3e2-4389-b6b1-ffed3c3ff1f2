import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const FeaturedModels = () => {
  const models = [
    {
      name: "Gemini 2.5 Pro Preview",
      provider: "google",
      tokens: "204.5B",
      latency: "2.2s",
      growth: "+27.2%",
      growthColor: "text-green-10",
      icon: "https://openrouter.ai/images/icons/GoogleGemini.svg",
      featured: false,
    },
    {
      name: "GPT-4.1",
      provider: "openai",
      tokens: "41.4B",
      latency: "820ms",
      growth: "-9.44%",
      growthColor: "text-red-10",
      icon: "https://openrouter.ai/images/icons/OpenAI.svg",
      featured: true,
    },
    {
      name: "Claude Sonnet 4",
      provider: "anthropic",
      tokens: "232.2B",
      latency: "1.9s",
      growth: "--",
      growthColor: "text-slate-9",
      icon: "https://openrouter.ai/images/icons/Anthropic.svg",
      featured: false,
      isNew: true,
    },
  ];

  const providerIcons = [
    { name: "Google", icon: "https://openrouter.ai/images/icons/GoogleGemini.svg" },
    { name: "OpenAI", icon: "https://openrouter.ai/images/icons/OpenAI.svg", invert: true },
    { name: "Anthropic", icon: "https://openrouter.ai/images/icons/Anthropic.svg" },
  ];

  return (
    <div className="w-full min-w-80 space-y-3 md:w-auto">
      {/* Mobile routing curves */}
      <div className="block md:hidden">
        <svg
          width="100%"
          className="h-10"
          viewBox="0 0 320 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <title>Routing Curves</title>
          <g stroke="currentColor" strokeWidth="1.5">
            <path
              d="M155 2C160 15 60 5 60 18"
              className="origin-center transition-all duration-300 text-slate-6"
            />
            <path
              d="M160 2C160 12 160 15 160 18"
              className="origin-center transition-all duration-300 text-primary"
            />
            <path
              d="M165 2C160 15 260 5 260 18"
              className="origin-center transition-all duration-300 text-slate-6"
            />
          </g>
          <g className="text-slate-7">
            <circle
              cy="24"
              cx="60"
              r="3"
              fill="currentColor"
              className="origin-center transition-all duration-300 text-slate-7"
            />
            <circle
              cy="24"
              cx="160"
              r="4"
              fill="currentColor"
              className="origin-center transition-all duration-300 text-primary"
            />
            <circle
              cy="24"
              cx="260"
              r="3"
              fill="currentColor"
              className="origin-center transition-all duration-300 text-slate-7"
            />
          </g>
        </svg>

        {/* Provider icons grid */}
        <div className="grid grid-cols-3 gap-4 pb-3">
          {providerIcons.map((provider, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-11 flex items-center justify-center rounded-lg p-4"
            >
              <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className={`overflow-hidden rounded-full ${provider.invert ? 'dark:invert' : ''}`}>
                  <img
                    width="256"
                    height="256"
                    alt={`Favicon for ${provider.name.toLowerCase()}`}
                    src={provider.icon}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Featured model card for mobile */}
        <div className="group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary md:border-primary">
          <div className="space-y-2">
            <div>
              <a className="hover:underline" href="#">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-foreground font-medium">GPT-4.1</h3>
                  </div>
                  <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <div className="overflow-hidden rounded-full dark:invert">
                      <img
                        width="256"
                        height="256"
                        alt="Favicon for openai"
                        src="https://openrouter.ai/images/icons/OpenAI.svg"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex items-center">
                <span className="text-muted-foreground text-xs">
                  by{" "}
                  <a className="text-primary hover:underline" href="#">
                    openai
                  </a>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
              <div>
                <p className="text-green-10 text-sm font-medium">41.4B</p>
                <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
              </div>
              <div>
                <p className="text-sm font-medium">820ms</p>
                <p className="text-muted-foreground text-[10px]">Latency</p>
              </div>
              <div>
                <p className="text-sm font-medium text-red-10">-9.44%</p>
                <p className="text-muted-foreground text-[10px]">Weekly growth</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-2 pt-4">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <a className="text-primary text-xs hover:underline" href="#">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </a>
        </div>
      </div>

      {/* Desktop featured models */}
      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <Button
            variant="link"
            className="h-6 rounded-md px-1.5 shadow-xs text-primary gap-0 text-xs hover:underline"
          >
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        </div>

        {models.map((model, index) => (
          <div
            key={index}
            className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${
              model.featured ? "md:border-primary" : "border-slate-6"
            }`}
          >
            <div className="space-y-2">
              <div>
                <a className="hover:underline" href="#">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-foreground font-medium">{model.name}</h3>
                      {model.isNew && (
                        <span className="bg-muted text-muted-foreground rounded-sm px-1.5 py-0.5 text-[10px]">
                          New
                        </span>
                      )}
                    </div>
                    <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className={`overflow-hidden rounded-full ${model.provider === 'openai' ? 'dark:invert' : ''}`}>
                        <img
                          width="256"
                          height="256"
                          alt={`Favicon for ${model.provider}`}
                          src={model.icon}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-xs">
                    by{" "}
                    <a className="text-primary hover:underline" href="#">
                      {model.provider}
                    </a>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
                <div>
                  <p className="text-green-10 text-sm font-medium">{model.tokens}</p>
                  <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{model.latency}</p>
                  <p className="text-muted-foreground text-[10px]">Latency</p>
                </div>
                <div>
                  <p className={`text-sm font-medium ${model.growthColor}`}>{model.growth}</p>
                  <p className="text-muted-foreground text-[10px]">Weekly growth</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedModels;