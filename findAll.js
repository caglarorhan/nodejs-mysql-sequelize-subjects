const Sequelize = require("sequelize");
const sequelize = new Sequelize('nodejs','root','Wew8WRBCnolRwsaE',{
    host: 'localhost',
    dialect: 'mysql'

})

const User = sequelize.define('user', {
    user_name: Sequelize.STRING,
    user_password: Sequelize.STRING,
    user_dob: Sequelize.DATE,
    user_city: Sequelize.STRING
})

sequelize.sync().then(()=>{
    console.log('connected to db. Succeed');
    //User.findAll({}).then( (rows)=>{},()=>{} ) // bu yapida kullanilabilir, burada birinci fonksyion resolve(onfulfilled) ikincisi reject(onreject) icindir
    //User.findAll({}).then().catch(); // bu yapi da kullanilabilir

    User.findAll({
        attributes: ['user_name', 'user_city'],
        order: [['user_name','DESC']],
        raw: true
    }).then( (rows)=>{
        console.log(rows)
    },(err)=>{} )


})
