import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 py-8 mx-auto max-w-6xl">
    <section className="mb-8">
      <h1 className="text-3xl font-bold mb-4">
        Seja bem-vindo ao [Nome do Projeto],
        <br /> nosso projeto com a{" "}
        <Link href="/parceiros">
          <span className="text-red-500 hover:text-red-800 transition-all ease-out">
            Hapvida NotreDame Intermédica
          </span>
        </Link>
      </h1>
  
      <p className="text-lg">
        É com entusiasmo que apresentamos o resultado de uma colaboração
        estratégica entre [Sua Empresa/Nome] e a renomada Hapvida NotreDame
        Intermédica. Nosso projeto conjuga a expertise em tecnologia e
        inovação com a excelência em cuidados de saúde, visando revolucionar a
        prática diagnóstica por meio da Inteligência Artificial (IA).
      </p>
    </section>
  
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-4">Objetivo</h3>
  
      <p className="text-lg">
        Nosso objetivo central é potencializar o poder transformador da IA no
        campo da saúde, focalizando especificamente na melhoria dos
        diagnósticos, tornando-os mais precisos, ágeis e assertivos.
      </p>
    </section>
  
    <section>
      <h3 className="text-2xl font-bold mb-4">Nosso Projeto:</h3>
      <p className="text-lg">
        Nosso projeto tem como objetivo implementar a Inteligência Artificial
        na área da saúde para simplificar as operações hospitalares. Isso
        inclui agendamento de consultas e exames, análise de imagens médicas e
        revisão dos históricos dos pacientes. O propósito principal é melhorar
        a eficiência dos diagnósticos e até mesmo realizar previsões sobre a
        condição de um paciente com base na análise desses dados. Em essência,
        buscamos aprimorar tanto a eficiência quanto a precisão de todo o
        sistema hospitalar. Isso não apenas beneficia os pacientes, mas também
        otimiza a gestão de dados e registros médicos para hospitais e
        clínicas, oferecendo um processo rápido e preciso.
      </p>
    </section>
  
    <section className="mb-8">
      <h3 className="text-2xl font-bold mt-6 mb-4">Principais Focos</h3>
      <ul className="list-disc pl-6">
        <li className="mb-4">
          <strong className="text-lg">
            Análise Avançada de Imagens Médicas
          </strong>
          <p className="text-lg">
            Utilizando algoritmos de IA avançados, buscamos aprimorar a
            interpretação de imagens médicas, como tomografias, ressonâncias
            magnéticas e radiografias. Essa abordagem visa acelerar a
            identificação de anomalias e lesões, permitindo diagnósticos mais
            precisos em um tempo reduzido.
          </p>
        </li>
        <li className="mb-4">
          <strong className="text-lg">
            Integração de Dados Multidisciplinares
          </strong>
          <p className="text-lg">
            Através da integração de dados provenientes de diferentes fontes,
            como resultados de exames laboratoriais, registros médicos e
            informações genéticas, buscamos criar um panorama completo da
            saúde do paciente. Isso proporcionará diagnósticos mais holísticos
            e personalizados.
          </p>
        </li>
        <li>
          <strong className="text-lg">
            Modelagem e Previsão Personalizadas
          </strong>
          <p className="text-lg">
            Por meio da análise de padrões individuais e comportamentais,
            nossa IA visa antecipar tendências de saúde, oferecendo insights
            valiosos para prevenção e intervenção precoce em condições
            médicas.
          </p>
        </li>
      </ul>
    </section>
  
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-4">Benefícios Esperados</h3>
      <ul className="list-disc pl-6">
        <li className="mb-4">
          <strong className="text-lg">
            Diagnósticos Mais Precisos e Rápidos:
          </strong>
          <p className="text-lg">
            Redução do tempo para diagnósticos precisos, permitindo
            intervenções médicas mais ágeis e eficazes.
          </p>
        </li>
        <li className="mb-4">
          <strong className="text-lg">Personalização do Tratamento:</strong>
          <p className="text-lg">
            Oferta de tratamentos mais direcionados e personalizados,
            alinhados às necessidades específicas de cada paciente.
          </p>
        </li>
        <li>
          <strong className="text-lg">Melhoria na Qualidade de Vida:</strong>
          <p className="text-lg">
            Antecipação de problemas de saúde e prevenção de complicações,
            promovendo uma melhor qualidade de vida para os pacientes.
          </p>
        </li>
      </ul>
    </section>
  </main>
  
  );
}
