import express from 'express';
import funcionarios from './funcionariosRoutes.js';

const routes = app => {
    app.route('/').get((req, res) => {
        res.json({
            "statusCode": 200,
            "message": "API rodando!"
        });
    })

    app.use(
        express.json(),
        funcionarios
    )
}

export default routes;