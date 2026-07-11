import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
