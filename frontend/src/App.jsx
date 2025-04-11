import {useEffect, useState} from "react";
import Note from "./Note.jsx";
import axios from "axios";

const App = () => {


    const [notes, setNotes] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:8080/hello")
            .then(res => {
                setNotes(res.data)
            })
    }, [])

    return (
        <>
            <h1>List of notes</h1>
            {notes.map(note => <Note note={note} />)}
        </>
    )
}



export default App
