import React, { useState, useContext } from "react";
import "./style.css";
import LoginServices from "./services";
import LottieFile from "../../components/LottieFile";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";


const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Cadastro = () => {
        history.push(`/cadastro`);
    };

    const LoginUser = async (event) => {
        event.preventDefault();

        const payload = {
            email: email,
            password: password,
        };

        try {

            const { data } = await LoginServices.login();
                       
            {data.filter((resp) => { 

                if ((data.name === payload.name) && (data.email == payload.email)) {
                    
                    history.push(`/home`)
                    toast.success("Bem-vindo!!!")
                    return resp;

                } else {
                     toast.error("Sinto muito, usuário não encontrado");
                }
            })}

        } catch (error) {
            console.log(error)
    
        };
    };

    return (
        <section className="section-login">

            <div className="container-form">
                <form className="form">
                    <p className="form-title">Welcomeeee!</p>
                    <input type='text' placeholder="Digite seu email" onChange={(event) => setEmail(event.target.value)} className="input" />
                    <input type="password" placeholder="Digite sua senha" onChange={(event) => setPassword(event.target.value)} className="input" />
                    <div className="buttons">
                        <button onClick={(event) => LoginUser(event)} className="button">Entrar</button>
                        <button onClick={() => Cadastro()} className="button cadastro">Cadastro</button>
                    </div>
                </form>
            </div>

            <div className="container-illustration">
                <LottieFile name="login" />
            </div>

        </section>
    );
};

export default Login;