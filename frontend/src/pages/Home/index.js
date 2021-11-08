import React, { useEffect, useState } from "react";

import "./style.css"
import HomeServices from "./services.js";
import Header from "../../components/Header";

import { Form, Modal } from "react-bootstrap";
import { toast } from "react-hot-toast";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);
    const handleclose = () => {
        setShow(false);
    };


    const List = async () => {
        const { data } = await HomeServices.listUsers();
        setUsers(data);
    };

    const openModal = () => {
        setShow(true);
    }

    const Save = async () => {
        const payload = {
            email: email,
            first_name: name,
            password: password,
        };

        try {
            await HomeServices.register(payload);
            toast.error("Usuário registrado!")
        } catch (error) {
            toast.error("Usuário Não registrado!!")
        }
    };

    useEffect(() => {
        List();
    }, []);

    return (
        <setion className="section-home">
            <Header />
            <div className="home-card">
                <div className="home-card-header">
                    <h3>Comunidade</h3>
                    <button className="button" onClick={() => openModal()}>Adicionar Usuário</button>
                </div>   

                <div>
                   {
                       users.map((item) => (
                           <div className="users-div">
                               <span className="name">{item.name}</span>
                               <span className="email">{item.email}</span>
                           </div>
                       ))
                   }
                </div>                 
            </div>
            <Modal show={show} handleclose={handleclose} save={Save}>
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
            </Modal>
        </setion>
    );    
}

export default Home;