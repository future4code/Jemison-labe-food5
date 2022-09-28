import axios from "axios"


export const usePutRequest = (url, data, config) => {

    // const { setters } = useContext(Contexts)

    const putRequest = () => {
        axios.put(url, data, config)
        .then((response) => {
            alert('Dados atualizados com sucesso!')
            // setters.setAtualizado(true)
        })
        .catch((err) => {
            alert('Falha ao atualizar os dados. Tente novamente.')
            // setters.setAtualizado(false)
        })
    }

  return putRequest
}
