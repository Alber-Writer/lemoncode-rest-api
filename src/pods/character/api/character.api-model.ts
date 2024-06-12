import {Character as ImportedCharacterType} from 'common/interfaces/rick-and-morty.api.types'
export interface Character extends ImportedCharacterType{
}
export interface CharacterEntityApi extends Character {
  bestSentences:string[]
}
