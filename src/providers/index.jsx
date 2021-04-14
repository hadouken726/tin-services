import {UserProvider} from "./User"
import {FormDataProvider} from "./FormData"
const Providers = ({children}) => {
    return (
        <UserProvider>
            <FormDataProvider>
            {children}
            </FormDataProvider>
        </UserProvider>
    );
}
export default Providers;

