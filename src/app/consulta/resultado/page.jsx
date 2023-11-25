"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Protocolo() {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      window.location.href = "/usuario/login";
    }
  }, []);

  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const resposta = await fetch(
          "http://localhost:8080/globalsolution/consulta"
        );
        if (!resposta.ok) {
          throw new Error(`Ocorreu um erro: ${resposta.status}`);
        }
        const dados = await resposta.json();
        setDados(dados);
      } catch (error) {
        setErro(error.message);
      }
    };

    fetchDados();
  }, []);

  // Função para deletar uma consulta
  const deleteConsulta = async (id) => {
    try {
      const resposta = await fetch(
        `http://localhost:8080/globalsolution/consulta/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!resposta.ok) {
        throw new Error(`Ocorreu um erro: ${resposta.status}`);
      }
      console.log(`Consulta com ID ${id} deletada com sucesso.`);
    } catch (error) {
      console.error("Erro ao deletar consulta:", error.message);
    }
  };

  // Função para atualizar uma consulta
  const updateConsulta = async (id, updatedData) => {
    try {
      const resposta = await fetch(
        `http://localhost:8080/globalsolution/consulta/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (!resposta.ok) {
        throw new Error(`Ocorreu um erro: ${resposta.status}`);
      }
      const dados = await resposta.json();
      console.log(`Consulta com ID ${id} atualizada com sucesso:`, dados);
    } catch (error) {
      console.error("Erro ao atualizar consulta:", error.message);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
    <div className="mx-auto p-8 bg-gray-400 rounded-lg shadow-md">
      {dados.length > 0 ? (
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Nome do Paciente</th>
              <th className="text-left p-3 px-5">Data da Consulta</th>
              <th className="text-left p-3 px-5">Endereço</th>
              <th className="text-left p-3 px-5">Médico</th>
              <th className="text-left p-3 px-5">Especialidade</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr className="border-b hover:bg-orange-100 bg-gray-100" key={index}>
                <td className="p-3 px-5">{item.nome}</td>
                <td className="p-3 px-5">{item.data}</td>
                <td className="p-3 px-5">{item.endereco}</td>
                <td className="p-3 px-5">{item.email}</td>
                <td className="p-3 px-5">{item.especialidade}</td>
                <td className="p-3 px-5">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateConsulta(item.id)}>Atualizar</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => deleteConsulta(item.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  </section>
  );
}
