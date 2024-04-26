module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define('Teacher', {
        FirstName: { type: Sequelize.STRING },
        LastName: { type: Sequelize.STRING },
    }, { timestamps: false });

    Teacher.associate = function (models) {
        Teacher.belongsTo(models.School);
    }

    return Teacher;
}