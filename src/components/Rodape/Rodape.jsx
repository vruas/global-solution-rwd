import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div>
        <Image
        src="/img/logo.png"
        width={80}
        height={80}
        alt="Logo"
        
        />
      </div>
      <div className="my-4">
        <nav>
          <ul className="flex justify-between">
            <li>
              <Link className="link-rodape" href="/">Nosso Projeto</Link>
            </li>
            <li>
              <Link className="link-rodape" href="/consulta">Agende uma consulta</Link>
            </li>
            <li>
              <Link className="link-rodape" href="/parceiros">Empresa Parceira</Link>
            </li>
            <li>
              <Link className="link-rodape" href="/consulta/resultado">Ver Agendamentos</Link>
            </li>
          </ul>
        </nav>
        <hr className="my-8 border-t border-gray-300" />
        <div className="div-integrantes">
          <ul className="lista-integrantes">
            <li>
              <p className="nome-integrante">Gabriel Previ de Oliveira - 98774</p>
              <p>Banco de dados e Logo</p>
            </li>

            
            <li>
            <p className="nome-integrante">Gustavo Soares Fosaluza - 97850</p>
            <p>CRUD com o banco e consumo de API (Python)</p>
            </li>
            
            <li>
              <p className="nome-integrante">Lucas Mendonça F.da Silva - 99528</p> 
              <p>Back-end (Java), Banco de dados e IA</p>
            </li>
            
            <li>
              <p className="nome-integrante">Otavio Porto Peres - 550715</p>
              <p>Planejamento(Software Design & TX) e Logo</p>
            
            </li>
            
            <li>
              <p className="nome-integrante">Vitor da Silva Ruas - 550871</p>
              <p>Planejamento, Front-end e IA</p>

            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
