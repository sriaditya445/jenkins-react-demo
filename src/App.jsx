
import './App.css';

function App() {
  return (
    <div className="container">
     <h1>My React CI/CD Pipeline - Version 2</h1>

      <p>
        React + GitHub + Jenkins + Azure
      </p>

      <button
        onClick={() => alert('React application is working!')}
      >
        Test Application
      </button>
    </div>
  );
}

export default App;
