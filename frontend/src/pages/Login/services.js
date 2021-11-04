import api from "../../services";

class LoginServices {
  static login(data) {
    return api.post("/login", data);
  }
}

export default LoginServices;