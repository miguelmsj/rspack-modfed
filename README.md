# Module Federation with Rspack and Zephyr

This project demonstrates a Module Federation setup using Rspack and deployed with Zephyr. It consists of two applications:

- A host application that consumes a remote component
- A remote application that exposes a Counter component

## Live Demos

- Host App: https://miguel-san-juan-96-host-rspack-modfed-miguelmsj-c2e271b78-ze.zephyrcloud.app
- Remote App: https://miguel-san-juan-95-remote-rspack-modfed-miguelmsj-93ccf85aa-ze.zephyrcloud.app

## Project Structure

```
rspack-modfed/
├── host/                 # Host application
│   ├── src/             # Source files
│   ├── rspack.config.ts # Rspack configuration
│   └── package.json     # Dependencies and scripts
└── remote/              # Remote application
    ├── src/             # Source files
    │   └── components/  # Shared components
    ├── rspack.config.ts # Rspack configuration
    └── package.json     # Dependencies and scripts
```

## Key Features

- **Module Federation**: Shares a Counter component from remote to host
- **Rspack**: Uses Rspack for faster builds and better performance
- **Tailwind CSS**: Implements styling with Tailwind CSS v4
- **Environment Handling**: Proper configuration for both development and production
- **Zephyr Deployment**: Automated deployment with proper URL resolution

## Technical Implementation

### Module Federation Setup

The remote app exposes the Counter component:

```typescript
// remote/module-federation.config.ts
export const mfConfig = {
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Counter': './src/components/Counter',
  },
  shared: ['react', 'react-dom', 'tailwindcss'],
}
```

The host app consumes the remote component:

```typescript
// host/module-federation.config.ts
export const mfConfig = {
  name: 'host',
  remotes: {
    remote:
      process.env.NODE_ENV === 'development'
        ? 'remote@http://localhost:8081/remoteEntry.js'
        : 'remote@[remote]/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'tailwindcss'],
}
```

### Styling Solution

Component styles are bundled with the component using a dedicated CSS file:

```css
/* remote/src/components/Counter.css */
@import 'tailwindcss';

.counter-container {
  @apply p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto;
}
// ... more styles
```

This ensures styles are properly shared when the component is federated.

## Local Development

1. Install dependencies:

```bash
cd host && pnpm install
cd ../remote && pnpm install
```

2. Start the remote app:

```bash
cd remote && pnpm start
```

3. Start the host app:

```bash
cd host && pnpm start
```

The apps will be available at:

- Host: http://localhost:8080
- Remote: http://localhost:8081

## Deployment

Both applications are configured for automatic deployment with Zephyr:

1. Build and deploy remote app:

```bash
cd remote && pnpm build
```

2. Build and deploy host app:

```bash
cd host && pnpm build
```

The Zephyr plugin handles URL resolution automatically in production.

## Key Learnings

1. **Module Federation Configuration**

   - Proper setup of exposed and consumed modules
   - Sharing dependencies between applications
   - Environment-specific configurations

2. **Styling in Module Federation**

   - Component-scoped CSS files
   - Proper bundling of styles with components
   - Tailwind CSS integration

3. **Zephyr Deployment**
   - Automatic URL resolution
   - Dependency management between apps
   - Production vs development configurations

## Technologies Used

- React 19
- Rspack
- Module Federation
- Tailwind CSS v4
- TypeScript
- Zephyr Cloud
