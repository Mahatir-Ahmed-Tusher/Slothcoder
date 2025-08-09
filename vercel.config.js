module.exports = {
  // Specify the Node.js version
  nodeVersion: '18.18.0',
  
  // Configure build settings
  build: {
    env: {
      // Add any environment variables needed for the build
    }
  },
  
  // Configure runtime settings
  runtime: {
    // Increase memory limit for functions
    maxMemory: 1024,
    // Increase function timeout
    maxDuration: 10
  }
};