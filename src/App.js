import './App.css';
import {useState} from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const ajouterTache = () => {
        if (text.trim() !== '') { // vérifie que le champ est pas vide
            setTodos([...todos, text]); // ajouter la tâche à la suite des autres
            setText(''); // vider le champ (en principe 😔)
        }
    }

    const supprimerTache = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="App">
                <h1>Taskify</h1>
                <h2>Ajouter une nouvelle tâche</h2>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Nom de la tâche"
                    type="text"
                />
                <button
                    className="boutonAjouter"
                    onClick={ajouterTache}>Ajouter</button>

                <hr />

                <ul className="listeTaches">
                    {todos.map((tache, id) => (
                        <li key={id}>
                            {tache}
                            <button onClick={() => supprimerTache(id)}>Supprimer</button>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
