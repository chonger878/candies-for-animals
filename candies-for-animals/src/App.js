import './App.css';
import { Link } from "react-router-dom";

function Home() {
  const submit = (e) => {e.preventDefault();
    alert('Thank you for supporting our shelter animals!');
  };
  return (
  <div>
    <nav>
      <Link to='/returninguser'>Returning user?</Link>
      <Link to='/faqs'>FAQ</Link>
    </nav>
    <h1>Candies for Animals</h1>
    <p>First time user? Please weigh your candy and enter it in pounds</p>
    <form onSubmit={submit}>
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
  /** 
  return (
  <div className="App">
        <p>
          Candies 4 Animals!
        </p>
        <p>
          There's nothing more scarier than a pet waiting for a forever home
          in an overcrowded shelter. This halloween, turn your unwanted candy into hope for these animals.
      <form onSubmit={submit}>
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
  */
}

export function ReturningUser(){
  return( 
  <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/faqs'>FAQ</Link>
    </nav>
    <h1>Returning user login</h1>
  </div>);
  

}

export function FaQS(){
  return(   
  <div>
    <nav>
      <Link to='/returninguser'>Returning user?</Link>
      <Link to='/'>Home</Link>
    </nav>
    <h1>Frequently Asked Questions</h1>
    <p>1. Why do you do this?</p>
    <p> There's nothing more scarier than a pet waiting for a forever home
        in an overcrowded shelter. This halloween, turn your unwanted candy into hope for these animals.</p>
  </div>
  );

}

export function App() {
  return <Home />;
}
