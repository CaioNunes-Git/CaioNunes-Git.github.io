import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Projetos
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-zinc-100 sm:text-4xl">
            Trabalhos em destaque
          </h3>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/20 p-12 text-center"
          >
            <Folder className="mx-auto h-12 w-12 text-zinc-600" />
            <p className="mt-4 text-lg font-medium text-zinc-300">
              Projetos em preparação
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Em breve, seus principais projetos serão adicionados aqui. Edite{" "}
              <code className="rounded bg-zinc-800 px-1 py-0.5 text-red-500">src/data/projects.ts</code>{" "}
              para preencher.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 transition-colors hover:border-red-600/50"
              >
                <h4 className="text-xl font-bold text-zinc-100">{project.title}</h4>
                <p className="mt-2 flex-1 text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-red-500 transition-colors"
                    >
                      <Github size={16} /> Código
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-red-500 transition-colors"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
