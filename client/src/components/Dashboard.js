import { Link, navigate, Router} from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Dashboard = props => {
    const [pets, setPets] = useState([]);
    
    const getPets = () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res)
                setPets(res.data);
            })
            .catch(err => console.log(err));
    }
    useEffect( () => {
        getPets();
    }, []);
    return(
    <div className="container-fluid">
        <div className="row">
            
                {
                pets.map( (pet, index) => {
                    return <div className="col-sm-6 col-md-4 mb-4" key={index}>
                        <div className="card mt-3 h-100 border-info">
                        <div className="card-header bg-info text-light text-center">{pet.petName}</div>
                        <div className="card-body text-left">
                            <p>Type: {pet.petType}</p>
                            <p>Description: {pet.petDesc}</p>
                            <p>Skill 1: {pet.petSkill1}</p>
                            <p>Skill 2: {pet.petSkill2}</p>
                            <p>Skill 3: {pet.petSkill3}</p>

                            </div>
                            <div className="text-center">
                               <Link className="btn btn-success float-left m-4" to={`/pets/${pet._id}/edit`}>Edit</Link>
                                <Link className="btn btn-success float-right m-4" to={`/pets/${pet._id}`}>Details</Link>
                            </div>                        
                                
                        </div>
                        </div>
                })}
       
     

        </div>
    </div>
    )

}
export default Dashboard;