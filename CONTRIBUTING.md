# Contributing to OpenQuiz

Thanks for helping make OpenQuiz useful and easy to self-host.

## Before you start

- Search existing issues to see whether the work is already planned or underway.
- For a large feature or an architectural change, open an issue first so we can agree on its scope.
- Focused bug fixes, documentation improvements, and small usability changes are welcome.

## Development setup

Requirements: Go 1.26 or newer, Node.js 24 LTS or newer, and npm.

```sh
git clone https://github.com/kavix/OpenQuiz.git
cd OpenQuiz
make build
./bin/openquiz
```

The application listens on port 8080 by default. Set `PORT` to choose another port. Visit `http://localhost:8080`; check `http://localhost:8080/healthz` for the health endpoint.

For frontend development, run the Go server in one terminal and the Vite server in another:

```sh
cd web
npm install
npm run dev
```

Vite runs on port 5173 and proxies `/healthz` to the Go server.

## Changes

- Keep pull requests focused and explain the user-facing reason for the change.
- Update documentation when behavior or configuration changes.
- Do not include secrets, private data, or generated build output.
- Run `make check` before opening a pull request when your environment allows it.
- Include screenshots or a short description for visible UI changes.

## Pull requests

Describe the problem, the change, and how you checked it. Link any related issue. A maintainer may request changes before merging.
