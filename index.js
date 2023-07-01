const express = require('express');
const app = express();
const port = 3000

//+ + DECLARACION JSON + +
app.use(express.json());

app.get('/misitio', (req, res) => {
    res.send('Bienvenido a mi sitio web');
});

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
})

// + + MAPA DE RUTAS + +
app.get('/misitio/about', (req, res) => {
    res.send('<h1>Acerca de nosotros</h1>');
});

app.get('/misitio/gastos', (req, res) => {
    res.json(
        {
            id: 435,
            gasto: 'Vivienda',
            monto: 141414.60,
            informacion: 'Corresponde a gastos Alimenticios servicios basicos'
        }
    )
});

app.post('/misitio/calculo', (req, res) => {
    console.log(req.body)
    res.send('Cálculo impuesto a la renta');
});

app.post('/misitio/usuario/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
})

// ACTUALIZAR DATOS
app.put('/misitio/usuario/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Datos del usuario actualizados');
})

app.delete('/misitio/usuario/:id', (req, res) => {
    res.send('Usuario ' + (req.params.id) + ' borrado');
});

// + + GASTOS (PRACTICA) + +
// 14. Crear un método PUT para gastos que permita actualizar el monto del gasto de VIVIENDA.
app.put('/misitio/gastos/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Gastos de vivienda actualizados');
})

// 15. Crear un método DELETE para borrar todos los gastos que correspondan al ID 435
app.delete('/misitio/gastos/:id', (req, res) => {
    res.send('Gasto ' + (req.params.id) + ' borrado');
});

// 16. Crear un método GET que permita visualizar todos los usuarios registrados
app.get('/misitio/usuario', (req, res) => {
    res.json(
    );
});

/**
 * {
            gasto: 'Salud',
            monto: 14575.60,
            informacion: 'Corresponde a consultas médicas, pagos de seguros, medicinas'
        }
 * 
 * {
            gasto: 'Vivienda',
            monto: 141414.60,
            informacion: 'Corresponde a gastos Alimenticios servicios basicos'
        }
 * ------------------------
 * {
        "gasto": "Vivienda",
        "monto": "141414.60",
        "informacion": "Corresponde a gastos Alimenticios servicios basicos"
    }
 *  {
        "gasto": "Salud",
        "monto": "14575.60",
        "informacion": "Corresponde a consultas médicas, pagos de seguros, medicinas"
    }
 */
