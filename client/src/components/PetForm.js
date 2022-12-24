import { navigate} from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PetForm = props => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [petSkill1, setPetSkill1] = useState("");
    const [petSkill2, setPetSkill2] = useState("");
    const [petSkill3, setPetSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const addPet = e => {
        e.preventDefault();
        const newpet = {petName, petType, petDesc, petSkill1,petSkill2,petSkill3};
        axios.post("http://localhost:8000/api/pets", newpet)
            .then(res =>{
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    navigate("/");
                }
                
            }).catch(err => console.log(err));
    }
    return(
        <div>
            <form  className="col-sm-8 offset-sm-2" onSubmit={addPet} >
                <div className="card mt-3">
                    <div className="card-header bg-info text-light text-center">Do you know a pet needing a home?</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Pet Name:</label>
                            <input type="text" className="form-control" onChange={e => setPetName(e.target.value)} />
                            { errors.petName ? <p className="text-danger">{errors.petName.properties.message}</p>: "" }

                        </div>
                        <div className="form-group">
                            <label>Pet Type:</label>
                            <input type="text" className="form-control" onChange={e => setPetType(e.target.value)} />
                            { errors.petType ? <p className="text-danger">{errors.petType.properties.message}</p>: "" }
                          

                        </div>
                        <div className="form-group">
                            <label>Pet Description:</label>
                            <input type="text" className="form-control" onChange={e => setPetDesc(e.target.value)} />
                            { errors.petDesc ? <p className="text-danger">{errors.petDesc.properties.message}</p>: "" }


                        </div>
                        <div className="form-group">
                            <label>Skill 1</label>
                            <input type="text" className="form-control" onChange={e => setPetSkill1(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Skill 2</label>
                            <input type="text" className="form-control" onChange={e => setPetSkill2(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Skill 3</label>
                            <input type="text" className="form-control" onChange={e => setPetSkill3(e.target.value)} />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-success mt-4" value="Add Pet" />

                </div>
            </form>

        </div>
    )

}
export default PetForm;