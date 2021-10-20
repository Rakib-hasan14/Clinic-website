import { useContext } from "react"
import {  AuthContext } from "./AuthContext"

const useDepartments = () => {
    return useContext(AuthContext)
}

export default useDepartments;