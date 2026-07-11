import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Certificações
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-zinc-100 sm:text-4xl">
            Formação e credenciais
          </h3>
        </motion.div>

        {certifications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/20 p-12 text-center"
          >
            <Award className="mx-auto h-12 w-12 text-zinc-600" />
            <p className="mt-4 text-lg font-medium text-zinc-300">
              Certificações em preparação
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Em breve, suas certificações serão adicionadas aqui. Edite{" "}
              <code className="rounded bg-zinc-800 px-1 py-0.5 text-red-500">src/data/certifications.ts</code>{" "}
              para preencher.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 transition-colors hover:border-red-600/50"
              >
                <Award className="h-8 w-8 text-red-500" />
                <h4 className="mt-4 text-lg font-bold text-zinc-100">{cert.name}</h4>
                <p className="text-sm text-zinc-400">{cert.issuer}</p>
                <p className="text-sm text-zinc-500">{cert.date}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-red-500 hover:text-red-400 transition-colors"
                  >
                    Ver credencial <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
