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

    useEffect(() => {
        getAllPersons((data) => {
            setPersons(data)
        });
    }, []);

    const getAllPersons = (callback) => {
        fetchData(URL, callback)
    }

    const deletePersonById = (id) => {
        fetchData(`${URL}/${id}`, () => {}, "DELETE");
        setPersons(persons.filter(p => p.id !== id));
    }

    const writeErrorMessage = (msg) =>{
        errorRef.current.innerText = msg;
        setTimeout( () => errorRef.current.innerText = "", 2000)
    }

    const addAndUpdatePerson = (person) => {

        if(person.gender === "") {
            writeErrorMessage("Please select a gender!")
            return false;
        }

        person.id && fetchData(`${URL}/${person.id}`, (person) => {setPersons(persons.map( p => p.id === person.id ? {...person} : p))}, "PUT", person);
        person.id || fetchData(URL, (data) => setPersons([...persons, data]), "POST", person);

        return true;
    }

    const editPerson = (person) => {
        setPersonEdit(person)
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

// const index = persons.findIndex( p => p.id === person.id)
// const array = [...persons]
// array[index] = person
// setPersons([...array])
