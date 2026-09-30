import {StudentDAO} from "./StudentDAO";

const studentDAO = new StudentDAO();

studentDAO.insert("682421024","อำพร",3.54);
studentDAO.insert("689423658","อาวุธ",2.13);
studentDAO.insert("685413677","วิชัย",3.89);
studentDAO.insert("689654783","สุชาติ",1.89);

const students = studentDAO.findALL();
let honor:string;
students.forEach(s => {
    if(s.isHonors() === true)honor = "เกียรนิยม";
    else honor = "";
    console.log(`${s.getStudentCode()} ${s.getFullName()} ${s.getGpa()} ${honor}`);
})