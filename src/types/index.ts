import { array, boolean, InferOutput, number, object, string } from "valibot";

export const SchemaProduct = object({
  name: string(),
  price: number(),
  units: number(),
});
export const SchemaProductApi = object({
  id: number(),
  name: string(),
  price: number(),
  units: number(),
  availabity: boolean(),
});
export const SchemaProductsApi = array(SchemaProductApi);
export type typeProduct = InferOutput<typeof SchemaProduct>;
export type typeProductAPi = InferOutput<typeof SchemaProductApi>;
export type typeProductsAPi = InferOutput<typeof SchemaProductsApi>;
