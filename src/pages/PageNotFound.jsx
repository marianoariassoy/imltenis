import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>IML Tenis</title>
      </Helmet>

      <div className="row text-center mb-8">
        <h1 className="text-2xl font-bold text-error mb-1">404</h1>
        <h1 className="text-2xl font-bold mb-1">Página no encontrada</h1>
      </div>
    </>
  );
};

export default PageNotFound;
