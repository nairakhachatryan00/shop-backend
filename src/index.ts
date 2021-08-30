import 'reflect-metadata';
import { getApp } from './app';
import {connection} from "./connection";

const PORT = process.env.PORT || 3001;
const server = async () => {
    await connection.connect();
    const app = getApp();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}
server()
    .then(() => console.log('Postgres is connected!'))
    .catch(err => console.log(err));
