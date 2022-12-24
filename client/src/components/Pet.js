import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


export default props => {

    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props._id)
            .then(res => setPet(res.data))
    }, [])

    const adoptPet = (_id) => {
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                axios.get("http://localhost:8000/api/pets")
                    .then( res => {
                        setPet(res.data);
                        navigate("/")
                    })
                    .catch(err => console.log(err));
            })
    }

    return(
        <div className="col-sm-6 offset-sm-3">
            <div className="card m-5">
                <div className="card-header bg-info text-white text-center">
                    Details About: { pet.petName } 
                </div>
                <div className="card-body mb-4">
                    <p>Type: { pet.petType }</p>
                    <p>Description:{ pet.petDesc }</p>
                    <p>Skill 1: {pet.petSkill1}</p>
                    <p>Skill 2: {pet.petSkill2}</p>
                    <p>Skill 3: {pet.petSkill3}</p>
                </div>

                <Link className="btn btn-warning" to={"/pets/" + pet._id + "/edit"}>Edit</Link>
                <button className="btn btn-success" onClick={(e)=>{adoptPet(pet._id)}}>Adopt {pet.petName}!</button>

            </div>  
        </div>

    )
}