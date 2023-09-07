import Actor from "./Actor";
import "./App.css";
import Singer from "./Singer";
import Todo from "./Todo";

function App() {
  const actors = ["jayed", "bappi", "saimon"];
  const singers = [
    { id: "1", name: "Dr. Mahfuj", age: 45 },
    { id: "2", name: "Hero Alom", age: 35 },
    { id: "3", name: "Jayed Khan", age: 25 },
  ];

  return (
    <>
      <Person />
      <Developer name="Sujat" batch={8} />
      <Developer name="Sujat" />
      <Device brand="Laptop" price="5000" />
      <Todo task="React" isDone={true} />
      <Todo isDone={false} />
      <Actor name="Bapparaj" />
      {actors.map((actor) => (
        <Actor name={actor} key={actor} />
      ))}
      {singers.map((singer) => (
        <Singer singer={singer} key={singer.id} />
      ))}
    </>
  );
}

function Person() {
  const age = 26;
  const university = "SEU";
  return (
    <>
      <h2>I am a person with age: {age}</h2>
      <h3 className="student">I am a student of: {university}</h3>
    </>
  );
}

function Developer({ name, batch = 0 }) {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid green",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h3>I am: {name}</h3>
      <h4>Batch: {batch}</h4>
    </div>
  );
}

function Device(props) {
  return (
    <div>
      {props.brand}'s price is {props.price}
    </div>
  );
}

export default App;
