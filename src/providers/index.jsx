import {AuthProvider} from "./Auth/index"

const Providers = ({children}) => {
    return (
        <AuthProvider>{children}</AuthProvider>
    )
}
export default Providers