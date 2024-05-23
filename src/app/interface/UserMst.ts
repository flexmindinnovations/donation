export interface UserMst {
    UserID: number;
    EmployeeID: number;
    UserName: string;
    EmailAddress: string;
    Password: string;
    RoleID: number;
    IsActive: boolean;
    IsLocked: boolean;
    CreatedByID: number;
    DateCreated: Date;
    ModifiedByID: number;
    DateModified: Date;
  }
  