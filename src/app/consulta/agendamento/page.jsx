"use client";
import React, { useEffect } from "react";
import { useState } from "react";

export default function FormConsulta() {

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      window.location.href = "/usuario/login";
    }
  }, []);


  const [form, setForm] = useState({
    nomeCompleto: "",
    dataNasci: "",
    genero: "",
    endereco: "",
    email: "",
    especMed: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(
        "http://localhost:8080/globalsolution/paciente",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
  
      if (!response.ok) {
        const message = `Ocorreu um erro: ${response.status}`;
        throw new Error(message);
      }
  
      const data = await response.json();
  
      console.log("Consulta agendada com sucesso!", data);
    } catch (error) {
      console.error("Erro ao agendar consulta:", error.message);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="mx-auto p-8 bg-gray-400 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="w-96 flex flex-col">
          <fieldset className="m-0 p-0 border-none">
            <legend className="text-lg font-bold mb-4">
              Agende sua consulta aqui
            </legend>

            <label className="mb-2" htmlFor="nomeCompleto">
              Nome:
            </label>
            <input
              className="p-2 my-4 border rounded-md w-full"
              type="text"
              placeholder="Nome do Paciente"
              required
              name="nomeCompleto"
              value={form.nomeCompleto}
              onChange={handleChange}
            />

            <label className="mb-2" htmlFor="dataNasci">
              Data de Nascimento:
            </label>
            <input
              className="p-2 my-4 border rounded-md w-full"
              type="text"
              placeholder="Data de Nascimento"
              required
              name="dataNasci"
              value={form.dataNasci}
              onChange={handleChange}
            />

            <label className="mb-2" htmlFor="genero">
              Gênero:
            </label>
            <input
              className="p-2 my-4 border rounded-md w-full"
              type="text"
              placeholder="Gênero do Paciente"
              required
              name="genero"
              value={form.genero}
              onChange={handleChange}
            />

            <label className="mb-2" htmlFor="endereco">
              Endereço:
            </label>
            <input
              className="p-2 mb-4 border rounded-md w-full"
              type="text"
              placeholder="Endereço"
              required
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
            />

            <label className="mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="p-2 my-4 border rounded-md w-full"
              type="email"
              placeholder="E-mail para contato"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <label className="mb-2" htmlFor="especMed">
              Profissional que deseja consultar:
            </label>
            <input
              className="p-2 my-4 border rounded-md w-full"
              type="text"
              placeholder="Ex: Cardiologista"
              required
              name="especMed"
              value={form.especMed}
              onChange={handleChange}
            />

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
