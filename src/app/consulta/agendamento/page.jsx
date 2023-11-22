"use client";
import React from "react";
import { useState } from "react";
export default function FormConsulta() {

    const [form, setForm] = useState({
        nome: "",
        sobrenome: "",
        dataNascimento: "",
        genero: "",
        endereco: "",
        email: "",
        especialidade: "",
      });

      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const resposta = await fetch("", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form),
        });
        
        if (resposta.ok) {
          console.log('Consulta agendada com sucesso!');
        } else {
          console.error('Erro ao agendar consulta:', resposta.status, resposta.statusText);
        }
      }

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="mx-auto p-8 bg-gray-400 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="w-96 flex flex-col">
          <fieldset className="m-0 p-0 border-none">
            <legend className="text-lg font-bold mb-4">
              Agende sua consulta aqui
            </legend>

            <label className="mb-2" htmlFor="">
              Nome:
            </label>
            <input className="p-2 my-4 border rounded-md w-full"
             type="text"
             placeholder="Nome do Paciente"
             required
             value={form.nome}
             onChange={handleChange} />

            <label className="mb-2" htmlFor="">
              Sobrenome do Paciente:
            </label>
            <input className="p-2 my-4 border rounded-md w-full" 
            type="text"
            placeholder="Sobrenome do Paciente"
            required
            value={form.sobrenome}
            onChange={handleChange} />

            <label className="mb-2" htmlFor="">
              Data de Nascimento:
            </label>
            <input className="p-2 my-4 border rounded-md w-full" 
            type="date"
            placeholder="Data de Nascimento"
            required
            value={form.dataNascimento}
            onChange={handleChange}
             />

            <label className="mb-2" htmlFor="">
              Gênero:
            </label>
            <input className="p-2 my-4 border rounded-md w-full"
             type="text"
             placeholder="Gênero do Paciente"
             required
             value={form.genero}
                onChange={handleChange}
             />

            <label className="mb-2" htmlFor="">
              Endereço:
            </label>
            <input className="p-2 mb-4 border rounded-md w-full" 
            type="text" 
            placeholder="Endereço"
            required
            value={form.endereco}
            onChange={handleChange}/>

            <label className="mb-2" htmlFor="">
              Email:
            </label>
            <input className="p-2 my-4 border rounded-md w-full" 
            type="email"
            placeholder="E-mail para contato"
            required
            value={form.email}
            onChange={handleChange} />

            <label className="mb-2" htmlFor="">
              Profissional que deseja consultar:
            </label>
            <input className="p-2 my-4 border rounded-md w-full" 
            type="text" 
            placeholder="Ex: Cardiologista"
            required
            value={form.especialidade}
            onChange={handleChange}/>

            <div className="flex flex-col items-center">
              <button className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 mb-2 hover:bg-red-600 transition duration-500 ease-out">
                Agendar Consulta
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}