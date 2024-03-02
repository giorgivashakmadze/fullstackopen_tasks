import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the new name already exists in the phonebook
    if (persons.some(person => person.name === newName)) {
      // Issue a warning if the name already exists
      alert(`${newName} is already added to the phonebook`);
    } else {
      // Create a new person object with the entered name
      const newPerson = { name: newName };

      // Update the persons state with the new person
      setPersons([...persons, newPerson]);

      // Clear the input field
      setNewName("");
    }
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
