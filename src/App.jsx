import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="dog" breed="Golden" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
