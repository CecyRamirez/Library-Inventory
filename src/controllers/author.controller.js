import{getConnection} from "./../database/database"

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

export const methods={
    getAuthors
}