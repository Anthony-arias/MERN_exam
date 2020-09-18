import React, { useState, useEffect } from 'react';
import BackHome from '../components/BackHome';
import axios from 'axios';

export default (props) => {
    let [currentPet, setCurrentPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState();
    const [skillTwo, setSkillTwo] = useState();
    const [skillThree, setSkillThree] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.petID + "/").then(response => {
            setCurrentPet(currentPet = response.data);
            setName(currentPet.name);
            setType(currentPet.type);
            setDescription(currentPet.description);
            setSkillOne(currentPet.skillOne);
            setSkillTwo(currentPet.skillTwo);
            setSkillThree(currentPet.skillThree);
            setLoaded(true);
        })
            .catch(function (error) {
                console.log(error);
            })

    }, []);

    const handleDelete = (id) => {
        props.handleDelete(id);
    }
    

    return (
        <div>
            <BackHome />
            <h2>Details about: {name}</h2><button onClick={() => { handleDelete(currentPet._id) }}>Adopt {currentPet.name}</button>
            <div id="petInfo">
                <h3>Pet type: <br/>Description: <br/>Skills: </h3>
                <p>{type}<br />{description}<br />{skillOne}, {skillTwo}, {skillThree}</p>
            </div>
        </div>
    )
}