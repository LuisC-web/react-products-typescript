import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import DispayError from "./DispayError";
import { addProduct, putProductId } from "../services/ProductServices";
import { typeProduct, typeProductAPi } from "../types";
const availabilityOptions = [
  { name: "Disponible", value: true },
  { name: "No Disponible", value: false },
];

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  if (error.length) {
    return error;
  }

  if (params.id) {
    await putProductId(data, +params.id);
  } else {
    await addProduct(data);
  }
  return redirect("/");
};
type FormComponentProps = {
  edit: boolean;
  product?: typeProductAPi;
};
const FormComponent = ({ edit, product }: FormComponentProps) => {
  const error = useActionData() as string;

  return (
    <Form className="mt-10" method="POST">
      {error && <DispayError>{error}</DispayError>}
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Nombre Producto:
        </label>
        <input
          id="nameform"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Producto"
          name="name"
          defaultValue={edit ? product?.name : ""}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Precio:
        </label>
        <input
          id="price"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Precio Producto. ej. 200, 300"
          name="price"
          defaultValue={edit ? product?.price : ""}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="units">
          Unidades:
        </label>
        <input
          id="units"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Unidades de producto. ej. 200,0,2, 300"
          name="units"
          defaultValue={edit ? product?.units : ""}
        />
      </div>
      {edit && (
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="availability">
            Disponibilidad:
          </label>
          <select
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="availability"
            defaultValue={product?.availabity.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <input
        type="submit"
        className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
        value={edit ? "Editar Producto" : "Registrar Producto"}
      />
    </Form>
  );
};

export default FormComponent;
