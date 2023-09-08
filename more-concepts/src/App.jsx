import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  const handleClick = () => {
    alert("button clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>event handle</h3>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert("button 1 clicked")}>Click 1</button>
      <button onClick={() => addToFive(3)}>Click 2</button>
      <Counter />
      <Team />
      <Users />
      <Friends />
    </>
  );
}

export default App;
