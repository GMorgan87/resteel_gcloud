const sectionService  = require('../service/section.service');
const logger = require('../logger/logger');

class SectionController {

    async getSections() {
        logger.info('Controller: getSections')
        return await sectionService.getSections();
    }

    async getSectionByTitle(title) {
        logger.info('Controller: getSectionByTitle', title)
        return await sectionService.getSectionByTitle(title);
    }

    async createSection(section) {
        logger.info('Controller: createSection', section);
        return await sectionService.createSection(section);
    }

    async updateSection(section) {
        logger.info('Controller: updateSection', section);
        return await sectionService.updateSection(section);
    }

    async deleteSection(sectionId) {
        logger.info('Controller: deleteSection', sectionId);
        return await sectionService.deleteSection(sectionId);
    }
}
module.exports = new SectionController();