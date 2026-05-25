import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    num: "01",
    title: "ByteBuy",
    description:
      "A premium storefront optimized for speed, trust, and checkout completion. Reduced purchase friction from first click to payment.",
    imageSrc: "public/images/projectimg_bytebuy.jpg",
    tech: ["E-commerce"],
    liveDemoUrl: "https://www.bytebuy.name.ng",
    featured: true,
  },
  {
    id: 2,
    num: "02",
    title: "Authentic Essentials",
    description:
      "Complex reporting transformed into clear, actionable dashboards with fluid transitions and context-rich visual hierarchy.",
    imageSrc: "public/images/projecimg_a.e.jpg",
    tech: ["Lead generation site"],
    liveDemoUrl: "https://www.authenticessentials.com.ng/",
    featured: false,
  },
  {
    id: 3,
    num: "03",
    title: "Free Express",
    description:
      "Polished micro-interactions and real-time messaging that kept users engaged longer across devices.",
    imageSrc: "public/images/projectimg_f.e.jpg",
    tech: ["React Native", "GraphQL", "Framer Motion"],
    liveDemoUrl: "https://freeexpress.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    num: "04",
    title: "Atelier",
    description:
      "A premium storefront optimized for speed, trust, and checkout completion. Reduced purchase friction from first click to payment.",
    imageSrc: "public/images/projecimg_atelier.jpg",
    tech: ["E-commerce"],
    liveDemoUrl: "https://atelier-xenith.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    num: "05",
    title: "Estatevita",
    description:
      "A premium storefront optimized for speed, trust, and checkout completion. Reduced purchase friction from first click to payment.",
    imageSrc: "public/images/projectimg_realestate.jpg",
    tech: ["Real estate"],
    liveDemoUrl: "https://atelier-xenith.vercel.app/",
    featured: false,
  },
];

interface Project {
  id: number;
  num: string;
  title: string;
  description: string;
  imageSrc: string;
  tech: string[];
  liveDemoUrl: string;
  featured: boolean;
}

// ─── Mobile Modal ────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Sheet */}
        <motion.div
          className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 260 }}
        >
          {/* Image */}
          <div className="relative w-full h-48 bg-black">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <p
              className="text-[9px] tracking-[0.25em] uppercase text-white/40 mb-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.num}
            </p>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {project.title}
            </h3>
            <p
              className="text-white/65 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20 text-white/60 bg-white/[0.07]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a 
              
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-4 py-2.5 text-xs font-semibold hover:bg-gray-100 transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open live demo
              </a>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Card ────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onMobileClick: (p: Project) => void;
}

function ProjectCard({
  project,
  featured = false,
  onMobileClick,
}: ProjectCardProps) {
  // Desktop: clicking the card opens the URL directly
  const handleDesktopClick = () => {
    window.open(project.liveDemoUrl, "_blank", "noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0, 0.1, 1] }}
      className={`group relative rounded-2xl overflow-hidden bg-black ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      {/* Image — always fully visible (object-contain + black bg) */}
      <img
        src={project.imageSrc}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,0,0.1,1)] md:group-hover:scale-[1.04]"
      />

      {/* ── MOBILE: tap target (no hover) ─────────────────────── */}
      <button
        className="absolute inset-0 z-10 md:hidden"
        aria-label={`View ${project.title} details`}
        onClick={() => onMobileClick(project)}
      />

      {/* Mobile always-visible label at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none md:hidden">
        <p className="text-[9px] tracking-[0.2em] uppercase text-white/50 mb-0.5">
          {project.num}
        </p>
        <h3
          className={`font-bold text-white leading-tight ${
            featured ? "text-lg" : "text-sm"
          }`}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/25 text-white/70 bg-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: hover overlay + clickable ────────────────── */}
      <button
        className="absolute inset-0 z-10 hidden md:block cursor-pointer"
        aria-label={`Open ${project.title}`}
        onClick={handleDesktopClick}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-end p-6 pointer-events-none">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/55 mb-1">
          {project.num}
        </p>
        <h3
          className={`font-bold text-white leading-tight mb-2 ${
            featured ? "text-xl" : "text-base"
          }`}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.title}
        </h3>
        <p
          className="text-white/80 text-xs leading-relaxed mb-3 max-w-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/25 text-white/75 bg-white/[0.1]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Visual affordance (not a real button — click handled by overlay button above) */}
        <div className="inline-flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-xs font-semibold w-fit">
          <ExternalLink className="w-3 h-3" />
          Live demo
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Projects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [featured, ...rest] = projects;

  return (
    <section className="w-full max-w-7xl mx-auto text-white">
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-7 bg-white/20" />
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Selected works
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Projects built for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              performance
            </span>
          </h2>
        </div>
        <span
          className="text-xs text-white/40 border border-white/10 rounded-full px-4 py-1.5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {projects.length} projects
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[280px] sm:auto-rows-[340px]">
        <ProjectCard
          project={featured}
          featured
          onMobileClick={setModalProject}
        />
        {rest.map((p) => (
          <ProjectCard key={p.id} project={p} onMobileClick={setModalProject} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 mt-8">
        <div className="flex-1 h-px bg-white/10" />
        <span
          className="text-[10px] uppercase tracking-[0.15em] text-white/30 hidden sm:block"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Hover to explore · Click to visit
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Mobile Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}