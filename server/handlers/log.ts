// Funções para simular um sistema de log de erro.
// Podendo ser usado direto em uma rota ou ser chamado pelo client pelas rotas:
// log/error e log/register.

const LogHandler = (type: 'error' | 'register', data: any) => {
    if (type === 'error') {
        // Simualate Error Storage
        console.error({
            registeredAt: Date(),
            ...data,
        })
    } else {
        // Simualate Event Storage
        console.log({
            registeredAt: Date(),
            ...data
        })
    }
}

export default LogHandler;