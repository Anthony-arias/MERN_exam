import React from 'react';
import BackHome from '../components/BackHome';
import PetForm from '../components/PetForm';

export default (props) => {

    const onSubmitHandler = (e) => {
        props.handleSubmit(e)
    }


    return (
        <div>
            <BackHome />
            <PetForm onSubmitProp={onSubmitHandler} initialName="" initialType="" initialDescription=""/>
        </div>
    )
}