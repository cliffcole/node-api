const express = require('express');
const router = express.Router()

var stuff = {
    id: 1,
    name: 'blah',
    addr: 'blahblah'
}
router.use((req,res,next) => {
    console.log("WORD");
    next();
})
router.get("/", (req,res) => {
    res.json(stuff);
})
router.post('/', (req,res) => {
    console.log(req.body);
    res.send("Done");
})

module.exports = router;