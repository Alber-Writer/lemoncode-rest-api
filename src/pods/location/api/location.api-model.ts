import {Location as ImportedLocationType} from 'common/interfaces/rick-and-morty.api.types'

interface Residents{
  id:string,
  image:string,
  name:string,
  status:string,
  species:string
}

export interface Location extends Omit<ImportedLocationType, 'residents'>{
  residents: Residents[]
}
