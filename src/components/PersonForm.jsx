import React, {useState, useEffect} from "react";


export default function PersonForm({addAndUpdatePerson, personToEdit, initialize, errorRef}) {

    const [person, setPerson] = useState({...personToEdit});

    useEffect( () => {
        setPerson(personToEdit)
    },[personToEdit])

    const handleChange = (evt) => {
        const value = evt.target.value;
        const name = evt.target.id;
        setPerson({...person, [name]: value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addAndUpdatePerson(person);
        setPerson(initialize)
    }

    return (
        <div>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="control-label col-sm-3">Id:</label>
                    <div className="col-sm-9">
                        <input
                            className="form-control"
                            readOnly id="id"
                            value={person.id}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="name">
                        Name:
                    </label>
                    <div className="col-sm-9">
                        <input
                            required
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            value={person.name}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="age">
                        Age:
                    </label>
                    <div className="col-sm-9">
                        <input
                            required
                            type="number"
                            className="form-control"
                            id="age"
                            placeholder="Enter age"
                            onChange={handleChange}
                            value={person.age}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="email">
                        Email:
                    </label>
                    <div className="col-sm-9">
                        <input
                            required
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            value={person.email}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="pwd">
                        Gender:
                    </label>
                    <div className="col-sm-9">
                        <select
                            className="form-select"
                            aria-label="gender selection"
                            id="gender"
                            onChange={handleChange}
                            value={person.gender}
                        >
                            <option defaultChecked>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-9">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{marginTop: 10}}
                        >
                            Submit
                        </button>
                        <button
                            style={{marginLeft: 5, marginTop: 10}}
                            type="button"
                            className="btn btn-dark"
                            onClick={ () => setPerson(initialize)}
                        >
                            Cancel
                        </button>
                    </div>
                    <p style={{color: "red"}} ref={errorRef}></p>
                </div>
            </form>
        </div>
    );
}
