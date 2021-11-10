import api from "../../services";

class CadastroServices {
    static register(data) {
        return api.post("/register")
    }

    static usuario(id) {
        return api.get(`/users/${id}`)
    }
}

export default CadastroServices;