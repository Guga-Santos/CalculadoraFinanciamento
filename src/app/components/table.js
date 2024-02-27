import { useEffect, useState } from "react";
import Rows from "./row";

export default function Table({ props }) {
    const [data, setData] = useState(null);
    const [parcela, setParcela] = useState(null);
    const [array, setArray] = useState([]);

    useEffect(() => {
        setData(props);
        setParcela(calcularPMT(props?.value, props?.juros, props?.prazo));
    }, [props]);

    useEffect(() => {
        if (data && parcela) {
            renderizarParcelas();
        }
    }, [data, parcela]);

    function calcularPMT(valor, taxa, periodos) {
        const r = taxa / 100;
        const pmt = valor * r * Math.pow(1 + r, periodos) / (Math.pow(1 + r, periodos) - 1);
        return pmt.toFixed(2);
    }

    function renderizarParcelas() {
        let saldoDevedor = data?.value;
        const arr = [];

        for (let i = 1; i <= data?.prazo; i++) {
            const juros = (saldoDevedor * (data?.juros / 100)).toFixed(2);

            arr.push({
                mes: i,
                parcela: Number(parcela).toFixed(2),
                amortizacao: (parcela - juros).toFixed(2),
                juros: juros,
                saldo: Number(saldoDevedor).toFixed(2)
            });
            saldoDevedor -= (parcela - juros);
        }
        setArray(arr);
    }

    return (
        data && <div className="w-screen flex flex-col items-center">
            <table className="w-5/6 border-collapse">
                <thead>
                    <tr className="">
                        <th>Mês</th>
                        <th>Parcela</th>
                        <th>Amortização</th>
                        <th>Juros</th>
                        <th>Saldo Devedor</th>
                    </tr>
                </thead>
                <tbody>
                    <Rows data={array} />
                </tbody>
            </table>
        </div>
    );
}
