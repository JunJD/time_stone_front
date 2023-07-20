export default async (
  query: string,
  requestInit: RequestInit,
  ...args: any[]
) => {
  console.log(args, 'args');
  return fetch(`https://memosapi.dingjunjie.com/${query}`, requestInit).then(
    (res) => res.json(),
  );
};
