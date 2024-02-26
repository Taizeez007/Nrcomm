const express = require('express')
const port =process.env.PORT|| 2000;

const app = express()

app.use(express.static('public'))

app.get('/',(req,res) =>{
    if(url=='/'){
        res.sendFile(__dirname + './RNECOMM/zeecom.html')
    }else{
        const error =()=>{
            throw(err);
            console.log(404,'invalid connection')
        }
    }
})

const searchButton = document.getElementById('Search-button')

await async function clickSerarch(){
    method:'POST',
    prompt:prompt()
}