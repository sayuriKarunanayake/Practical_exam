import React from "react";
import pic from "../assets/abstract-art-grey-i36688.jpg";



export default function InsertUser(){  



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
                    <form className="reg-form" id="reg-form">
                        <div className="reg1">
                            <div className="reg2">
                                <br/><br/>
         
                                    <div class="form-group">
                                    <label className="labels" for="ID">ID</label>
                                    <input type="text" class="form-control" id="ID"/>
                                    </div>
                                    <div class="form-group">
                                    <label className="labels" for="name">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name"/>
                                    </div>
                            
                                <div class="form-group">
                                    <label className="labels" for="description">Description</label>
                                    <input type="text" class="form-control" id="description" placeholder="Enter a description"/>
                                </div>
                                <div class="form-group">
                                    <label className="labels" for="timeDuration">Time Duration</label>
                                    <input type="date" class="form-control" id="timeDuration"/>
                                </div>
                                <div class="form-group">
                                    <label className="labels" for="parentCard">Parent Card ID</label>
                                    <input type="text" class="form-control" id="parentCard"/>
                                </div>
                                <div class="form-group">
                                <label className="labels" for="role">Role</label>
                                <select id="role" class="form-control">
                                        <option selected>Choose</option>
                                        <option>Admin</option>
                                        <option>Manager</option>
                                        <option>Employee</option>
                                    </select> 
                                </div>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                    <label className="labels" for="city">City</label>
                                    <input type="text" class="form-control" id="city" placeholder="Enter city"/>
                                    </div>
                                    <div class="form-group">
                                    <label className="labels" for="province">Province</label>
                                    <select id="province" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>Wester province</option>
                                        <option>Southern province</option>
                                        <option>Central province</option>
                                    </select>
                                    </div>
                                    <div class="form-group">
                                    <label className="labels" for="country">Country</label>
                                    <input type="text" class="form-control" id="country" placeholder="Enter country"/>
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