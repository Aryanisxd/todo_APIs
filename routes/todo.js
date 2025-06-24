import { Router } from 'express' ;
import { TodoModel } from '../model/todoModel.js' ;
const TodoRouter = Router();



//all routes are here 

//rote to create a todo 
TodoRouter.post('/create', async function (req, res) {
    const {title, priority, status} = req.body ;

    try {
        const result = await TodoModel.create({title, priority, status}) ;
        res.json({
            message: 'Todo created successfully',
            result
        })
        
    } catch (error) {
        console.log(error)

    }
  
})


//route to get all the todos 
TodoRouter.get('/all' , async function (req,res ) { 
    try {
        const result = await TodoModel.find ({}) ;
        res.json({
            message: 'Todos fetched successfully',
            result
        })    
    } catch (error) {  
        console.log(error)                 
    }       
})


// route to get a single todo 
TodoRouter.get ('/:id' , async function (req, res) {
    const id = req.params.id ;

    try {
        const result = await TodoModel.findById(id)
        res.json({
            message: 'Todo fetched successfully',
            result
        })
    } catch (error) {
        console.log(error)
    }
})

//route to chnage the elemnets of a particular todo 
TodoRouter.put('/:id' , async function (req, res) {
    const id = req.params.id ;
    const {title, priority, status} = req.body ;

    try { 
        const result = await TodoModel.findByIdAndUpdate(id, {title, priority, status}) ;
        res.json({
            message: 'Todo updated successfully',
            result
        })
    } catch (error) {
        console.log(error)
    }
})


//route to dlete the todo 
TodoRouter.delete('/:id' , async function (req, res) {
    const id = req.params.id ;
    try {
        const result = await TodoModel.findByIdAndDelete(id) ;
        res.json({
            message: 'Todo deleted successfully',
            result
        })
    } catch (error) {
        console.log(error)
    }
})






export default TodoRouter ;       