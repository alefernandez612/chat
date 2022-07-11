const mongoose = require('mongoose');
const { Schema } = mongoose;

const mensajeSchema = new Schema({
    nombre: String,
    mensaje: String
}, {
    timestamps: true
});

module.exports = mongoose.model('mensaje', mensajeSchema);