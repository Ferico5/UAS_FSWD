import express from 'express'
import cors from 'cors'
import RegistrationRoute from './routes/RegistrationRoute.js'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(RegistrationRoute)

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})