import React from 'react';
export default (props) => {
    const{ allPets } = props
    return (
        <div>
            <a href="pets/new/">add a pet to the shelter</a>
            <h2>These pets are looking for a good home</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets.map((Pet, index) =>
                            <tr key={index}>
                                <td>{Pet.name}</td>
                                <td>{Pet.type}</td>
                                <td><a href={"/pets/" + Pet._id+"/"} >details</a> | <a href={"/pets/" + Pet._id+"/edit/"}>Edit</a></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}