import {UserProvider} from "./User"
import {FormDataProvider} from "./FormData"
import {ClientsProvider} from "./Clients";
import {ProvidersProvider} from "./Providers";

const Providers = ({children}) => {
    return (
        <UserProvider>
            <ProvidersProvider>
                <ClientsProvider>
                    <FormDataProvider>
                        {children}
                    </FormDataProvider>
                </ClientsProvider>
            </ProvidersProvider>
        </UserProvider>
    );
};
export default Providers;


