import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import { app } from './app.js'
import { connectDB } from './db/index.js'
import colors from 'colors'

connectDB()
    .then((res) => {
        app.listen(
            process.env.PORT,
            process.env.HOST,
            () =>
                console.log(`server listening on port: ${process.env.PORT}`.blue))
        console.log(`DB Connected on HOST: ${res.connection.host}`.grey)
    })
    .catch((err) => console.log(`DB Connection Err: ${err.message}`))


