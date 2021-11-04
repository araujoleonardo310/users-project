import React, { useEffect, useState } from "react";

import "./style.scss";
import HomeServices from "./services.js";

import Modal from "../../components/Modal";
import Header from "../../components/Header";

import { Form } from "react-bootstrap";
import { toast } from "react-hot-toast";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const List = async () => {
    const { data } = await HomeServices.listUsers();
    setUsers(data.data);
  };

  const OpenModal = () => {
    setShow(true);
  };

  const Save = async () => {
    const payload = {
      email: email,
      first_name: name,
      password: password,
      avatar: image,
    };

    try {
      await HomeServices.register(payload);
      toast.error("Usuário registrado com sucesso");

      List();
    } catch (error) {
      toast.error("Sinto muito, não podemos registrar esse usuário");
    }
  };

  useEffect(() => {
    List();
  }, []);

  return (
    <section className="section-home">
      <Header />
      <div className="home-card">
        <div className="home-card-header">
          <h3>Usuários</h3>

          <button onClick={() => OpenModal()}>Novo usuário</button>
        </div>
        <ul>
          {users.map((item) => (
            <li>
              <img src={item.avatar} />
              <div>
                <span>
                  {item.first_name} {item.last_name}
                </span>
                <p>{item.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Modal show={show} handleClose={handleClose} save={Save}>
        <Form.Control
          placeholder="URL da imagem"
          className="mb-1"
          onChange={(event) => setImage(event.target.value)}
        />
        <Form.Control
          placeholder="Nome"
          className="mb-1"
          onChange={(event) => setName(event.target.value)}
        />
        <Form.Control
          placeholder="Email"
          className="mb-1"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Control
          placeholder="Senha"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </Modal>
    </section>
  );
};

export default Home;