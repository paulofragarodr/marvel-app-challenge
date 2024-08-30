import { Character } from "./character";

export interface ResponseCharacters {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
}
