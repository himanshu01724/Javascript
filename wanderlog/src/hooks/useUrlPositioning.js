import {useSearchParams} from 'react-router-dom'

export function useUrlPositioning() {

    const [searchParam, setSearchParam] = useSearchParams();
    const lat = searchParam.get('lat');
    const lng = searchParam.get('lng');
   
  return [lat, lng]
}
