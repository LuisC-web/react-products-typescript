import { safeParse } from "valibot";
import {
  SchemaProduct,
  SchemaProductApi,
  SchemaProductsApi,
  typeProductAPi,
} from "../types";
import axios from "axios";
import { toBoolean } from "../utils/utils";

export type addProductType = { [k: string]: FormDataEntryValue };

export async function addProduct(data: addProductType) {
  try {
    const newData = {
      name: data.name,
      price: +data.price,
      units: +data.units,
    };
    const validacion = safeParse(SchemaProduct, newData);

    if (validacion.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(url, validacion.output);
    } else {
      throw new Error("Datos no validos");
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios(url);

    const validation = safeParse(SchemaProductsApi, data.data);
    if (validation.success) {
      return validation.output;
    } else {
      throw new Error("Datos no validos");
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getProductId(id: typeProductAPi["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios(url);

    const validation = safeParse(SchemaProductApi, data.data);

    if (validation.success) {
      return validation.output;
    } else {
      throw new Error("Datos no validos");
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
export async function putProductId(
  data: addProductType,
  id: typeProductAPi["id"]
) {
  try {
    console.log(data);

    const newData = {
      id: id,
      name: data.name,
      price: +data.price,
      units: +data.units,
      availabity: toBoolean(data.availability as string),
    };

    const validation = safeParse(SchemaProductApi, newData);

    if (validation.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
      await axios.put(url, validation.output);
    } else {
      throw new Error("Datos no validos");
    }
  } catch (error) {
    console.log(error);
  }
}
export async function patchProductId(id: typeProductAPi["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.patch(url);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProductId(id: typeProductAPi["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.delete(url);
  } catch (error) {
    console.log(error);
  }
}
