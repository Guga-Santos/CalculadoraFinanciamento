"use client"
import { useState } from "react";

export default function Home() {
  const [valueAmount, setValueAmount] = useState(0);
  const [prazo, setPrazo] = useState(0);
  const [juros, setJuros] = useState(0);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    value: 0,
    prazo: 0,
    juros: 0
  })

  function handleClick() {
    setData({
      value: valueAmount,
      prazo: prazo,
      juros
    })

    setValueAmount(0);
    setPrazo(0);
    setJuros(0);

    setVisible(true);
  }

  return (
    <main className="flex flex-col items-center justify-center bg-slate-400 h-screen">
      <h1 className="text-4xl pb-20"> Minha Calculadora de Amortização</h1>
      {
      visible 
      ?
      "" 
      :
      <form className="flex flex-col">
        <label className="flex-col">
            <h3>
              Valor do financiamento:
            </h3>
            <input 
            type="number" 
            className="border-2"
            value={valueAmount}
            onChange={(e) => setValueAmount(e.target.value)}
            />
        </label>
        <label className="flex-col">
            <h3>
              Quantidade de parcelas:
            </h3>
            <input 
            type="number" 
            className="border-2"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            />
        </label>
        <label className="flex-col">
            <h3>
              Taxa de juros (mensal):
            </h3>
            <input 
            type="number" 
            className="border-2"
            value={juros}
            onChange={(e) => setJuros(e.target.value)}
            />
        </label>

        <button 
        type="button"
        className="mt-10 border-2"
        onClick={() => handleClick()}
        >
          Criar tabela
        </button> 
      </form>
      } 
      {
        visible
        ?
        <>
        <h1>O valor total do financiamento é: R${data.value}</h1>
        <h1>O prazo para pagamento é de: {data.prazo} meses</h1>
        <h1>Os juros que serão pagos mensalmente é: {data.juros}%</h1>
        </>
        :
        ""
      }
    </main>
  );
}
