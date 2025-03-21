const userFetch = {
    auth: async(data: any): Promise<any> => {
        try {
            const request: any = await fetch('/api/user/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    
            return request;
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

export { userFetch }