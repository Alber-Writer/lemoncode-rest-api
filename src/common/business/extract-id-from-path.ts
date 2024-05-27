
export const extractIDFromPath = (path: string) => {
  const exp = new RegExp(path + '/(d{1,3})??(.*)$');
  return function (url: string) {
    const match = url.match(exp) ? url.match(exp)[2] : undefined;
    return match;
  };
};
