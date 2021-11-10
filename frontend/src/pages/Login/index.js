import React, { useState, useContext } from "react";

import "./style.css";
import LoginServices from "./services";
import LottieFile from "../../components/LottieFile";

import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/index";

const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setToken } = useContext(GlobalContext);

    const Cadastro = () => {
        history.push(``);
    }

    const LoginUser = async (event) => {
        event.preventDefault();

        const payload = {
            email: email,
            password: password,
        };

        try {
            const { data } = await LoginServices.login(payload);
            setToken(data.token);

            if (data.token) {
                history.push(`/home/${data.token}`);
                toast.success("Olá, administrador. Bem-vindo(a)!")
            }
            
        } catch (error) {
            toast.error("Sinto muito, usuário não encontrado");
        }
    };

    return (
        <section className="section-login">
            <div className="container-form">
                <form className="form">
                    <p className="form-title">Welcomeeee!</p>
                    <input type='text' placeholder="Digite seu email" onChange={(event) => setEmail(event.target.value)} className="input"/>
                    <input type="password" placeholder="Digite sua senha" onChange={(event) => setPassword(event.target.value)}  className="input"/>
                    <div className="buttons">
                        <button onClick={(event) => LoginUser(event)} className="button">Entrar</button>
                        <button onClick={() => {history.push("/Cadastro")}} className="button cadastro">Cadastro</button>
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