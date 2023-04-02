//Dependencies
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="row max-w-4xl mx-auto mt-14 text-center px-8">
      <h1 className="font-bold mb-3 text-primary text-9xl" id="title-home">
        Apertura
        <br />
        2023
      </h1>

      <p className="text-2xl mb-3">
        Bienvenidos a la <span className="text-primary">primera liga de clubes de IML Tenis.</span>
        <br /> A continuación podes seleccionar la liga en la cual estas participando.
      </p>

      <Link to="/torneos/1" className="btn btn-outline btn-error btn-lg m-2 btn-category">
        Segunda Libre
      </Link>
      <Link to="/torneos/2" className="btn btn-outline btn-error btn-lg m-2 btn-category">
        Tercera Libre
      </Link>
      <Link to="/torneos/3" className="btn btn-outline btn-error btn-lg m-2 btn-category">
        Cuarta Libre
      </Link>
    </div>
  );
};

export default Welcome;
