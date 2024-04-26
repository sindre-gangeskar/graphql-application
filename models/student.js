module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('Student', {
        FirstName: Sequelize.STRING,
        LastName: Sequelize.STRING
    }, { timestamps: false });

    Student.associate = function (models) {
        Student.belongsTo(models.School);
    }
    return Student;
}