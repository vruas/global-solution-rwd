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
      const resposta = await fetch("http://localhost:8080/globalsolution/consulta");
      const dados = await resposta.json();
      setDados(dados);
    };

    fetchDados();
  }, []);

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="mx-auto p-8 bg-gray-400 rounded-lg shadow-md">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}