import { motion } from "framer-motion";
import { Mail, Linkedin, ChevronDown } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-100">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-red-500">
          {profile.title} <span className="text-zinc-500">|</span> {profile.subtitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 font-semibold text-zinc-100 hover:border-red-600 hover:text-white transition-colors"
          >
            Entrar em contato
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-red-500 transition-colors"
          >
            <Mail size={18} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-red-500 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Saiba mais</span>
        <ChevronDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
