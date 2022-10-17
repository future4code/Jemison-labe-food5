import { useState } from "react";

export const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState);

    const onChangeInputs = (event) => {
        const { name, value} = event.target
        setForm({...form, [name]: value})
    }

    const clearInputs = () => {
        setForm(inicialState)
    }

    return [form, onChangeInputs, clearInputs]

}
export default useForm;