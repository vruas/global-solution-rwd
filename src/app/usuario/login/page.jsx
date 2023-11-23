"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    console.log(usuario);
  
    try {
      const resposta = await fetch("http://localhost:8080/globalsolution/usuario");
  
      if (resposta.ok) {
        const contentType = resposta.headers.get("content-type");
  
        if (contentType && contentType.includes("application/json")) {
          const resultado = await resposta.json();
          const user = resultado.find(
            (ObjUsuario) =>
              ObjUsuario.email === usuario.email &&
              ObjUsuario.senha === usuario.senha
          );
          if(user){
            sessionStorage.setItem("token", resultado.token);
            window.location.href = '/';
          }else{
            alert("Usuário não encontrado");
          }
        } else {
          console.log("Response is not in JSON format");
        }
      } else {
        console.log(`Erro no servidor: ${resposta.status}`);
      }
    } catch (error) {
      console.log("Erro ao enviar dados para o backend", error);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="max-w-md p-8 bg-gray-400 rounded-lg shadow-md">
        <form onSubmit={handleLogin} className="w-96 flex flex-col">
          <fieldset className="m-0 p-0 border-none">
            <legend className="text-lg font-bold mb-4">Login</legend>

            <div className="mb-6">
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-red-500 text-white py-3 px-6 rounded-md mt-6 mb-2 hover:bg-red-600 transition duration-500 ease-out">
                Entrar
              </button>
              <div className="flex flex-col items-center">
                <p className="mb-2">Ainda não possui cadastro?</p>
                <Link href="/usuario/cadastro">
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
