import { useEffect, useState } from "react";

export default function Rows({ data }) {
    const [rows, setRows] = useState([]);
    const [parcela, setParcela] = useState();
    const [juro, setJuro] = useState();

    useEffect(() => {
        if (data) {
            setRows(data);
            setParcela(data[0]?.parcela);
            setJuro(data[0]?.taxaFixa);
        }
        
  
    }, [data]);

    function handleClick(target) {
        console.log(target);
        const object = rows.filter((obj) => obj.mes == target.id)
        const saldoDevedor = Number(rows[0].saldo) - object[0].amortizacao;
        atualizarSaldo(saldoDevedor)
    }

    function atualizarSaldo(saldoDevedor) {
        const arr = [];
        let i = 0;
        while(saldoDevedor > 0) {
            const juros = (saldoDevedor * (juro / 100)).toFixed(2);
            i += 1;

            arr.push({
                mes: i,
                parcela: Number(parcela).toFixed(2),
                amortizacao: (Number(parcela) - juros).toFixed(2),
                juros: juros,
                saldo: Number(saldoDevedor).toFixed(2)
            });
            saldoDevedor -= (parcela - juros);
        }
        setRows(arr);
    }

    return(
        rows?.map((element, index) => (
            <tr key={index + 1}>
                <td>{element.mes}</td>
                <td>R$ {element.parcela}</td>
                <td>R$ {element.amortizacao}</td>
                <td>R$ {element.juros}</td>
                <td>R$ {element.saldo}</td>
                <td>
                    <button 
                    className="w-10 bg-slate-100"
                    id={element.mes}
                    onClick={({target}) => handleClick(target)}
                    >
                        X
                    </button>
                    </td>
            </tr>
        ))
    );
}
