# Contributing

## About this repository

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [workspaces](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/react-wheel-picker.git
```

### Navigate to project directory

```bash
cd react-wheel-picker
```

### Create a new branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

### Run a workspace

You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.

#### Examples

Examples will be updated in detail soon.

## Documentation

The documentation for this project is located in the `web` workspace. You can run the documentation locally by running the following command:

```bash
pnpm --filter=web dev
```

Documentation is written using [MDX](https://mdxjs.com). You can find the documentation files in the `apps/web/src/content/docs` directory.
