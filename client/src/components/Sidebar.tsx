import { Home, FolderGit2, User, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type SidebarProps = {
  activeSection: string;
  setActiveSection: (value: string) => void;
};

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Work", icon: FolderGit2 },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <aside className="hidden md:flex w-20 lg:w-64 border-r border-white/5 bg-black/70 backdrop-blur-xl h-screen sticky top-0 flex-col items-center lg:items-start py-8 z-40 transition-all duration-300 shrink-0">
        <div className="lg:px-8 mb-12 flex flex-col items-center lg:items-start w-full">
          <Sparkles className="w-8 h-8 text-primary mb-4 hidden lg:block" />
          <h2 className="text-xl font-bold font-display tracking-widest hidden lg:block text-white">HYPERTECH</h2>
          <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1 hidden lg:block">Conversion-driven web studio</span>
          <div className="lg:hidden text-primary font-bold text-2xl tracking-tighter flex items-center justify-center w-10 h-10 rounded bg-white/5">H</div>
        </div>

        <ul className="flex-1 w-full space-y-2 lg:px-4 flex flex-col items-center lg:items-stretch">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="w-full flex justify-center lg:block">
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-4 w-12 h-12 lg:w-full lg:h-auto lg:px-5 lg:py-4 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                    isActive ? "text-white" : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/20 lg:bg-primary/10 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary rounded-r-full hidden lg:block" />
                  )}
                  <Icon className={`w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-primary" : ""}`} />
                  <span className="hidden lg:block relative z-10 font-medium tracking-wide">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <nav className="fixed top-0 inset-x-0 z-50 md:hidden border-b border-white/10 bg-black/85 backdrop-blur-xl px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-white font-display tracking-wide text-lg leading-none">Hypertech</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mt-1">Product-focused developer</p>
          </div>
          <div className="flex gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`h-9 w-9 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-primary text-white" : "text-white/70"}`}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
