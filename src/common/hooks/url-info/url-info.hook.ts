import { useLocation } from "react-router-dom";

export const useURLInfo = ()=>{
  const path = useLocation();

  const getSearchQueryParam = (
    path: string | string[][] | Record<string, string> | URLSearchParams,
    param: string
  ) => {
    const url = new URLSearchParams(path);
    return url.get(param);
  };

  const getPageParam = getSearchQueryParam(path.search, 'page');
  const urlSearchPageNum = getPageParam ? parseInt(getPageParam) : 1;

  return{
    path,
    urlSearchPageNum,
    getSearchQueryParam
  }
}
