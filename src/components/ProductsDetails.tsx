import { redirect, useNavigate } from "react-router-dom";
import { typeProductAPi } from "../types";
import { formatCurrency } from "../utils/utils";
import { deleteProductId, patchProductId } from "../services/ProductServices";

type ProductsDetailsType = {
  product: typeProductAPi;
};
const ProductsDetails = ({ product }: ProductsDetailsType) => {
  const navigate = useNavigate();
  const isAVailabe = product.availabity;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">{product.units}</td>
      <td className="p-3 text-lg text-gray-800 ">
        <button
          className={`
            
            ${
              isAVailabe
                ? "bg-green-600 hover:bg-green-500"
                : "bg-red-600            hover:bg-red-500"
            }
             w-full text-full rounded-lg uppercase p-2 font-bold text-sm text-white text-center `}
          onClick={async () => {
            if (
              confirm("¿Quieres cambiar la disponibilidad de este producto?")
            ) {
              await patchProductId(product.id);
              window.location.reload();
            }
          }}
        >
          {isAVailabe ? "Disponible" : "No disponible"}
        </button>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2">
          <button
            onClick={() =>
              navigate(`/productos/${product.id}/editar`, { state: product })
            }
            className="bg-indigo-600 w-full text-full rounded-lg uppercase p-2 font-bold text-sm text-white text-center hover:bg-indigo-500"
          >
            Editar
          </button>
          <button
            className="bg-red-600 w-full text-full rounded-lg uppercase p-2 font-bold text-sm text-white text-center hover:bg-red-500"
            onClick={async () => {
              if (confirm("¿Quieres eliminar este producto?")) {
                await deleteProductId(product.id);
                window.location.reload();
              }
            }}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductsDetails;
