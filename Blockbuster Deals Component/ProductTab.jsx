import Product from "./Product.jsx";

function ProductTab() {
   let styles = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",

   };

   return (
      <div style={styles}>
         <Product title="Logitech Mx master" idx={0} />
         <Product title="Apple pencil (2nd Gen)" idx={1} />
         <Product title="Sony WH-1000XM4" idx={2} />
         <Product title="Fitbit Charge 5" idx={3} />
      </div>
   );
}

export default ProductTab;
