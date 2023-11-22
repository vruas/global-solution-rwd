import React from "react";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="bg-gray-600 fixed w-full  items-center h-24">
      <div className="flex items-center">
        <div>// Imagem cabecalho</div>
        <div>
          <Link href="/cadastro/login">
            <button>Entrar</button>
          </Link>
        </div>
      </div>

      <nav className="flex flex-row justify-end">
        <Link className="link-cabecalho" href="/">
          Projeto
        </Link>
        <Link className="link-cabecalho" href="/consulta">
          Agende uma Consulta
        </Link>
        <Link className="link-cabecalho" href="/parceiros">
          Hapvida
        </Link>
        <Link className="link-cabecalho" href="/ia-saude">
          IA na Saúde
        </Link>
      </nav>
    </header>
  );
}
