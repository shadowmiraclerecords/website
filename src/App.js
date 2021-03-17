import logo from './smr.png';
import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      items: {}
    };
    this.updateTheTotal = this.updateTheTotal.bind(this)
  }

  updateTheTotal() {
    this.setState({total: this.state.total + 50})
  }

  render() {
    const {
      updateTheTotal
    } = this;
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form name="input" method="POST" action="https://formspree.io/f/xvovedjb">
          Subscribe(: <input type="email" name="_replyto" placeholder="email">
          </input>
          <input type="submit" value="Send"></input>
        </form>
        <div className="container">
          <img src={logo} alt="CDS" width="100" height="100"></img>
          <br></br>
          <button onClick={updateTheTotal}>
            Add This To The Cart
          </button>
          <br></br>
          <button>
            Go To Checkout ${this.state.total}
          </button>
        </div>
      </header>
    </div>
    );
  }
}

// class App extends PureComponent {
//   state = {
//     products: {},
//     total: 0,
//     product: {
//       name: "iPadCase",
//       id: "ipad-case",
//       path: "/shop/ipad-case/",
//       properties: {
//         color: [
//           "red",
//           "green",
//           {
//             additionalCost: {
//               GBP: 1,
//               EUR: 2,
//               USD: 3
//             },
//             value: "blue"
//           }
//         ]
//       },
//       propertiesToShowInCart: ["color"],
//       prices: { GBP: 70, EUR: 82, USD: 100 },
//       currency: "USD",
//       imageSrc: "smr.png"
//     },
//     getProductLocalization: getDefaultLocalization("product", "en", {
//       ...iPadCaseLocalization,
//       ...iPadPropertiesWithAdditionalCostLocalization
//     }),
//     getCheckoutButtonLocalization: getDefaultLocalization(
//       "checkoutButton",
//       "en",
//       iPadCaseLocalization
//     ),
//     getCartLocalization: getDefaultLocalization(
//       "cart",
//       "en",
//       iPadCaseLocalization
//     )
//   };

//   addProduct = (key, product, currency) =>
//     void this.setState(
//       ({
//         products: { [key]: cartProduct = { quantity: 0 }, ...restOfProducts }
//       }) => ({
//         products: {
//           ...restOfProducts,
//           [key]: {
//             ...product,
//             quantity: product.quantity + cartProduct.quantity
//           }
//         }
//       })
//     );

//   updateTheTotal = (price) =>
//   void this.setState(
//     this.state.total = this.state.total + price
//   )

//   generateProductKey = (id, properties) =>
//     `${id}/${Object.entries(properties).join("_")}`;

//   updateProduct = (key, updatedProduct) => void console.log(":)");

//   removeProduct = key => void console.log(":C");

//   render() {
//     const {
//       addProduct,
//       generateProductKey,
//       updateProduct,
//       removeProduct,
//       updateTheTotal,
//       state
//     } = this;

//     const {
//       getProductLocalization,
//       getCheckoutButtonLocalization,
//       getCartLocalization,
//       products,
//       product
//     } = state;

//     const checkoutButtonElement = (
//       <CheckoutButtonComponent
//         grandTotal={500}
//         hidden={false}
//         checkoutURL="/to/my/checkout"
//         currency="GBP"
//         getLocalization={getCheckoutButtonLocalization}
//       />
//     );
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <form name="input" method="POST" action="https://formspree.io/f/xvovedjb">
//           Subscribe(:: <input type="email" name="_replyto" placeholder="email">
//           </input>
//           <input type="submit" value="Send"></input>
//         </form>
//         <div className="container">
//         <ProductComponent
//           {...product}
//           checkoutButton={checkoutButtonElement}
//           onAddProduct={
//             addProduct,
//             updateTheTotal
//             // Help product to get into the cart
//           }
//           generateProductKey={
//             generateProductKey
//             // create product key as you wish
//           }
//           getLocalization={getProductLocalization}
//         />

//         <CartComponent
//           products={
//             products
//             // Provide your own product's Object(Look at Products)
//           }
//           onUpdateProduct={
//             updateProduct
//             // Update something
//           }
//           getLocalization={getCartLocalization}
//           currency="GBP"
//           onRemoveProduct={
//             removeProduct
//             // Remove something
//           }
//           checkoutButton={checkoutButtonElement}
//           isCartEmpty={false}
//           getLocalization={getCartLocalization}
//         />
//       </div>
//       </header>
//     </div>
//     );
//   }
// }

export default App;
