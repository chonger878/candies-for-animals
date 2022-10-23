import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          Candies 4 Animals!
        </p>
        <p>
          There's nothing more scarier than a pet waiting for a forever home
          might never welcome them...and an overcrowded shelter. 
          This halloween, turn your unwanted candy into hope for these animals.
        </p>
        <p>First time user?</p>
      <form>
      <input
        type="text"
        placeholder="Enter username"
      />
      <br />
      <input 
        type="text"
        placeholder="Enter name"
      />
      <br />
      <input
        type="text"
        placeholder="Amount of candy"
      />
      <br />
      <button>SUBMIT</button>
    </form>
    </div>
  );
}

export default App;
