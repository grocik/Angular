import { Route } from "./travel-route.model";

export class Travel {

    routes: Route[] = [];

    constructor(
        public day: number){
    }

    addNewRoute(newRoute: Route){
        this.routes.push(newRoute);
    }


    getDay(){
        return this.day;
    }
}