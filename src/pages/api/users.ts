import { NextApiRequest, NextApiResponse } from 'next'

// Estrategia de autenticação: 
//  JWT(Strorage)
// Next Auth (sistema de autenticação simples, (social), consegue sem o backend)
// Cognito(AWS), Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Joao'},
        {id: 2, name: 'Diego'},
        {id: 3, name: 'Dani'},
    ]

    return response.json(users)
} 

// Todas são usadas utilizando o Serverless
