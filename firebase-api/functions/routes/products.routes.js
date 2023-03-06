const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

// Añadir
router.post('/api/products', async (req, res) => {
    try {
        await db
            .collection('products')
            .doc("/" + req.body.id + "/")
            .create({ name: req.body.name });
        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

// Buscar
router.get('/api/products/:product_id', async (req, res) => {
    try {
        const doc = db.collection('products').doc(req.params.product_id);
        const item = await doc.get();
        const response = item.data();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

// Mostrar
router.get('/api/products', async (req, res) => {
    try {
        const query = db.collection('products');
        const querySnaphost = await query.get();
        const docs = querySnaphost.docs;
        const response = docs.map(doc => ({
            id: doc.id,
            name: doc.data().name
        }))
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

// Eliminar
router.delete('/api/products/:product_id', async (req, res) => {
    try {
        const doc = db.collection('products').doc(req.params.product_id);
        await doc.delete();
        return res.status(200).json();
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
})

// Actualizar
router.put('/api/products/:product_id', async (req, res) => {
    try {
        const doc = db.collection('products').doc(req.params.product_id);
        await doc.update({
            name: req.body.name
        })
        return res.status(200).json();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

module.exports =router
