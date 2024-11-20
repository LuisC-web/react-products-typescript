export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
};

export const toBoolean = (value: string) => {
  return value.toLowerCase() === "true";
};
