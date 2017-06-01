export interface IIngridient
{
  name: string;
  amount: number;
}

export class Ingridient implements IIngridient
{
  constructor(public name: string, public amount: number)
  {

  }
}
