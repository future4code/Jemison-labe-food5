import axios from "axios"


export const usePutRequest = (url, data, config) => {

    const putRequest = () => {
        axios.put(url, data, config)
        .then((response) => {
            alert('Dados atualizados com sucesso!')
            // setters.setAtualizado(true)
        })
        .catch((err) => {
        })
    }

  return putRequest
}
