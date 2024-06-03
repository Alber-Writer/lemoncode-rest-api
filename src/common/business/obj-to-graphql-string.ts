export const plainObjToGraphqlString = <O extends Object>(obj: O) => Object.entries(obj)
  .reduce((acc, [key, value]) => [...acc, `${key}:"${value}"`], [])
  .join(',');
