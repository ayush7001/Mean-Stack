/**
 * User Model Class 
 */
export class User{
    constructor(
        public id:number,
        public email:string,
        public name:string,
        public gender:string,
        public surname:string,
        public password:string){}   
}