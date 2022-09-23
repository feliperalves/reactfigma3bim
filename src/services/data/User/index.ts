import { IResponseUser, IUser } from "interfaces/user.interface";
import api from "services/api"
import User from "./User";

class UserData {
    register(data: IUser) {
        return api.post<IResponseUser>('/register', data)
    }
    login(data: IUser) {
        return api.post<IResponseUser>('/login', data)
    }
}

export default new UserData()