import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

export function Contact() {

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Contato
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-zinc-100 sm:text-4xl">
            Vamos conversar
          </h3>
          <p className="mt-4 text-zinc-400">
            Aberto a oportunidades, colaborações e troca de ideias sobre tecnologia.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition-colors hover:border-red-600/50"
            >
              <div className="rounded-full bg-red-600/10 p-3 text-red-500">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500">E-mail</p>
                <p className="text-zinc-100">{profile.email}</p>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
           <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition-colors hover:border-red-600/50"
            >
              <div className="rounded-full bg-red-600/10 p-3 text-red-500">
                <Linkedin size={22} />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500">LinkedIn</p>
                <p className="text-zinc-100">/in/caionunesdev</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
