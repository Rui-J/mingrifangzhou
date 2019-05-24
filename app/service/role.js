'use strict';

const Server = require('egg').Service;

class RoleServer extends Server {
  async create(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if (Array.isArray(element)) {
          data[key] = element.join(',');
        }
      }
    }
    return await this.ctx.model.Role.create(data);
  }
  async findAll() {
    const list = await this.ctx.model.Role.findAll();
    list.forEach(item => {
      for (const key in item.dataValues) {
        if (item.dataValues.hasOwnProperty(key)) {
          const element = item.dataValues[key];
          if (typeof element === 'string' && element.includes(',')) {
            item.dataValues[key] = item.dataValues[key].split(',');
          }
        }
      }
    });

    return list;
  }
}

module.exports = RoleServer;
