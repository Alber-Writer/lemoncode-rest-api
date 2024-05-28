interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}
export interface LocationEntityVm extends ResourceBase {
  type: string
  dimension: string
  residents: string[]
}
