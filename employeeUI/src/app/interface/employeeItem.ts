export class employeeItem {
    userId:string;
    jobTitleName:string;
    firstName:string;
    lastName:string;
    preferredFullName:string;
    employeeCode:string;
    region:string;
    phoneNumber:string;
    emailAddress:string;

    //constructor() {}

    constructor(userId:string, jobTitleName:string,
        firstName:string, lastName:string, preferredFullName:string,
        employeeCode:string, region:string, phoneNumber:string, emailAddress:string) {
            
        this.userId = userId;
        this.jobTitleName = jobTitleName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.preferredFullName = preferredFullName;
        this.employeeCode = employeeCode;
        this.region = region;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }

}