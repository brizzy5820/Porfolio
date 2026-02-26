import { Home, FolderGit2, User, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar({ activeSection, setActiveSection }: any) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="w-20 lg:w-64 border-r border-white/5 bg-black/80 backdrop-blur-xl h-screen sticky top-0 flex flex-col items-center lg:items-start py-8 z-40 transition-all duration-300 shrink-0">
      <div className="lg:px-8 mb-12 flex flex-col items-center lg:items-start w-full">
        <Sparkles className="w-8 h-8 text-primary mb-4 hidden lg:block" />
        <h2 className="text-xl font-bold font-display tracking-widest hidden lg:block text-white">HYPERTECH</h2>
        <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1 hidden lg:block">Full Stack Dev</span>
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
  );
}
