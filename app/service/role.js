'use strict';

const Server = require('egg').Service;
let keyIsArray = ['acquisition', 'tag']

class RoleServer extends Server {
  async create(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if (element && keyIsArray.includes(key)) {
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
          if (element && keyIsArray.includes(key)) {
            item.dataValues[key] = element.split(',');
          }
        }
      }
    });
    return list;
  }

  async update(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if (element && keyIsArray.includes(key)) {
          data[key] = element.join(',');
        }
      }
    }
    const task = await this.ctx.model.Role.findByPk(data.id);
    return await task.update(data);
  }

  async destroy(data) {
    const task = await this.ctx.model.Role.findByPk(data.id);
    return await task.destroy();
  }
  
}

module.exports = RoleServer;