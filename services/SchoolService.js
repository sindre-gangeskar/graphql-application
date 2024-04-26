class SchoolService {
    constructor(db) {
        this.client = db.sequelize;
        this.School = db.School;
    }

    async getAll() {
        return await this.School.findAll({ where: {} })
            .catch(error => { console.log(error) })
    }

    async get(id) {
        return await this.School.findOne({ where: { id: id } })
            .catch(error => { console.log(error) })
    }

    async delete(id) {
        return await this.School.destroy({ where: { id: id } })
            .catch(error => { console.log(error) });
    }

    async create(name, address, description) {
        return await this.School.create({
            Name: name,
            Address: address,
            Description: description
        }).catch(error => { console.log(error) });
    }
}

module.exports = SchoolService;