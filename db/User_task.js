var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3ruzkc23",
    database: "gallery"
});


var Task_user = {
    getAllTask: function (callback) {
        console.log(con.query("SELECT * FROM user", callback));
        return con.query("SELECT * FROM user", callback);
    },
    addTask: function (Task_user, pas,callback) {
        return con.query("INSERT INTO user(name,password,password_clean) values(?,?,?)",
            [Task_user.name, Task_user.password,pas], callback);
    },
    findName: function (Task_user, callback) {
        return con.query("SELECT * FROM user WHERE name = ?", Task_user.name, callback);
    },
    /*  findName: function (Task_user, callback) {
         console.log(DB.find(DB.name===Task_user.name));
          return DB.find(DB.name===Task_user.name);
        return con.query("SELECT * FROM Users WHERE name = ?", Task_user.name, callback);
    },*///mock data
    deleteTask: function (Task_user, callback) {
        return con.query("Delete from user WHERE id=?", [Task_user.id], callback)
    },
    updateTask: function (Task_user, pas, callback) {
        return con.query("UPDATE Users SET password=?,_password=? WHERE id=?",
            [Task_user.password, pas, Task_user.id], callback);
    }
};
module.exports = Task_user;