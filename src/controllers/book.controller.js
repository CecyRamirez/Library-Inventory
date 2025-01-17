import{getConnection} from "./../database/database"

const getBooks = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id,title,genre,author_id FROM books")
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const methods={
    getBooks
}