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
      <aside
        className={`hidden md:flex ${
          collapsed ? "w-20" : "w-64"
        } border-r border-white/5 bg-white/5 backdrop-blur-xl h-screen sticky top-0 flex-col py-8 z-40 transition-all duration-300`}
      >
        {/* Top Section */}
        <div className="px-4 mb-10 flex items-center justify-between">
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold tracking-widest text-white">
                DEV BOLU
              </h2>
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                Conversion-driven web studio
              </span>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <PanelLeft className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Nav Items */}
        <ul className="flex-1 space-y-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl transition-all duration-300 relative group ${
                    isActive
                      ? "text-white bg-primary/10"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <Icon
                    className={`w-5 h-5 shrink-0 ${
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

      {/* Mobile Top Navigation (unchanged) */}
      <nav className="fixed top-0 inset-x-0 z-50 md:hidden border-b border-white/10 bg-black/85 backdrop-blur-xl px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-white tracking-wide text-lg leading-none">
            DEV BOLU
          </p>

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