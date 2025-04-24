let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');
let methodOverride = require('method-override');


// criar objeto
let app = express();

app.use(cors());

// permite que use verbo HTTP
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Request-With,Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//----------- MONGOOSE -----------//

let url = 'mongodb://localhost:27017/FatecVotorantim';

mongoose.connect(url)
.then(
      ()=>{console.log('Conectado ao mongodb');}
).catch(
    (e)=>{console.log(e)}
)

// criar uma estrutura no documento e coleção

       let User = mongoose.model("Usuario1", new mongoose.Schema(
        {
            name: String,
            age: String,
            city: String,
        
        }));

// pasta raiz
// get find()
app.get("/", async (req, res)=>{
    let users = await User.find({})
    res.json(users);
});

app.post('/add', async(req, res)=>{
    let vnome = req.body.name;
    let vidade = req.body.age;
    let vcidade = req.body.city;
    await new User({name:vnome, age:vidade, city:vcidade}).save();
    res.send({ status:"adicionado" })
}); 

//PUT
app.put("/update/:id",  async(req, res)=>{
    //pegando o parametro via url
    const id = req.params.id;
    // dados o header
    // array
    const dados = req.body;
    // objeto model
    const u = await User.findByIdAndUpdate(id,dados);
    if(u){
        res.send({status:'alterado'})
    }else{
        res.send({status:'erro'})
    }
})

// delete

app.delete("/delete/:id",async(req, res)=>{
    let id = req.params.id;
    let i = await User.findByIdAndDelete(id);
    if(i){
        res.send({status:'deletado'})
    }else{
        res.send({status:'erro'})
    }
})

// criar o servidor

app.listen(3000,()=>{
    console.log('Executando Servidor');
});