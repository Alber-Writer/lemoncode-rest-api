interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}
export interface LocationEntityVm extends Pick<ResourceBase, 'id' | 'name'> {
  type: string
  dimension: string
}
