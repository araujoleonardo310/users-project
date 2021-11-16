import api from "../../services";

class LoginServices {
  static login() {
    return api.get("/users");
  }
}

export default LoginServices;
