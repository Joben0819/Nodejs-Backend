const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json())

app.get('/', async (req, res) => {
    res.json({data : 'hello worldsss'})
})

app.listen(PORT, () => {
    console.log(`port ${PORT}`)
})
