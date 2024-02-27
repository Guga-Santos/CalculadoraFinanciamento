import { useEffect, useState } from "react"

export default function Table(props) {
    const [data, setData] = useState();
    
    useEffect(() => {
        setData(props);
    }, [])


    return(
        data && <div className="flex flex-col">
            <h1>Aqui {data.props.value}</h1>
            <h1>Aqui {data.props.prazo}</h1>
            <h1>Aqui {data.props.juros}</h1>
        </div>
    )
}