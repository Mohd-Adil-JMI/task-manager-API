const express = require('express')
require('./db/mongoose')
const UserRouter=require('./routers/user')
const TaskRouter=require('./routers/task')
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

app.get("*", (req, res) => {
    res.send("Hello from task App")
})
app.listen(PORT, () => {
    console.log(`App Listening at http://localhost:${PORT}`)
})