import { Provider } from "react-redux";
import TicTacToe from "./components/TicTacToe";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <TicTacToe />
    </Provider>
  );
}

export default App;
