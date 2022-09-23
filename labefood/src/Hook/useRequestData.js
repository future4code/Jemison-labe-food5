import { useState, useEffect} from 'react'
import axios from 'axios'

export const useRequestData = (url, headers,  initialState) => {
    const [data, setData] = useState(initialState)
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState('')

    useEffect(() => {
        setCarregando(true)
        axios.get(url, headers)
        .then((response) => {
            setCarregando(false)
            setData(response.data)
        }).catch((error) => {
            setErro(error)
        })
    }, [url])

  return [data, carregando, erro]
}