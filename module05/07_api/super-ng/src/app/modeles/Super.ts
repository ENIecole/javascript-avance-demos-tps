import {Images} from "./Images";
import {Powerstats} from "./Powerstats";
import {Biography} from "./Biography";

export interface Super {
  id: number;
  name: string;
  images: Images;
  powerstats: Powerstats;
  biography: Biography;
}
