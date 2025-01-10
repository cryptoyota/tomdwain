# @tomdwain/plugin-stake

A plugin for Stake integration, providing automated play stake games.

## Installation

```bash
npm install @tomdwain/plugin-stake
```

## Configuration

The plugin requires the following environment variables:

```env
STAKE_COOKIE=your_cookie
STAKE_TOKEN=your_token
```

## Usage

Import and register the plugin in your Eliza configuration:

```typescript
import { stakePlugin } from "@tomdwain/plugin-stake";

export default {
  plugins: [stakePlugin],
  // ... other configuration
};
```

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm run test
```

### Development Mode

```bash
npm run dev
```

## Dependencies

- `@elizaos/core`: Core Eliza functionality
- `tsup`: Build tool
- Other standard dependencies listed in package.json
