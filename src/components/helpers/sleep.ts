export const sleep = (seconds: number = 1) => {
  return new Promise((res) => {
    setTimeout(res, seconds * 1000);
  });
};
