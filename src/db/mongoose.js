const mongoose=require('mongoose')


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    // useCreateIndex: true,
    // useFindAndModify:false
})

// const task1=new task({
//     description:"  trying trim, required and default"
// })
// task1.save().then((result) => {
//     console.log(task1)
// }).catch((err) => {
//     console.log(err)
// });