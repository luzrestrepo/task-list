import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

const data = [
  { id: 1, description: "Trabajar ", complete: false },
  { id: 2, description: "Lavar el carro", complete: true },
  { id: 3, description: "leer algo de interes", complete: true },
];

function App() {
  return (
    <div className="container">
      <Header />
      <TaskList tasks={data} />
    </div>
  );
}

export default App;
