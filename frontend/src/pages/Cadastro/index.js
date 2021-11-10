import React, { useEffect, useState } from "react";
import "./style.css";

import ModalUser from "../../components/Modal";

import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap"
import { toast } from "react-hot-toast";
import CadastroServices from "./services.js";

const Cadastro = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const params = useParams();

    const [show, setShow] = useState(false);
    const handleclose = () => {
        setShow(false);
    };

    const openModal = () => {
        setShow(true);
    }

    const Save = async () => {
        const payload = {
            email: email,
            name: name,
            password: password,
        };

        try {
            await CadastroServices.register(payload);
            toast.error("Usuário registrado!")
        } catch (error) {
            toast.error("Usuário Não registrado!!")
        }
    };

    useEffect(() => {
        openModal();
        trazerUsuario();
    }, []);

    const trazerUsuario = async() => {
        const {data} = await CadastroServices.usuario(params.id);
        console.log(data)
    }

    return (
        <setion className="section-home">
            <ModalUser show={show} handleclose={handleclose} save={Save} title={params.id ? "Editar usuário" : "Cadastrar usuário"}>
                <Form.Control
                    placeholder="Digite seu nome" 
                    className="mb-1"
                    onChange={(event) => setName(event.target.value)}
                />

                <Form.Control
                    placeholder="Digite seu email" 
                    className="mb-1"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Form.Control
                    placeholder="Digite sua senha" 
                    className="mb-1"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </ModalUser>
        </setion>
    );    
}

export default Cadastro;