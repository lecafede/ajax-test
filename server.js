const express = require("express");
  
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = {
    'Настя':{name:'Настя', photo:'Nastya.jpg'},
    'Саня':{name:'Саня', photo:'Sanya.jpg'},
    'Александра':{name:'Aлександра', photo:'Alya.jpg'},
    'Денис':{name:'Денис', photo:'Denis.jpg'},
    'Игорь':{name:'Игорь', photo:'Igor.jpg'},
}

app.get('/users', (req, res) => {
    console.log('running app.get /users')
    const allUsernames = Object.keys(fakeDatabase)
    console.log('allUsernames is: ', allUsernames)
    res.send(allUsernames)
})

app.get('/users/:userid', (req, res) => {
    const nameToLookup = req.params.userid;
    const val = fakeDatabase[nameToLookup];
    console.log(nameToLookup, val) 
    
    if (val) {
        res.send(val);
    } else {
        res.send({});
    }
});

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000/")
})


