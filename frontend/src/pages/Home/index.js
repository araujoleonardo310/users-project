import React, { useEffect, useState } from "react";

import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import "./style.css";
import HomeServices from "./services.js";
import Header from "../../components/Header";

const Home = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  const List = async () => {
    const { data } = await HomeServices.listUsers();
    setUsers(data);
  };

  const Deletar = async (id) => {
    await HomeServices.delete(id);
    List();
  };

  const Editar = async (id) => {
    history.push(`/Cadastro/${id}`);
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
        </div>
        <div>
          {users.map((item) => (
            <div className="users-div">
              <span className="name">{item.name}</span>
              <span className="email">{item.email}</span>
              <div className="icons">
                <button onClick={() => Deletar(item.id)}>
                  <BsTrashFill className="trash" />
                </button>
                <button>
                  <FaEdit onClick={() => Editar(item.id)} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </setion>
  );
};

export default Home;
