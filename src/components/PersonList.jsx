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
                            <td>
                                <a
                                    style={{marginRight: "2px"}}
                                    className="btn btn-outline-primary"
                                    href="#" role="button"
                                    onClick={() => editPerson(p)}
                                >edit</a>
                                <a
                                    className="btn btn-outline-danger"
                                    href="#"
                                    role="button"
                                    onClick={() => deletePersonById(p.id)}
                                >delete</a>
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default PersonList;
