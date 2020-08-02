export const ON_LOADING = "ON_LOADING";
export const OFF_LOADING = "OFF_LOADING";

export const onLoading = () => {
  return {
    type: ON_LOADING,
  };
};

export const offLoading = () => {
  return {
    type: OFF_LOADING,
  };
};

export type Action = ReturnType<typeof onLoading | typeof offLoading>;
