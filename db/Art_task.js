var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3ruzkc23",
    database:"gallery"
});

var Task_art={
    getAllTask:function (callback) {
        console.log("***START getAllArt");
        return con.query("SELECT * FROM art",callback);
    },
    addTaskS:function (Task,callback) {
        return con.query("INSERT INTO art(art_name) values(?)",[Task.art_name],callback);

    },
    addTask:function (Task,callback) {
        return con.query("INSERT INTO art(art_name,artcol) values(?,?)",[Task.art_name,Task.artcol],callback);

    },
    deleteTask:function (Task,callback) {
        return con.query("Delete from art WHERE idArt=?",[Task.idArt],callback)
    },
    updateTask:function (Task,callback) {
        return con.query(
            "UPDATE art SET art_name = ?, artcol = ?  where idArt=?",
            [Task.art_name,Task.artcol,Task.idArt],callback);
    }

};




module.exports=Task_art;
