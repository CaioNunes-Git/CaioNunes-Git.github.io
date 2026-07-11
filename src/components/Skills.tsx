import { motion } from "framer-motion";
import { Code, Server, Brain, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "../data/profile";

const icons: Record<string, LucideIcon> = {
  Code,
  Server,
  Brain,
  Database,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Habilidades
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-zinc-100 sm:text-4xl">
            Tecnologias e domínios
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((skill, index) => {
            const Icon = icons[skill.icon] || Code;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 hover:border-red-600/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-600/10 p-2 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100">{skill.category}</h4>
                </div>
                <p className="mt-2 text-sm text-zinc-500">{skill.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 border border-zinc-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
