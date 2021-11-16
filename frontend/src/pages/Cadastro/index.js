import React, { useEffect, useState } from "react";
import "./style.css";

import ModalUser from "../../components/Modal";

import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import CadastroServices from "./services.js";
import Header from "../../components/Header";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const params = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    toast.error("Usuário Não registrado!!");
  };

  const openModal = () => {
    setShow(true);
  };

  const Save = async () => {
    const payload = {
      id: "",
      name: name,
      email: email,
      password: password,
    };

    if (!params.id) {
      try {
        await CadastroServices.register(payload);
        toast.success("Usuário registrado!");
        setId("");
        setName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        toast.error("Usuário Não registrado!!");
      }
    } else {
      await CadastroServices.editar(id, payload);
      toast.success("Usuário Editado!");
    }

    handleClose();
  };

  useEffect(() => {
    openModal();
    trazerUsuario();
  }, []);

  const trazerUsuario = async () => {
    const { data } = await CadastroServices.usuario(params.id);
    const { id, name, email, password } = data;
    setId(id);
    setName(name);
    setEmail(email);
    setPassword(password);
  };

  return (
    <setion className="section-home">
      <Header />
      <ModalUser
        show={show}
        handleClose={handleClose}
        save={Save}
        title={params.id ? "Editar usuário" : "Cadastrar usuário"}
      >
        <Form.Control
          value={name}
          placeholder="Digite seu nome"
          className="mb-1"
          onChange={(event) => setName(event.target.value)}
        />

        <Form.Control
          value={email}
          placeholder="Digite seu email"
          className="mb-1"
          onChange={(event) => setEmail(event.target.value)}
        />

        <Form.Control
          value={password}
          placeholder="Digite sua senha"
          className="mb-1"
          onChange={(event) => setPassword(event.target.value)}
        />
      </ModalUser>
    </setion>
  );
};

export default Cadastro;
