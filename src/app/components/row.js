import { useEffect, useState } from "react";

export default function Rows({ data }) {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        if (data) {
            setRows(data);
        }
    }, [data]);


    return(
        rows?.map((element, index) => (
            <tr key={index}>
                <td>{element.mes}</td>
                <td>R$ {element.parcela}</td>
                <td>R$ {element.amortizacao}</td>
                <td>R$ {element.juros}</td>
                <td>R$ {element.saldo}</td>
                <td><button className="w-10 bg-slate-100">X</button></td>
            </tr>
        ))
    );
}
