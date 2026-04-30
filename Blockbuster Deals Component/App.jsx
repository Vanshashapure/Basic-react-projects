import "./App.css";
import ProductTab from "./ProductTab.jsx";

let styles = {

   alignContent: "center",
   textAlign: "center",

}

function App() {
   return (
      <div style={styles}>
         <h3>Blockbuster Deals of the day</h3>
         <ProductTab />
      </div>
   );
}

export default App;
