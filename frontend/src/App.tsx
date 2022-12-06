import './App.css';
import { AppMain } from './AppStyle';
import Header from './components/Header';
import RoutesPages from './router';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css";
import Providers from './Provider';
function App() {
  return (
    <AppMain>
      <Providers>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <Header/>
      <RoutesPages/>
      </Providers>
    </AppMain>
  );
}

export default App;
