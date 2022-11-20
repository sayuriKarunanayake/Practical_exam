import React, {useState} from "react";
import pic from "../assets/abstract-art-grey-i36688.jpg";
import axios from "axios";


export default function InsertUser(){  
    const[ID,setID] = useState("");
    const[name,setname] = useState("");
    const[description,setdescription] = useState("");
    const[timeDuration,settimeDuration] = useState("");
    const[parentCard,setparentCard] = useState("");
    const[role,setrole] = useState("");
    const[city,setcity] = useState("");
    const[province,setprovince] = useState("");
    const[country,setcountry] = useState("");

    function sendData(e){
        e.preventDefault();//to prevent normal behavior of submit

        const arr = [{
            city : city,
            province : province,
            country : country
        }]//array of attributes

        console.log(arr);

        const newUser = {
            ID,
            name,
            description,
            timeDuration,
            parentCard,
            role,
            arr
        }
        console.log(newUser);

        //http://localhost:3000/addUser 
        axios.post("http://localhost:8070/user/addUser", newUser).then(()=>{
            alert("New User Successfully Added !");
            window.location = `/addUser`;
        }).catch((err)=>{
            alert(err.response.data.message);
            console.log(err.message);
        })

    }

 return(
   <div className="reg">
    <div className="container">
        <br/>
        <blockquote class="blockquote"><center>
          <h1 class="mb-0"> INSERT USER DETAILS HERE</h1>
          </center>
        </blockquote>

        <div><br/>
        <table id="user">
            <tr>
                <th></th><th></th>
            </tr>
            <tr>
                <div style={{width:"235px"}}>
                    <div className="topic"><br/></div>
                    <td>
                        <br/>
                        <img src={pic} alt="pic" className="image"/><br/><br/>
                    </td>
                </div>
                <td>
                    <form className="reg-form" id="reg-form" onSubmit={sendData}>
                        <div className="reg1">
                            <div className="reg2">
                                <br/><br/>
         
                                    <div class="form-group">
                                    <label className="labels" for="ID">ID</label>
                                    <input type="text" class="form-control" id="ID" onChange={(e)=>{
                                            setID(e.target.value);//updating state using value taken from the form 
                                        }} required/>
                                    </div>
                                    <div class="form-group">
                                    <label className="labels" for="name">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" onChange={(e)=>{
                                            setname(e.target.value);//updating state using value taken from the form 
                                        }} required/>
                                    </div>
                            
                                <div class="form-group">
                                    <label className="labels" for="description">Description</label>
                                    <input type="text" class="form-control" id="description" placeholder="Enter a description" onChange={(e)=>{
                                            setdescription(e.target.value);//updating state using value taken from the form 
                                        }} required/>
                                </div>
                                <div class="form-group">
                                    <label className="labels" for="timeDuration">Time Duration</label>
                                    <input type="date" class="form-control" id="timeDuration" onChange={(e)=>{
                                            settimeDuration(e.target.value);//updating state using value taken from the form 
                                        }} required/>
                                </div>
                                <div class="form-group">
                                    <label className="labels" for="parentCard">Parent Card ID</label>
                                    <input type="text" class="form-control" id="parentCard" onChange={(e)=>{
                                            setparentCard(e.target.value);//updating state using value taken from the form 
                                        }} required/>
                                </div>
                                <div class="form-group">
                                <label className="labels" for="role">Role</label>
                                <select id="role" class="form-control" onChange={(e)=>{
                                            setrole(e.target.value);//updating state using value taken from the form 
                                        }} required>
                                        <option selected>Choose</option>
                                        <option>Admin</option>
                                        <option>Manager</option>
                                        <option>Employee</option>
                                    </select> 
                                </div>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                    <label className="labels" for="city">City</label>
                                    <input type="text" class="form-control" id="city" placeholder="Enter city" onChange={(e)=>{
                                            setcity(e.target.value);//updating state using value taken from the form 
                                        }} required/>
                                    </div>
                                    <div class="form-group">
                                    <label className="labels" for="province">Province</label>
                                    <select id="province" class="form-control"
                                    onChange={(e)=>{setprovince(e.target.value);//updating state using value taken from the form 
                                            }} required>
                                        <option selected>Choose...</option>
                                        <option>Wester province</option>
                                        <option>Southern province</option>
                                        <option>Central province</option>
                                    </select>
                                    </div>
                                    <div class="form-group">
                                    <label className="labels" for="country">Country</label>
                                    <input type="text" class="form-control" id="country" placeholder="Enter country" onChange={(e)=>{
                                            setcountry(e.target.value);//updating state using value taken from the form 
                                        }} required/>
                                    </div>
                                </div>
                                <div class="form-group">
                            
                                </div>
                                <br/>   
                                <button type="submit" class="btn btn-dark">Save</button>

                            </div>
                        </div>
                    </form>
                </td>
            </tr>
        </table>
        </div>
    </div>
   </div>
 );
}