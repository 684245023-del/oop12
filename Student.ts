export class Student{
    constructor(private id:number,private studentCode:string,private fullName:string,private gpa:number){}
    public getId ():number{return this.id};
    public getStudentCode():string{return this.studentCode};
    public getFullName():string{return this.fullName};
    public getGpa():number{return this.gpa};
    public getInfo():string{
        return `Student: ${this.id} ${this.studentCode} ${this.fullName} ${this.gpa}`;
    }
    public isHonors():boolean{
        if(this.gpa >= 3.5)return true;
        else return false;
    }
}