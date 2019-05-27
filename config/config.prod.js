/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1557914264016_6008';

  // add your middleware config here
  // config.middleware = ['jwt'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'mingrifangzhou',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
