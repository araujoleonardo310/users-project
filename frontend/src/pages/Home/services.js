import api from "../../services";

class HomeServices {
  static listUsers() {
    return api.get("/users");
  }

  static delete(id) {
    return api.delete(`/users/${id}`);
  }
}

export default HomeServices;
