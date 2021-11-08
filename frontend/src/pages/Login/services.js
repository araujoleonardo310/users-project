import api from "../../services";

class LoginServices {
    static login(data) {
        return api.post("/users", data);
    }
}

export default LoginServices;