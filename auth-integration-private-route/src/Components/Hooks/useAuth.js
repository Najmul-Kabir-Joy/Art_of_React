import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider"

const useAtuh = () => {
    return useContext(AuthContext);
}

export default useAtuh;