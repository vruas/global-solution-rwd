"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";

export default function Parceiros() {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      window.location.href = "/usuario/login";
    }
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Conheça mais sobre a{" "}
          <a href="https://www.hapvidandi.com.br/">
            <span className="text-red-500 hover:text-red-800 transition-all ease-out">
              Hapvida NotreDame Intermédica
            </span>
          </a>
          <hr className="my-8 border-t border-red-500" />
        </h2>
        <p className="mb-4">
          A Hapvida NotreDame Intermédica é, hoje, a maior operadora de saúde do
          Brasil, com mais de 16,1 milhões de beneficiários de saúde e
          odontologia. Fruto da fusão entre o Hapvida, que começou suas
          operações em 1979 com a inauguração do Hospital Antonio Prudente, e a
          NotreDame Intermédica, fundada em 1968 e pioneira em Medicina
          Preventiva no País, oferece saúde integral e odontologia para Clientes
          empresariais e individuais em todas as regiões: Norte, Nordeste,
          Centro-Oeste, Sudeste e Sul.
        </p>
        <p className="mb-4">
          Conta com rede assistencial própria composta por 85 hospitais, 77
          prontos atendimentos e 331 clínicas médicas. Também dispõe aos seus
          beneficiários 271 centros de diagnóstico por imagem e coleta
          laboratorial, dos quais cerca de 100 operações fazem parte do
          Laboratório NotreLabs, uma rede nacional com capacidade de processar
          4,5 milhões de análises clínicas e 500 mil exames de imagens por mês.
        </p>
        <p className="mb-4">
          A operadora pensa em cada etapa do atendimento médico. Por isso, tem
          como foco oferecer sempre a melhor experiência: agendamento prático de
          consultas, atendimento humanizado e Medicina Preventiva, bem como uma
          gestão eficiente da saúde dos colaboradores das empresas Clientes.
        </p>
        <p>
          Como parte de sua estratégia, a Hapvida NotreDame Intermédica também
          conta com um time especializado e dedicado que cuida dos aspectos
          Ambientais, Sociais e de Governança (ASG), buscando perpetuar a
          sustentabilidade do negócio. Em 2021, por exemplo, pelo segundo ano
          consecutivo a empresa foi considerada “carbono neutro” por seu
          trabalho para a compensação de 100% das emissões. Além disso, os
          beneficiários, dentistas, corretores e corpo clínico da Hapvida
          NotreDame Intermédica têm acesso a clubes de vantagens e descontos em
          drogarias e parceiros dos segmentos de compras on-line, educação e
          cursos, entretenimento, saúde e bem-estar, comércio, serviços, viagens
          e produtos odontológicos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Missão</h2>
        <p className="mb-4">
          Proporcionar saúde integrada de qualidade, acessível a geração de
          brasileiros.
        </p>

        <h2 className="text-3xl font-bold mb-4">Valores</h2>

        <div className="flex justify-center gap-12  my-12">

          <article className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center">

            <Image
              src="/img/abraço.png"
              width={50}
              height={50}
              alt="Acolhimento"
            />
            </div>
            <p className="mt-2">Acolhimento</p>
          </article>

          <article>
            <div className="flex items-center justify-center">

            <Image
              src="/img/aperto-de-mão.png"
              width={50}
              height={50}
              alt="Comprometimento"
            />
            </div>
            <p className="mt-2">Comprometimento</p>
          </article>

          <article>
            <div className="flex items-center justify-center">

            <Image
              src="/img/justiça.png"
              width={50}
              height={50}
              alt="Ética e combate a corrupção"
            />
            </div>
            <p className="mt-2">Ética e combate a corrupção</p>
          </article>

          <article>
            <div className="flex items-center justify-center">

            <Image
              src="/img/inovação.png"
              width={50}
              height={50}
              alt="Inovação e aprendizado"
            />
            </div>
            <p className="mt-2">Inovação e aprendizado</p>
          </article>

          <article>
            <div className="flex items-center justify-center">
               <Image 
            src="/img/respeito.png" 
            width={50} 
            height={50} 
            alt="Respeito" />
            </div>
           
            <p className="mt-2">Respeito</p>
          </article>

          <article>
            <div className="flex items-center justify-center">

            <Image 
            src="/img/responsabilidade-social.png" 
            width={50} 
            height={50} 
            alt="Responsabilidade" />
            </div>
            <p className="mt-2">Responsabilidade</p>
          </article>

          <article>
            <div className="flex items-center justify-center">

            <Image 
            src="/img/sustentabilidade.png" 
            width={50} 
            height={50} 
            alt="Sustentabilidade" />
            </div>
            <p className="mt-2">Sustentabilidade</p>
          </article>

          <article>
            <div className="flex items-center justify-center">
                <Image 
            src="/img/coin.png" 
            width={50} 
            height={50} 
            alt="Eficiência em custo" />
            </div>
          
            <p className="mt-2">Eficiência em custo</p>
          </article>
        </div>
      </section>
    </main>
  );
}
