import React from "react";
import Link from "next/link";

export default function Cabecalho () {
    return (
        <header className="bg-gray-600 flex justify-between items-center h-32">
            <div className="flex items-center">
                <div>
                     // Imagem cabecalho
                </div>

                <Link href="/usuario/login">
                <button className="bg-red-500 text-white py-3 px-6 rounded-md mt-6 mb-2 hover:bg-red-600 transition duration-500 ease-out">
                    Entrar
                    </button>
                </Link>
               
            </div>

            <nav className="flex flex-row justify-around">
                <Link className="link-cabecalho" href="/">Nosso Projeto</Link>
                <Link className="link-cabecalho" href="/consulta/agendamento">Agende uma Consulta</Link>
                <Link className="link-cabecalho" href="/parceiros">Empresa Parceira</Link>
                <Link className="link-cabecalho" href="/consulta/resultado">Ver Agendamentos</Link>
            </nav>
            
        </header>
    )
}