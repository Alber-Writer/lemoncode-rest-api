interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}
export interface Location extends ResourceBase {
  type: string
  dimension: string
  residents: string[]
}

export const createEmptyLocation = (): Location => ({
  id: 0,
  name: '',
  url: '',
  created: '',
  dimension: '',
  residents: [],
  type: ''
});
