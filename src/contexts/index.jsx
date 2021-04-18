import {UserProvider} from "./User"
import {ClientsProvider} from "./Clients";
import {ProvidersProvider} from "./Providers";

const Providers = ({children}) => {
    return (
        <UserProvider>
            <ProvidersProvider>
                <ClientsProvider>
                    {children}
                </ClientsProvider>
            </ProvidersProvider>
        </UserProvider>
    );
};
export default Providers;



