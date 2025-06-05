export const mfConfig = {
  name: 'host',
  exposes: {},
  remotes: {
    remote:
      process.env.NODE_ENV === 'development'
        ? 'remote@http://localhost:8081/remoteEntry.js'
        : 'remote@[remote]/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'tailwindcss'],
}
