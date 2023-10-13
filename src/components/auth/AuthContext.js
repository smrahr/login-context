import { createContext } from "react"
export const authContextDefaultValue = {
    user: null,
    login: null,
    logout: null
}
export const AuthContext = createContext(authContextDefaultValue)
