import { useEffect, useState } from "react"
import useSWR from "swr"

const LastSales = (props) => {
    const [sales, setSales] = useState(props.sales)
    // const [loading, setLoading] = useState(false)
    const { data, error } = useSWR("https://nextjs-6f7ca-default-rtdb.europe-west1.firebasedatabase.app/sales.json", (url) => fetch(url).then(res => res.json()))

    useEffect(() => {
        if (data) {
            const transformedData = []
            for (const key in data) {
                transformedData.push({ id: key, username: data[key].username, volume: data[key].volume })
            }
            setSales(transformedData)
        }
    }, [data])

    // useEffect(() => {
    //     setLoading(true)
    //     fetch("https://nextjs-6f7ca-default-rtdb.europe-west1.firebasedatabase.app/sales.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const transformedData = []
    //             for (const key in data) {
    //                 transformedData.push({ id: key, username: data[key].username, volume: data[key].volume })
    //             }
    //             setSales(transformedData)
    //             setLoading(false)
    //         })
    // }, [])


    if (error) {
        return <p>Failed to Load</p>
    }
    if (!sales || !data) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {
                sales.map(sale => <li key={sale.id}>{sale.username} - {sale.volume}</li>)
            }
        </ul>
    )
}

export default LastSales


export async function getStaticProps() {

    return fetch("https://nextjs-6f7ca-default-rtdb.europe-west1.firebasedatabase.app/sales.json")
        .then(res => res.json())
        .then(data => {
            const transformedData = []
            for (const key in data) {
                transformedData.push({ id: key, username: data[key].username, volume: data[key].volume })
            }

            return {
                props: {
                    sales: transformedData
                },
                revalidate: 10
            }
        })
}
