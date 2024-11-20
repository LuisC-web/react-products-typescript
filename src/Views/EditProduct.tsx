import {
  Link,
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
} from "react-router-dom";
import FormComponent from "../components/FormComponent";
import { getProductId } from "../services/ProductServices";
import { typeProductAPi } from "../types";
export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id) {
    const product = await getProductId(+params.id);
    if (!product) {
      return redirect("/");
    }
    return product;
  } else {
    return redirect("/");
  }
};
const EditProduct = () => {
  const product = useLoaderData() as typeProductAPi;
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl text-slate-500 font-black">Editar Producto</h2>
        <Link
          to="/"
          className="rounded-sm bg-indigo-600 p-3 text-white font-bold text-lg md:text-sm shadow-sm hover:bg-indigo-500 text-center"
        >
          Volver a productos
        </Link>
      </div>
      <FormComponent edit={true} product={product} />
    </>
  );
};

export default EditProduct;
