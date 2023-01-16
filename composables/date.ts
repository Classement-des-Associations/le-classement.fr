export const useDate = (value: string) => {
  const checkValue = /^\d{4}-\d{2}-\d{2}(T.*)?$/g;

  const isValueValid = checkValue.test(value);

  if (!isValueValid) throw new Error("Invalid date format");

  return ref(new Date(value));
};

export const useDateToISOString = (value: string) => {
  const date = useDate(value);

  return ref(date.value.toISOString());
};

export const useDateToLocaleDateString = (
  value: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
) => {
  const date = useDate(value);

  return ref(date.value.toLocaleDateString("fr-FR", options));
};
