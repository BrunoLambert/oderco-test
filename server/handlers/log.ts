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