module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('groups_tags',{
        group_no:{
            type:DataTypes.INT,
            allowNull:false,            
        },
        tag_no:{
            type:DataTypes.INT,
            allowNull:false,            
        },
        created_at:{
            type:DataTypes.TIMESTAMP,
            allowNull:false,            
        },
    })
}