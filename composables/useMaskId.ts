const id = ref(0);

export const useMaskId = () => {
  return ref(id.value++);
};
