import './App.css';
import Footer from "./components/Footer";
import PizzaList from "./components/PizzaList";

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1 className="app-title">Welcome to My Pizza App</h1>
            </header>

            <main className="content">
                <PizzaList />
            </main>

            <Footer />
        </div>
    );
}

export default App;