'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async create() {
    this.ctx.body = await this.ctx.service.role.create(this.ctx.request.body);
  }
  async findAll() {
    this.ctx.body = await this.ctx.service.role.findAll();
  }
}

module.exports = RoleController;
