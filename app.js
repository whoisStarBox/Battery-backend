import express from 'express'
import 'dotenv/config'

const app = express()

app.get('/', (req, res) => {
    res.send('Battery-backend')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running')
})
