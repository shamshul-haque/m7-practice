import PropsDrilling from "./components/PropsDrilling/PropsDrilling";
import AddRemove from "./components/addRemove/AddRemove";
import Item from "./components/cards/Item";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl">Welcome to card</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-12">
        <Item />
        <Item />
        <Item />
      </div>
      <AddRemove />
      <PropsDrilling />
    </>
  );
}

export default App;
