"use client";
import { useState } from "react";
import Link from "next/link";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
  
    const handleCadastro = async (e) => {
      e.preventDefault();
      const novoUsuario = {
        nome,
        cpf,
        email,
        senha,
      };
      const resposta = await fetch("http://localhost:8080/usuario", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario),
      });
      
      if (resposta.ok) {
        const dados = await resposta.json();
        sessionStorage.setItem("usuario", JSON.stringify(dados));
      } else {
        console.error('Erro ao cadastrar usuário:', resposta.status, resposta.statusText);
      }
    }

  return (
    <section className="flex justify-center items-center h-screen">
      <div className=" max-w-md mx-auto p-8 bg-gray-400 rounded-lg shadow-md">
        <form onSubmit={handleCadastro} className="flex flex-col">
          <fieldset className="m-0 p-0 border-none">
            <legend className="text-lg font-bold mb-4">Cadastro</legend>
            <div>
              <label className="mb-2" htmlFor="idNome">
                Nome:
              </label>
              <input
                className="p-3 my-4 border rounded-md w-full"
                type="text"
                name="nome"
                id="idNome"
                placeholder="Digite seu nome"
                
                required
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-2" htmlFor="idCpf">
                CPF:
              </label>
              <input
                className="p-3 my-4 border rounded-md w-full"
                type="text"
                name="cpf"
                id="idCpf"
                placeholder="Digite seu CPF"
                required
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="mb-2" htmlFor="idEmail">
                Email:
              </label>
              <input
                className="p-3 my-4 border rounded-md w-full"
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu e-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-2" htmlFor="idSenha">
                Senha:
              </label>
              <input
                className="p-3 my-4 border rounded-md w-full"
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua senha"
                required
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-red-500 text-white py-3 px-6 rounded-md mt-6 mb-2 hover:bg-red-600 transition duration-500 ease-out">
                Cadastrar
              </button>
              <div className="flex flex-col items-center">
                <p className="mb-2">Já possui cadastro?</p>
                <Link href="/cadastro/login">
                  <span className="text-red-500 hover:underline">
                    Clique aqui!
                  </span>
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
