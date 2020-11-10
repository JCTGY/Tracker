import React from 'react';
import Tracker from './components/Tracker';

const App = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Checker / Tracker</h1>
                    <p className="lead">Click to change Tracker number (count)</p>
                </div>
            </div>
            <Tracker />
        </div>
    );
}

export default App;










// import React, {useState} from 'react';

// const App = () => {
//     const [counter, setCounter] = useState(0);


//     return (
//         <div>
//             <p>My Counter: {counter}</p>
//             <button onClick={() => setCounter(counter + 1)}>
//                 Add
//             </button>
//             <button onClick={() => {setCounter(counter - 1)}}>
//                 Subtract
//             </button>
//             <button onClick={() => setCounter(0)}>
//                 Reset
//             </button>
//         </div>
//     );
// }

// export default App;