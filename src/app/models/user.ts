export class Users{
    public id: number;
    public name: string;
    public role : string;
    public email : string;
    public password : string;

    constructor(
        id:number,
        name:string,
        role:string,
        email:string,
        password:string
    ){
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
        this.password = password;
    }
}