import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SharedService {

    currentRoute = new Subject();
    controlRest = new Subject();

    constructor() { }

    setCurrentRoute(currentRoute: string) {
        this.currentRoute.next(currentRoute);
    }

    getCurrentRoute(): Observable<any> {
        return this.currentRoute.asObservable();
    }
    
    resetControl() {
        return this.controlRest.asObservable();
      }
    
}