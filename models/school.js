module.exports = (sequelize, Sequelize) => {
    const School = sequelize.define('School', {
        Name: Sequelize.STRING,
        Address: Sequelize.STRING,
        Description: Sequelize.STRING
    }, { timestamps: false });

    School.associate = function (models) {
        School.hasMany(models.Student);
        School.hasMany(models.Teacher)
    }
    return School;
}