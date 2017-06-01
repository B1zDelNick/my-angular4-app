import {Ingridient} from "../shared/ingridient.model";

export interface IRecipe
{
  name: string;
  description: string;
  imagePath: string;
  ingridients: Ingridient[];
}

export class Recipe implements IRecipe
{
  constructor(public name: string, public description: string, public imagePath: string, public ingridients: Ingridient[])
  {
  }
}
