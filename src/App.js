import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Taskify</h1>
        <h2>Ajouter une nouvelle tâche</h2>
        <input type="text" placeholder="Nom de la tâche" />
        <button className="boutonAjouter">Ajouter</button>

        <ul className="listeTaches">
            <li><span>Finir le brief</span><button>Supprimer</button></li>
            <li><span>Finir le brief</span><button>Supprimer</button></li>
            <li><span>Finir le brief</span><button>Supprimer</button></li>
        </ul>

    </div>
  );
}

export default App;
