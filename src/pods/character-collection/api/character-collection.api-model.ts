import {Character, Info} from "common/interfaces/rick-and-morty.api.types"

export interface CharacterEntityApi extends Character{}

export interface CharacterPagination extends Info<CharacterEntityApi>{}

export interface CharacterApiResponse{
  info:CharacterPagination
  results:CharacterEntityApi[]
}
