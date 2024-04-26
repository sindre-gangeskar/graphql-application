class StudentService {
    constructor(db) {
        this.client = db.sequelize;
        this.Student = db.Student;
    }

    async get(id) {
        return await this.Student.findOne({
            where: { id: id }
        })
            .catch(function (err) {
                console.log(err);
            });
    };
    async getAll() {
        return await this.Student.findAll({ where: {} });
    }
    async create(FirstName, LastName, SchoolId) {
        return await this.Student.create({
            FirstName: FirstName,
            LastName: LastName,
            SchoolId: SchoolId
        }).catch(error => {
            console.log(error)
        });
    }
    async delete(id) {
        return await this.Student.destroy({ where: { id: id } })
            .catch(error => {
                console.log(error);
        })
    }
    async deleteNull() {
        return await this.Student.destroy({ where: { FirstName: null } })
        .catch(error => {console.log(error)})
    }
}
module.exports = StudentService;