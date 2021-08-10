import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Título"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Escreva uma anotação"
          rows="3"
        />
        <button onClick={submitNote}>Adicionar</button>
      </form>
    </div>
  );
}

export default CreateArea;
