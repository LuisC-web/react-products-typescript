import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/ProductServices";
import { typeProductsAPi } from "../types";
import ProductsDetails from "../components/ProductsDetails";
export async function loader() {
  const products = await getProducts();
  return products;
}
const Products = () => {
  const products: typeProductsAPi = useLoaderData() as [];

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl text-slate-500 font-black">Productos</h2>
        <Link
          to="productos/nuevo"
          className="rounded-sm bg-indigo-600 p-3 text-white font-bold text-sm shadow-sm hover:bg-indigo-500"
        >
          Agregar productos
        </Link>
      </div>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Unidades</th>
              <th className="p-2">Disponibilidad</th>

              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              <>
                {products.map((product) => (
                  <ProductsDetails
                    key={product.id}
                    product={product}
                  ></ProductsDetails>
                ))}
              </>
            ) : (
              <tr className="text-center text-bold text-xl mt-5 ">
                <td colSpan={100}>No hay productos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
