const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

/*
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

const kitty2 = new Cat({ name: 'Sucio' })
kitty2.save().then(() => console.log('meow2'));

const kitty3 = new Cat({ name: 'Mijo' })
kitty3.save().then(() => console.log('meow3'));
*/


Cat.find({name:'Sucio'},(err,data)=>{
    console.log(data)
})
