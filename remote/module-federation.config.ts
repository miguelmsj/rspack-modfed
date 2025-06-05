export const mfConfig = {
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Counter': './src/components/Counter',
  },
  shared: ['react', 'react-dom', 'tailwindcss'],
}
