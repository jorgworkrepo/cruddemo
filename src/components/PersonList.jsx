import React from 'react';

function PersonList(props) {
    
    const {persons, editPerson, deletePersonById} = props;

    return (
        <div>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Age</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {persons.map((p, index) =>
                    (
                        <tr key={p.id}>
                            <th scope="row">{index}</th>
                            <th>{p.age}</th>
                            <th>{p.name}</th>
                            <th>{p.gender}</th>
                            <th>{p.email}</th>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default PersonList;
