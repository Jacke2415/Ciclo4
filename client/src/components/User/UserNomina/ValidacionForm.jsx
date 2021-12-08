import { useState } from "react";

export const ValidacionForm = (initialForm,validateForm) =>{
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
        
    const handleChange = (e) => {
        const {id,value}= e.target;
        setForm({
            ...form,
            [id]:value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {};


    return {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    }
}