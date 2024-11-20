import { Link } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const NewProducts = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl text-slate-500 font-black">
          Registrar producto
        </h2>
        <Link
          to="/"
          className="rounded-sm bg-indigo-600 p-3 text-white font-bold text-lg md:text-sm shadow-sm hover:bg-indigo-500 text-center"
        >
          Volver a productos
        </Link>
      </div>
      <FormComponent edit={false} />
    </>
  );
};

export default NewProducts;
