export interface DailyWeight {
    weightID: number;
    date: Date;
    truckNumber: string;
    driverID: number;
    arrivelTime: Date;
    zoneLocation: number;
    weight: number;
    truckWeight: number;
    otherWeight: number;
    finalWeight: number;
    numberOfBox: number;
    createdByID: number;
    dateCreated: Date;
    modifiedByID: number;
    dateModified: Date;
}
