import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import InputTextComponent from './components/inputText/InputTextComponent';
import DisplayComponent from './components/displayText/DisplayTextComponent';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <InputTextComponent />
        <DisplayComponent />
      </div>
    </Provider>
  );
}

export default App;
