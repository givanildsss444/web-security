import Image from "next/image";

export default function BarNavigate() {
  return (

    <nav className="h-20 w-full px-4 md:px-8 bg-[#1883DD] flex items-center justify-between">

      <Image 
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="w-36 md:w-44 h-auto"
      />

    <div className="flex items-center gap-2 md:gap-4">

        <span className="hidden md:inline text-sm md:text-base px-4 md:px-7 py-2 rounded-xl text-[#163651]">
            Contato
        </span>

        <span className="hidden md:inline text-sm md:text-base px-4 md:px-7 py-2 rounded-xl text-[#163651]">
            Planos
        </span>

        <span className="hidden md:inline text-sm md:text-base px-4 md:px-7 py-2 rounded-xl text-[#163651]">
            Sobre
        </span>

        <span className="text-sm md:text-base px-3 md:px-5 py-2 rounded-xl bg-[#163651] text-white">
            Registrar
        </span>

        <span className="text-sm md:text-base px-4 md:px-7 py-2 rounded-xl bg-[#163651] text-white">
            Entrar
        </span>

    </div>

    </nav>
  );
}
