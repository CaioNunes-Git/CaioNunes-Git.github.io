import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Sobre
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-zinc-100 sm:text-4xl">
            Transformando desafios complexos em código, soluções e resultados
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {profile.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
