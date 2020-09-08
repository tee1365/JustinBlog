const typeGuard = <T, K extends keyof T>(
  obj: T,
  ...props: K[]
): obj is T & Required<Pick<T, K>> => {
  return props.every((k) => typeof obj[k] !== "undefined");
};

export default typeGuard;
