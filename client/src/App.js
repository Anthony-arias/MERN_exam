import React, { useState, useEffect } from 'react';
import { Router, navigate } from '@reach/router';
import axios from 'axios';
import Main from './views/Main';
import CreatePet from './views/CreatePet';
import PetInfo from './views/PetInfo';
import EditPet from './views/EditPet';

import './App.css';

function App() {
    const [allPets, setAllPets] = useState([]);
    const [petAdopted, setPetAdopted] = useState(0);
    const [petSubmitted, setPetSubmitted] = useState(0);
    const [petEdited, setPetEdited] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets").then(response => {
            setAllPets(response.data);
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [petAdopted, petSubmitted, petEdited]);

    const handleSubmit = (e) => {
        console.log("in submit handler")
        axios.post('http://localhost:8000/api/pet/new', {
            name: e.name,
            type: e.type,
            description: e.description,
            skillOne: e.skillOne,
            skillTwo: e.skillTwo,
            skillThree: e.skillThree
        })
            .then(setPetSubmitted(petSubmitted + 1), navigate("/"))
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleEdit = (e) => {
        axios.put("http://localhost:8000/api/pet/" + e.petID + "/edit", {
            name: e.name,
            type: e.type,
            description: e.description,
            skillOne: e.skillOne,
            skillTwo: e.skillTwo,
            skillThree: e.skillThree
        })
            .then(setPetEdited(petEdited + 1), navigate("/"))
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleDelete = (id) => {
        //console.log(id);
        axios.delete("http://localhost:8000/api/pet/" + id + "/delete").then(response => {
            console.log("Pet Adopted");
            setPetAdopted(petAdopted+1);
            console.log(petAdopted);
            navigate("/");
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className="App">
            <h1>Pet Shelter</h1>
            <Router>
                <Main path="/" allPets={allPets} />
                <CreatePet path="pets/new/" handleSubmit={handleSubmit}/>
                <PetInfo path="pets/:petID/" handleDelete={handleDelete}/>
                <EditPet path="pets/:petID/edit/" handleEdit={handleEdit}/>
            </Router>
        </div>
    );
}

export default App;
