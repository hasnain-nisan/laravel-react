import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';

function Example({props}) {

    const [a, setA] = useState(8)

    console.log(props);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <Editor a={a} setA={setA}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    // const props = Object.assign(
    //     {},
    //     document.getElementById("app").getAttribute("data-ts")
    // );
    const props = document.getElementById("app").dataset.ts
    ReactDOM.render(<Example {...props} />, document.getElementById('app'));
}
