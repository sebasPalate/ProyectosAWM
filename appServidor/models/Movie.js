const mongoose = require('mongoose')
const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('movie', MovieSchema)