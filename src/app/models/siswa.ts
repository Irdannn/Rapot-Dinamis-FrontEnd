export class Siswa{
    public id: number;
    public namalengkap: string;
    public unit : string;
    public kelas : string;
    public nisn : string;
    public jeniskelamin : string;
    public ttl : string;
    public userid: number;

    constructor(
        id:number,
        namalengkap:string,
        unit:string,
        kelas:string,
        nisn:string,
        jeniskelamin : string,
        ttl : string,
        userid: number,
    ){
        this.id = id;
        this.namalengkap = namalengkap;
        this.unit = unit;
        this.kelas = kelas;
        this.nisn = nisn;
        this.jeniskelamin = jeniskelamin;
        this.ttl = ttl;
        this.userid = userid;
    }
}