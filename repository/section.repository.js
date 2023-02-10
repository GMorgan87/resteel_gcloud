const { connect } = require('../config/db.config');
const logger = require('../logger/logger');


class SectionRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getSections() {
        try {
            const sections = await this.db.sections.findAll();
            console.log('sections:::', sections);
            return sections;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getSectionByTitle() {
        try {
            const sections = await this.db.sections.findOne({
                where: {
                    title: section.title
                }
            });
            console.log('sections:::', sections);
            return sections;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createSection(section) {
        let data = {};
        try {
            // section.createdate = new Date().toISOString();
            data = await this.db.sections.create(section);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateSection(section) {
        let data = {};
        try {
            section.updateddate = new Date().toISOString();
            data = await this.db.sections.update({...section}, {
                where: {
                    id: section.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteSection(sectionId) {
        let data = {};
        try {
            data = await this.db.sections.destroy({
                where: {
                    id: sectionId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new SectionRepository();