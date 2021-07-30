module.exports = {
  apps : [{
    name: 'gateway',
    script: 'index.js',
    watch: '.'
  }, {
    name: 'DB',
    script: './service-worker/',
    watch: ['./service-worker']
  }
]
};
