import { Home, FolderGit2, User, Mail, Sparkles, PanelLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
type SidebarProps = {
  activeSection: string;
  setActiveSection: (value: string) => void;
};

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
  const navItems = [
    { id: "home", label: "Home", icon: Home },
     { id: "about", label: "About", icon: User },
    { id: "projects", label: "Work", icon: FolderGit2 },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside   className={`hidden md:flex ${
          collapsed ? "w-20" : "w-54"
        } border-r border-white/5 bg-white/5 backdrop-blur-xl h-screen sticky top-0 flex-col py-8 z-40 transition-all duration-300`}
      >
       <div className="lg:px-6 mb-12 w-full">
  <div className="flex items-center justify-between w-full">
    {!collapsed && (
      <Sparkles className="w-8 h-8 text-primary hidden lg:block" />
    )}

    <button
      onClick={() => setCollapsed(!collapsed)}
      className="p-2 rounded-lg hover:bg-white/10 transition"
    >
      <PanelLeft
        className={`w-5 h-5 text-white transition-transform duration-300 ${
          collapsed ? "rotate-180" : ""
        }`}
      />
    </button>
  </div>

  {!collapsed && (
    <div className="mt-6">
      <h2 className="text-xl font-bold font-display tracking-widest hidden lg:block text-white">
        DEV BOLU
      </h2>

      <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1 hidden lg:block">
        Conversion-driven web solutions
      </span>
    </div>
  )}
</div>

        <ul className="flex-1 space-y-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id} className="w-full flex justify-center lg:block">
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-4 w-12 h-12 lg:w-full lg:h-auto lg:px-5 lg:py-4 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                    isActive
                      ? "text-white"
                      : "text-white/40 hover:text-white hover:bg-white/5"
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
 
                  <Icon
                    className={`w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? "text-primary" : ""
                    }`}
                  />

                   {!collapsed && (
                    <span className="font-medium tracking-wide">
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Mobile Top Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 md:hidden border-b border-white/10 bg-black/85 bg-transparent backdrop-blur-xl px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-white font-display font-bold
             tracking-wide text-lg leading-none">
              DEV BOLU
            </p>
         
          </div>

          <div className="flex gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`h-9 w-9 rounded-full flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-white/70 hover:text-white"
                  }`}
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