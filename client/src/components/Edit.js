import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const Edit = props => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [petSkill1, setPetSkill1] = useState("");
    const [petSkill2, setPetSkill2] = useState("");
    const [petSkill3, setPetSkill3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res);
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDesc(res.data.petDesc);
                setPetSkill1(res.data.petSkill1);
                setPetSkill2(res.data.petSkill2);
                setPetSkill3(res.data.petSkill3);
            }).catch(errors => console.log(errors));
    }, [props._id]);
    const editPet = e => {
        e.preventDefault();

        const updatedpet = {petName, petType, petDesc, petSkill1,petSkill2,petSkill3};

        axios.put(`http://localhost:8000/api/pets/${props._id}`, updatedpet)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            })
                .catch(err => console.log(err));
    }

    return(
        <div>
        <form  className="col-sm-8 offset-sm-2" onSubmit={editPet} >
            <div className="card mt-3">
                <div className="card-header bg-info text-light text-center">Edit Pet</div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" onChange={e => setPetName(e.target.value)} value={petName} />
                        { errors.petName ? <p className="text-danger">{errors.petName.properties.message}</p>: "" }

                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <input type="text" className="form-control" onChange={e => setPetType(e.target.value)} value={petType}/>
                        { errors.petType ? <p className="text-danger">{errors.petType.properties.message}</p>: "" }
                      

                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" onChange={e => setPetDesc(e.target.value)} value={petDesc}/>
                        { errors.petDesc ? <p className="text-danger">{errors.petDesc.properties.message}</p>: "" }


                    </div>
                    <div className="form-group">
                        <label>Skill 1</label>
                        <input type="text" className="form-control" onChange={e => setPetSkill1(e.target.value)} value={petSkill1} />
                    </div>
                    <div className="form-group">
                        <label>Skill 2</label>
                        <input type="text" className="form-control" onChange={e => setPetSkill2(e.target.value)} value={petSkill2} />
                    </div>
                    <div className="form-group">
                        <label>Skill 3</label>
                        <input type="text" className="form-control" onChange={e => setPetSkill3(e.target.value)} value={petSkill3} />
                    </div>
                </div>
                <input type="submit" className="btn btn-success mt-4" value="Update" />

            </div>
        </form>

    </div>

    )
}
export default Edit;