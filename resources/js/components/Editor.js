import React from "react";
import ReactDOM from "react-dom";

function Editor({a, setA}) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Editor Component</div>

                        <div className="card-body">
                            {a}
                            <button onClick={() => setA(a+1)}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;
