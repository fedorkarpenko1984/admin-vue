const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 5000

app.use(bodyParser())

app.use(express.static('public'));



app.use('/api/categories', require('./routes/categories'))
app.use('/api/products', require('./routes/products'))


app.listen(PORT, () => {
    console.log('Serve on ' + PORT + '!')
})


