const express = require('express')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

const app = express()


async function start(){
    try {
    await mongoose.connect('mongodb+srv://iliias:<q1w2e3r4>@cluster0.oibualh.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT,()=>{
        console.log('Server has been started...')
    }
    )
    }
    catch(e){
        console.log(e)
    }

}

start()




