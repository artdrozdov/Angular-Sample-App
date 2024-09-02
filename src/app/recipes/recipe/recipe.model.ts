import { Ingredient } from "src/app/shared/ingredient";

export class Recipe {
    public name:string;
    public description:string;
    public imageUrl:string;
    public ingredients: Ingredient[];

    constructor(name:string, desc:string, imgUrl:string, ings: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imageUrl = imgUrl;
        this.ingredients = ings;
    }
}