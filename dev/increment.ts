export function increment(num: number): number {
  return num + 1;
}

export type Decrement = (n: number) => number;
export const decrement: Decrement = (n) => n - 1;

const foo: object = { a: 1, b: 2, c: 3 };
for (const key of Object.keys(foo)) {
  console.log(key, foo[key]);
}

type Delay = (ms: number) => Promise<void>;
const delay: Delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function asyncSample(): Promise<number> {
  return 1;
}

const awaitSample = async (): Promise<void> => {
  await delay(1000);
  const result = await asyncSample();
  console.log(result);
};

delay(1000).then(async () => {
  console.log("delay done");

  await awaitSample();
});
