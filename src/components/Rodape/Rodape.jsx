import React from "react";
import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="bg-gray-600 text-black font-bold py-3 flex flex-col w-full bottom-0">
      <div>// Imagem rodape</div>
      <nav className="mb-4">
        <div>
          <ul className="flex justify-around">
            <li>
              <Link href="/">Nosso Projeto</Link>
            </li>
            <li>
              <Link href="/consulta">Agende uma consulta</Link>
            </li>
            <li>
              <Link href="/parceiros">Hapvida</Link>
            </li>
            <li>
              <Link href="/ia-saude"></Link>Ver Agendamentos
            </li>
          </ul>
        </div>
        <div className="flex  flex-col justify-around items-center">
          <p className="text-red-500">Integrantes:</p>
          <ul className="flex justify-between gap-4 text-red-500">
            <li>Gabriel Previ - Banco de Dados</li>
            <li><span> | </span></li>
            <li>Gustavo Soares - Python</li>
            <li><span> | </span></li>
            <li>Lucas Mendonça - Back-end (Java)</li>
            <li><span> | </span></li>
            <li>Otávio Porto - Software Design</li>
            <li><span> | </span></li>
            <li>Vitor Ruas - Front-end</li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
