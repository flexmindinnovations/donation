export interface PickUpRequest {
    PickupID: number;
    Name: string;
    Address: string;
    MobileNo: string;
    PickupDateTime: Date;
    DonateType: string;
    PickupLocation: string;
    PickupEmployeeID: number;
    IsPicked: boolean;
    CreatedByID: number;
    DateCreated: Date;
    ModifiedByID: number;
    DateModified: Date;
  }