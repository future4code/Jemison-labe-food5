import axios from "axios"


export const usePutRequest = (url, data, config) => {

    const putRequest = () => {
        axios.put(url, data, config)
        .then((response) => {
        })
        .catch((err) => {
        })
    }

  return putRequest
}
