const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conexion = require('../database/db' );
const {promisify} = require('util');

//PROCEDIMIENTO PARA REGISTRARNOS
exports.register = async (req, res) => {
    const name = req.body.name;
    const user = req.body.user;
    const pass = req.body.pass;
    let passHash = await bcryptjs.hash(pass, 8)
    conexion.query('INSERT INTO login SET ?', {user:user, name:name, pass:passHash}, (error, results)=>{
        if (error) {
            console.log(error);
            res.redirect('/')
        }
    })
}
