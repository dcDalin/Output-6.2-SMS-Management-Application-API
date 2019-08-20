const config = {
  production: {
    APP_PORT: '4000',
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: 'mongodb://sms-user:Password123!@ds211368.mlab.com:11368/heroku_xpsfx4sz',
    PLAYGROUND: true,
  },
  development: {
    APP_PORT: '4000',
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: 'mongodb://localhost/phone',
    PLAYGROUND: true,
  },
  default: {
    APP_PORT: '4000',
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: 'mongodb://localhost/phone',
    PLAYGROUND: true,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
