import logo from './logo.svg';
import './App.css';
import HeaderWrapper from './components/HeaderWrapper.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import  { Breakpoint, BreakpointProvider } from 'react-socks';


function App() {
  return (
    <BreakpointProvider>
      <div className="App">
        <HeaderWrapper />
        <Main />
        <Footer />
      </div>
    </BreakpointProvider>
  );
}

export default App;
