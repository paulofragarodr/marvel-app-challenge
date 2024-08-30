import { Midia } from "./midia";
import { Thumbnail } from "./thumbnail";

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Midia;
  series: Midia;
  stories: Midia;
}
