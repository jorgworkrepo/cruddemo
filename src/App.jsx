import React, {useEffect, useState, useRef} from "react";
import PersonForm from "./components/PersonForm.jsx";
import PersonList from "./components/PersonList.jsx";
import {fetchData} from "./modules/utils.mjs";

function App() {
    let initialize = {id: "", age: "", name: "", email: "", gender: ""};
    const [personToEdit, setPersonEdit] = useState(initialize);
    const [persons, setPersons] = useState([]);

    const errorRef = useRef();

    const URL = "http://localhost:3456/api";

    const getAllPersons = (callback) => {
        //fetchData()
    }

    const deletePersonById = (id) => {

    }

    const writeErrorMessage = (msg) =>{
        errorRef.current.innerText = msg;
        setTimeout( () => errorRef.current.innerText = "", 2000)
    }

    const addAndUpdatePerson = (person) => {
        //fetchData()
    }

    const editPerson = (person) => {

    }

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-8">
                    <h3>CRUD DEMO</h3>
                    <PersonList
                        persons={persons}
                        deletePersonById={deletePersonById}
                        editPerson={editPerson}
                    />
                </div>
                <div className="col-md-4">
                    <h3>Add Persons</h3>
                    <PersonForm
                        personToEdit={personToEdit}
                        initialize={initialize}
                        addAndUpdatePerson={addAndUpdatePerson}
                        errorRef={errorRef}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
