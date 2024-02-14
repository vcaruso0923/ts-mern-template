import './env.ts'
import express from 'express'
import cors from 'cors'
import recordRoutes from './routes/record.ts'
import {dbo} from './db/conn.ts'


const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(recordRoutes)

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err)
    })
    console.log(`Server is running on port: ${port}`)
})
