const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//Midleware
app.use(cors());
app.use(express.json());

//khanmhasanuzzaman
//Va8lg5NGDI3jGcOL

app.get('/', (req, res) => {
    res.send('Simple CURD is Running...')
})

app.listen(port, () => {
    console.log(`CURD Port is :${port}`);
})