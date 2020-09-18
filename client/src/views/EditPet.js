import React, { useState, useEffect } from 'react';
import BackHome from '../components/BackHome';
import PetForm from '../components/PetForm';
import axios from 'axios';
import { navigate } from '@reach/router';

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

    const onSubmitHandler = (e) => {
        props.handleEdit(e);
    }

    return (
        <div>
            <BackHome />
            {loaded && (
                <PetForm initialPetID={currentPet._id} initialName={name} initialType={type} initialDescription={description} initialSkillOne={skillOne} initialSkillTwo={skillTwo} initialSkillThree={skillThree} onSubmitProp={onSubmitHandler}/>
            )}
        </div>
    )
}