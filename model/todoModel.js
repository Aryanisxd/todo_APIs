import mongoose from 'mongoose' ;

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
   priority: {
    type: String,
    
   },
   status: {
    type: String,
   
   }

})

const TodoModel = mongoose.model('TodoModel', TodoSchema) ;

export {TodoModel} ;