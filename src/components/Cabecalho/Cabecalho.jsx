import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="flex items-center ml-12">
        <div>
          <Image src="/img/logo.png" alt="Logo" width={120} height={120} />
        </div>
        <Link href="/usuario/login">
          <button className="btn-login-cabecalho">
            Entrar
          </button>
        </Link>
      </div>

      <nav className="nav-cabecalho">
        <Link className="link-cabecalho" href="/">
          Nosso Projeto
        </Link>
        <Link className="link-cabecalho" href="/consulta/agendamento">
          Agende uma Consulta
        </Link>
        <Link className="link-cabecalho" href="/parceiros">
          Empresa Parceira
        </Link>
        <Link className="link-cabecalho" href="/consulta/resultado">
          Ver Agendamentos
        </Link>
      </nav>
    </header>
  );
}
