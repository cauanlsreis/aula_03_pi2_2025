//Criar um schema para Aluno
const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, 'Campo não obrigatório'],
            minlength: [2, 'Nome muito curto'],
            maxlength: [100, 'Nome muito longo']
        },
        idade: {
            type: Number,
            required: [true, 'Campo obrigatório'],
            min: [0, 'Idade não pode ser negativa'],
            max: [150, 'Idade inválida']
        },
        curso: {
            type: String,
            required: [true, 'Campo obrigatório'],
            maxlength: [120, 'Curso muito longo']
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    { versionKey: false }
);

const Aluno = mongoose.model("Aluno", alunoSchema);
module.exports = Aluno;