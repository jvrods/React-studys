import React from "react";

const App = () => {
    return (
           <div className="container">
               <div className="valid-keys">
                   <span className="matched"></span>
                   <span className="remainder"></span>
               </div>
            <div className="typer-keys"></div>
            <div className="completed-words">
                <ol>
                    <li>cidade</li>
                    <li>carro</li>
                </ol>
            </div>
           </div>
        );
};

export default App;