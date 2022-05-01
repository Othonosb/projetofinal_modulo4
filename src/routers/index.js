import express from 'express';
import funcionarios from './funcionariosRoutes.js';
import clientes from './clientesRoutes.js';

const routes = app => {
    app.route('/').get((req, res) => {
        res.json({
            "statusCode": 200,
            "message": "API rodando!"
        });
    })

    app.use(
        express.json(),
        funcionarios,
        clientes
    )
}

export default routes;