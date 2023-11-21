const { conn } = require("./src/db.js")
const server = require("./src/app")

const PORT = 2999;

conn.sync({ force: false })

    .then(() => {
        server.listen(PORT, () => {
            console.log(`El servidor escucha el puerto : ${PORT}`);
        })

    }).catch((err) => {
        console.log(err);
    });