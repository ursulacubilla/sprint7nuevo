import { Link } from "react-router-dom";

function Links() {
    return(
        <div>
             <h1>Bienvenidos</h1>
                <hr />
                <Link to="/">Bienvenidos</Link>
                <hr />
                <Link to="App">Aplicación</Link>
                <hr />
        </div>
    );
}
export default Links;