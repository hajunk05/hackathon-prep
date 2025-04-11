const Note = ({note})=>{
    return (
        <div style={{border: "1px solid black", padding: "5px", margin: "3px"}}>
            Title: {note.title} <br/>
            Body: {note.body}
        </div>
    )
}
export default Note