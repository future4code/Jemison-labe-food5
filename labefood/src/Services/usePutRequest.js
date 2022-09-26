import axios from "axios"
import { useContext } from "react"
import { Contexts } from "../Global/context"


export const usePutRequest = (url, data, config) => {

    const { setters } = useContext(Contexts)

    const putRequest = () => {
        axios.put(url, data, config)
        .then((response) => {
        })
        .catch((err) => {
            setters.setAtualizado(0)
        })
    }

  return putRequest
}
