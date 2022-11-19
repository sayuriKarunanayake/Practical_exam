const router = require("express").Router();
const { db } = require("../models/User");
let User = require("../models/User");

//insert new user route
router.route("/adduser").post((req,res)=>{
    

    var attriArray = [];//to store array of attributes

    req.body.arr.forEach(function(attributes){
        var attributes = {
            city : attributes.city,
            province : attributes.province,
            country : attributes.country,
        };

        attriArray.push(attributes);//pushing attribute variable into array
        console.log(attriArray);
    });

    const ID = Number(req.body.ID);
    const name = req.body.name;
    const description = req.body.description;
    const timeDuration = req.body.timeDuration;
    const parentCard = Number(req.body.parentCard);
    const role = req.body.role;
    const arr = attriArray;
    

    const newUser = new User({
        ID,
        name,
        description,
        timeDuration,
        parentCard,
        role,
        arr
    })

    newUser.save().then(()=>{
        res.json("New user added!")
    }).catch((err)=>{
        console.log(err);
        res.status(401).send({message:'Failed to add user!'});
    })
})

//view all user details route
router.route("/allusers").get((req,res)=>{
    User.find().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;