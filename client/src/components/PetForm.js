import React, { useState } from 'react'
export default (props) => {
    const {initialPetID, initialName, initialType, initialDescription, initialSkillOne, initialSkillTwo, initialSkillThree, onSubmitProp } = props;
    const [petID, setPetID] = useState(initialPetID)
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skillOne, setSkillOne] = useState(initialSkillOne);
    const [skillTwo, setSkillTwo] = useState(initialSkillTwo);
    const [skillThree, setSkillThree] = useState(initialSkillThree);

    const [nameError, setNameError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [submittable, setSubmittable] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 1) {
            setSubmittable(false);
            setNameError("Name is required")
        } else if (e.target.value.length < 3) {
            setSubmittable(false);
            setNameError("Name must be at least 3 characters long")
        } else {
            setNameError("");
            setSubmittable(true);
        }
        
    }

    const handleType = (e) => {
        setType(e.target.value);
        if (e.target.value.length < 1) {
            setSubmittable(false);
            setTypeError("Pet type is required")
        } else if (e.target.value.length < 3) {
            setSubmittable(false);
            setTypeError("Pet type must be at least 3 characters long")
        } else {
            setTypeError("");
            setSubmittable(true);
        }
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
        if (e.target.value.length < 1) {
            setSubmittable(false);
            setDescriptionError("Pet description is required")
        } else if (e.target.value.length < 3) {
            setSubmittable(false);
            setDescriptionError("Pet description must be at least 3 characters long")
        } else {
            setDescriptionError("");
            setSubmittable(true);
        }

    }

    const onSubmitHandler = e => {
        if (submittable) {
            e.preventDefault();
            try { onSubmitProp({ petID, name, type, description, skillOne, skillTwo, skillThree }) }
            catch (err) {console.log(err)}
        }
        else alert("please fix errors before submitting ");
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Pet Name:</label><br />
                <input type="text" onChange={(e) => handleName(e)} defaultValue={name} />
            </p>
            {
                nameError ?
                    <p style={{ color: 'red' }}>{nameError}</p> :
                    ''
            }
            <p>
                <label>Pet Type:</label><br />
                <input type="text" onChange={(e) => handleType(e)} defaultValue={type} />
            </p>
            {
                typeError ?
                    <p style={{ color: 'red' }}>{typeError}</p> :
                    ''
            }
            <p>
                <label>Pet Description:</label><br />
                <input type="text" onChange={(e) => handleDescription(e)} defaultValue={description} />
            </p>
            {
                descriptionError ?
                    <p style={{ color: 'red' }}>{descriptionError}</p> :
                    ''
            }
            <p>
                <label>Skill 1:</label><br />
                <input type="text" onChange={(e) => setSkillOne(e.target.value)} defaultValue={skillOne} />
            </p>
            <p>
                <label>Skill 2:</label><br />
                <input type="text" onChange={(e) => setSkillTwo(e.target.value)} defaultValue={skillTwo} />
            </p>
            <p>
                <label>Skill 3:</label><br />
                <input type="text" onChange={(e) => setSkillThree(e.target.value)} defaultValue={skillThree} />
            </p>
            <input type="submit" />
        </form>
    )
}
