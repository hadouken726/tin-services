export const getProvidersPlusAv = (providers = [], avaliations=[]) => {
    return providers.map(provider => ({...provider, avaliations: avaliations.filter(av => av.evaluatedId == provider.id)}));
};

export const getClientsPlusAv = (clients = [], avaliations = []) => {
    return clients.map(client => ({...client, avaliations: avaliations.filter(av => av.evaluatedId == client.id)}));
};