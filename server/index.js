const app = require('express')()
const bodyParser = require('body-parser')

const PORT = 5000

app.use(bodyParser())

app.use('/api/categories', require('./routes/categories'))


app.listen(PORT, () => {
    console.log('Serve on ' + PORT + '!')
})


