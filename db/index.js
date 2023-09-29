const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0.scj7j.mongodb.net/mta')
.then(() => console.log('Database Connection Success'))
.catch(() => console.log('Database Connection Failed'));