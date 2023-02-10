const sectionRepository  = require('../repository/section.repository');

class SectionService {

    constructor() {}

    async getSections() {
        return await sectionRepository.getSections();
    }

    async getSectionByTitle(title) {
        return await sectionRepository.getSectionByTitle(title);
    }

    async createSection(section) {
        return await sectionRepository.createSection(section);
    }

    async updateSection(section) {
        return await sectionRepository.updateSection(section);
    }

    async deleteSection(sectionId) {
        return await sectionRepository.deleteSection(sectionId);
    }

}

module.exports = new SectionService();