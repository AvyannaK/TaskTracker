const express = require(`express`);
const app = express();
const port = 8000;

app.use(express.static('task'));

app.listen(port, ()=>{
    console.log(`Server running on localhost::${port}`)
})