# Rspack Module Federation Demo with Zephyr

This is a Module Federation demo using Rspack and Zephyr deployment, consisting of:

- `host`: The main application (port 8080)
- `remote`: A remote application providing a Counter component (port 8081)

## Getting Started

### Installation

```bash
# Install dependencies for both apps
cd host && pnpm install
cd ../remote && pnpm install
```

### Development

Start the remote app first:

```bash
cd remote && pnpm start
```

Then in a new terminal, start the host app:

```bash
cd host && pnpm start
```

Visit:

- Host app: http://localhost:8080
- Remote app: http://localhost:8081

## Building for Production

To build both applications:

```bash
cd remote && pnpm build
cd ../host && pnpm build
```

## Deployment

This project is configured for deployment with Zephyr Cloud. The build process will automatically trigger deployments when using the build command.
