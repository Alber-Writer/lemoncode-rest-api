interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}
export interface CharactersLookUp{
  id:string;
  image:string;
  name:string;
  status:string;
  species: string;
}
export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: CharactersLookUp[];
}



export const createEmptyEpisode = (): Episode => ({
  id: 0,
  name: '',
  url: '',
  created: '',
  air_date: '',
  episode: '',
  characters: [{
    id:'',
    image:'',
    name:'',
    status:'',
    species:'',
  }],
});
