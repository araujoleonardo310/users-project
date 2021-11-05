import api from "../../services";

class HomeServices {
    static listUsers() {
        return api.get("/users")
    }

    static register(data) {
        return api.post("/register")
    }
}

export default HomeServices;