class TeacherService {
    constructor(db) {
        this.client = db.sequelize;
        this.Teacher = db.Teacher;
    }
    async get(id) {
        return await this.Teacher.findOne({ where: { id: id } })
            .catch(error => { console.log(error) });
    }
    async getAll() {
        return await this.Teacher.findAll({ where: {} })
            .catch(error => { console.log(error) });
    }
    async create(FirstName, LastName, SchoolId) {
        return await this.Teacher.create({
            FirstName: FirstName,
            LastName: LastName,
            SchoolId: SchoolId
        }).catch(error => {
            console.log(error)
        });
    }
    async delete(id) {
        return await this.Teacher.destroy({ where: { id: id } })
            .catch(error => { console.log(error) });
    }
}

module.exports = TeacherService;