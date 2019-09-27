import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [blah, setBlah] = React.useState('blah');
  // const [count, setCount] = React.useState(0);

  const thingBasedOnWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    console.log(blah);
    window.addEventListener('resize', thingBasedOnWindowSize);
    return () => window.removeEventListener('resize', thingBasedOnWindowSize);
  }, []);

  // const increment = () => setCount((count) => count + 1);
  // const decrement = () => setCount((count) => count - 1);

  return (
    <div className="App">
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      {/* <h1>Count: {count}</h1> */}
      {/* <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
