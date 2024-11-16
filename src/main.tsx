import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "../src/store.tsx";
import { Toaster } from "react-hot-toast";
import "./css/global.css";
import WelcomePopup from "./components/popup.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster position="top-center" reverseOrder={false} />
    <WelcomePopup />
    <App />
  </Provider>
);
