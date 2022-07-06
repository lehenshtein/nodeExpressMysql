const express = require('express')
const helmet = require("helmet")
const path = require('path')
const todoRoutes = require('./routes/todo')
// const sequelize = require('./utils/database')
const compression = require('compression')

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, 'public');
console.log(publicPath);

app.use(express.static(publicPath));
app.use(express.json()); //this middleware parses all json requests
app.use(helmet());
app.use(compression());
//routes
app.use('/api/todo', todoRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

async function start() {
    try {
        // await sequelize.sync();
        // await sequelize.sync({force: true});
        console.log('Connection has been established successfully.');
        console.log('http://localhost:' + PORT);
        app.listen(PORT)
    } catch (err) {
        console.log('Unable to connect to the database:', err);
    }
}
start();

