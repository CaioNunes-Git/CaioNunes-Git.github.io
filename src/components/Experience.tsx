import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Experiência
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-zinc-100 sm:text-4xl">
            Onde já trabalhei
          </h3>
        </motion.div>

        <div className="relative border-l border-zinc-800 pl-8 md:pl-10">
          {profile.experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[2.5rem] top-1.5 h-4 w-4 rounded-full border-4 border-zinc-950 bg-red-600 md:-left-[3rem]" />
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-zinc-100">{exp.company}</h4>
                    <p className="text-red-500 font-medium">{exp.role}</p>
                  </div>
                  <span className="text-sm text-zinc-500 font-medium">{exp.period}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-500">{exp.location}</p>
                <p className="mt-3 text-zinc-400">{exp.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
