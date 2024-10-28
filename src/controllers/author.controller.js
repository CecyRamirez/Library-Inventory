import{getConnection} from "./../database/database"

//get the authors
const getAuthors = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id,name,bio FROM authors")
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const addAuthors = async (req,res)=>{
    try {
        console.log(req.body)
        const{name,bio}=req.body;
        const author={name,bio};
        const connection = await getConnection();
        const result=await connection.query("INSERT INTO authors SET ?", author);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getAuthors,
    addAuthors
}