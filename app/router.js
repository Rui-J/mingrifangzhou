'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;

  router.prefix('/api/v1');

  router.post('/role/create', controller.role.create);
  router.get('/role/findAll', controller.role.findAll);
  router.post('/role/destroy', controller.role.destroy);
  router.post('/role/update', controller.role.update);
  router.get('/', controller.home.index);
};
