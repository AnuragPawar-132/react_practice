import React, {useState, useRef} from "react";

export const Form = () => {

    const [form, setForm] = useState({
        email: "",
        name: "",
        phone: "",
        password: ""
    });
    const formRef = useRef();

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    }

    const validation = () => {
        if(!form.email.includes("@") || !form.email.includes(".")){
            return false
        }
        return true;
    }

    const handleFormSubmit = (val) => {
        val.preventDefault()
        
        const emailValue = formRef.current.value;
        if(!emailValue) {
            return formRef.current.style.border = "2px solid red";
          }else {
            formRef.current.style.border = "";
          }

        if(!validation()){
            return alert("error")
        }
        alert("success")
        setForm({
            email: "",
            password: "",
            name: "",
            phone: ""
          });
    }

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={(e)=>handleFormSubmit(e)}>
                <input name="email" 
                        value={form.email} 
                        onChange={handleFormChange}
                        required />

                <input name="name" 
                        value={form.name} 
                        onChange={handleFormChange} 
                        ref={formRef} />

                <input name="phone" 
                        value={form.phone} 
                        onChange={handleFormChange}
                        required />

                <input type="password"
                        value={form.password} 
                        onChange={handleFormChange}
                        name="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        required />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
