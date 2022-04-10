const {Sequelize}=require('sequelize')

const sequelize=new Sequelize(`ecomapi`,`root`,`965636@Leb`,{
    dialect:`mysql`,
    host:`localhost`
    
})

module.exports=sequelize;