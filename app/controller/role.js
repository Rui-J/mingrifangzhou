'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async create() {
    this.ctx.body = await this.ctx.service.role.create(this.ctx.request.body);
  }
  async findAll() {
    this.ctx.body = await this.ctx.service.role.findAll();
  }
  async destroy() {
    this.ctx.body = await this.ctx.service.role.destroy(this.ctx.request.body);
  }
  async update() {
    this.ctx.body = await this.ctx.service.role.update(this.ctx.request.body);
  }

}

module.exports = RoleController;
