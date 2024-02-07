export const randomMnc = (): string => {
  return ranomNumber(100, 500).toString();
};

export const randomPrice = (): number => {
  return ranomNumber(3000, 30000);
};

export const randomUsage = (): number => {
  return ranomNumber(1000, 10000000);
};

const ranomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
