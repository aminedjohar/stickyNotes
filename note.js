import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
/* 01/01/2023 */
export default function Note() {

    const [note, setNote] = useState([])

    const addnote = (e) => {
        e.preventDefault();
        setNote([...note, { id: note.length, element: <textarea key={note.length} cols="30" rows="10" style={{ marginTop: "15px", backgroundColor: "#ececec" }} /> }])
    }

    const deletenote = (id) => {
        setNote(note.filter(note => note.id !== id))
    }

    return (
        <div>
            <h3 className="text-warning"><strong>Sticky Notes</strong></h3>
            <p className="text-secondary pb-3"> <i>Keep track of your tasks, achieve your goals!</i> </p>
            <input type="button" value="New Note" className="btn btn-success mb-3" onClick={addnote} />
            <form>
                <div className="">
                    {
                        note.map(note => (
                            <span key={note.id}>
                                {note.element}
                                <button onClick={() => deletenote(note.id)} className="btn btn-danger">Delete</button>
                            </span>
                        ))
                    }
                </div>
            </form>
        </div>
    )
}








/*

{
     note ?
     <form className="">
         <textarea name="ticket" id="" cols="30" rows="10"></textarea>
     </form> : null
}
function Note() {
  const [showTextArea, setShowTextArea] = useState(false);

  const handleClick = () => {
    setShowTextArea(true);
  }

  return (
    <div>
      <button onClick={handleClick}>New Note</button>
      { showTextArea ? <textarea /> : null }
    </div>
  );
}*/