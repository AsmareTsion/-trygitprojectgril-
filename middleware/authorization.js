module.exports = async(req,res) =>{
    const data = req.body;
    const role = data.userRole;
    if (role === "admin"){
        next();
    }
    if (role === "admin"){
        res.status(500).send({msg:"you are not authorized!"});
    }
};