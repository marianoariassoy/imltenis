import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>IML Tenis</title>
      </Helmet>

      <div className="row flex flex-col items-center justify-center mb-8 h-full">
        <h1 className="text-4xl mb-3">🥲</h1>
        <h1 className="text-xl font-semibold mb-1 text-primary text-center">No se encontró la página que estas buscando.</h1>
      </div>
    </>
  );
};

export default PageNotFound;
