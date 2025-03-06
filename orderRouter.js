const  express = require("express");
const{getallorder,addorder}= require("./orderController");
const auth = require("./middleware/authorization");
const router = express.Router();

//testing git/

router.get("/getallorder",auth,getallorder);
router.post("/addorder",addorder);
module.exports = router;