import { ExternalLink } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      link: "/models",
      linkText: "Browse all",
      visual: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
          </div>
          <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
            {Array.from({ length: 25 }, (_, i) => (
              <div
                key={i}
                className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out"
                style={{
                  animation: `float${i % 25} 4s ease-in-out infinite ${i * 150}ms`,
                  opacity: 0.85,
                  transform: i % 5 === 1 || i % 5 === 2 || i % 5 === 3 ? 'translateX(36px)' : 'translateX(0)',
                }}
              >
                <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                  <div className="overflow-hidden rounded-full">
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Higher Availability",
      description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      link: "/docs/features/uptime-optimization",
      linkText: "Learn more",
      visual: (
        <div className="h-full flex items-center justify-center">
          <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
            <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
              anthropic/claude-3.7-sonnet
            </div>
            <svg
              width="100%"
              height="70"
              viewBox="0 0 200 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground/60"
            >
              <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75"></path>
              <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75"></path>
              <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75"></path>
            </svg>
            <div className="flex justify-between w-full">
              <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                <div className="overflow-hidden rounded-full">
                  <div className="h-full w-full bg-gradient-to-br from-green-400 to-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                <div className="overflow-hidden rounded-full">
                  <div className="h-full w-full bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                <div className="overflow-hidden rounded-full">
                  <div className="h-full w-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.",
      link: "/docs/features/provider-routing#provider-sorting",
      linkText: "Learn more",
      visual: (
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-1 to-slate-1 via-transparent opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-1 to-slate-1 via-transparent opacity-20"></div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <svg width="300" height="150" viewBox="0 0 300 150" className="w-full h-full">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path
                d="M20 120 Q80 80 150 90 T280 70"
                stroke="url(#gradient1)"
                strokeWidth="3"
                fill="none"
                className="drop-shadow-sm"
              />
              <circle cx="20" cy="120" r="4" fill="#3b82f6" />
              <circle cx="150" cy="90" r="4" fill="#8b5cf6" />
              <circle cx="280" cy="70" r="4" fill="#06b6d4" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      title: "Custom Data Policies",
      description: "Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.",
      link: "/docs/features/privacy-and-logging",
      linkText: "View docs",
      visual: (
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-52">
            <div className="flex justify-between items-end w-full px-[45px] -mb-2">
              <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
                <svg className="size-5 text-green-9" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
              </div>
              <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <svg className="size-32 text-muted-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.3">
              <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z" />
              <path strokeWidth=".4" d="M14.2 14.5a3.6 3.6 0 0 0 1.5-.2 1.2 1.2 0 0 0-1.9-1m.4 1.2v.3a4.8 4.8 0 0 1-2.4.6c-.9 0-1.7-.2-2.4-.6a2.4 2.4 0 0 1 0-.3m4.8 0a2.4 2.4 0 0 0-.4-1.3m0 0a2.4 2.4 0 0 0-2-1.1 2.4 2.4 0 0 0-2 1.1m0 0a1.2 1.2 0 0 0-1.9 1.1 3.6 3.6 0 0 0 1.5.2m.4-1.3a2.4 2.4 0 0 0-.4 1.3M13 9.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm2.4 1.2a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm-5.4 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z" />
            </svg>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {features.map((feature, index) => (
          <a key={index} className="h-full" href={feature.link}>
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
              <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
                {feature.visual}
              </div>
              <div className="flex flex-col gap-2 px-6 py-4 h-full">
                <div className="flex flex-col gap-2 h-full">
                  <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <span className="text-primary group-hover/card:underline">
                  {feature.linkText}
                  <ExternalLink className="ml-1 inline-block w-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;