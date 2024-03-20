module.exports = {
  apps: [
    {
      name: 'elevator',
      script: 'yarn',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};