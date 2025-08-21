const mongoose = require('mongoose');

async function conectaDB(){
    const uri = process.env.MONGODB_URI;
    if(!uri) {
        console.log('MONGODB_URI não configurada ou não encotrada.');
        process.exit(1);
    }

    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(uri);
        console.log(`Conexão com o MongoDB estabelecida com sucesso!`);
    } catch (error) {
        console.error(`Erro ao conectar ao MongoDB: ${error}`);
        process.exit(1);
    }
}

module.exports = conectaDB;