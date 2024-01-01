import {useState} from "react";

function useForm() {

    const [status, setStatus] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const finalFormEndpoint = e.target.action;
        const data = Array.from(e.target.elements)
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, {[input.name]: input.value}), {});

        fetch(finalFormEndpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                setStatus("success");
            })
    };

    return {handleSubmit, status}
}

export default useForm;
