import api from "../../services";

class CadastroServices {
    static register(data) {
        return api.post("/users", data)
    }

    static usuario(id) {
        return api.get(`/users/${id}`)
    }

    static editar(id, data) {
        return api.put(`/users/${id}`, data)
    }
}

export default CadastroServices;