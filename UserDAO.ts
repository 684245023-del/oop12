import {BaseDAO} from "./BaseDAO";
import {User} from "./User";

export class UserDAO extends BaseDAO{
    protected initTable():void{
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL
            )
        `)
    }
    public insert(name:string,email:string):boolean{
        const stmt = this.db.prepare(`INSERT INTO user
            (name,email) VALUES (?,?)`);
            const result = stmt.run(name,email);
            return result.changes> 0;
    }
    public findALL():User[]{
        const stmt = this.db.prepare(`SELECT * FROM user`);
        const rows  =stmt.all() as {id:number,name:string,email:string}[];
        return rows .map(row => new User(row.id,row.name,row.email))
    }
}