import { useState } from "react";

export const ValidacionForm = (initialForm,validateForm) =>{
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    
    
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
        loading,
        response,
        handleChange,
        handleSubmit,
        handleBlur,
    }
}