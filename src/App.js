import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import AuthProvider from "./provider/AuthProvider";
import CartProvider from "./provider/CartProvider";
import routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Switch>
            {routes.map((route, index) => (
              <Route {...route} key={index} />
            ))}
          </Switch>
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
