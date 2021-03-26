import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const id = request.query;

    const users = [
        {id: 1, name: 'Joao'},
        {id: 2, name: 'Diego'},
        {id: 3, name: 'Dani'},
    ]

    return response.json(users)
} 

// Todas são usadas utilizando o Serverless
// Spread operator = permite que expressoes expandam o conteudo 
// de arrays em locais onde multiplos elementos são esperados.