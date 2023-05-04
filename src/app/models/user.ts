export class Users{
    public id: number;
    public username: string;
    public nama_lengkap : string;
    public role : string;
    public email : string;
    public password : string;

    constructor(
        id:number,
        username:string,
        nama_lengkap:string,
        role:string,
        email:string,
        password:string
    ){
        this.id = id;
        this.username = username;
        this.nama_lengkap = nama_lengkap;
        this.role = role;
        this.email = email;
        this.password = password;
    }
}