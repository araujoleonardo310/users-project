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
            <div className="container-illustration">
                <div>
                    <p>Welcomeeee!</p>
                    <LottieFile name="login" />
                </div>
            </div>
            <div className="container-form">
                <form>
                    <span>Login</span>
                    <input type='text' placeholder="email" onChange={(event) => setEmail(event.target.value)}/>
                    <input type="password" placeholder="Senha" onChange={(event) => setPassword(event.target.value)}/>
                    <button onClick={(event) => LoginUser(event)}>Entrar</button>
                </form>
            </div>
        </section>
    );
};

export default Login;