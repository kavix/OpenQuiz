# OpenQuiz

OpenQuiz is an open-source, self-hosted live quiz platform for classrooms, meetups, and events. Hosts create quizzes and run games; players join from their phones with a room code and no account.

The project is in its early foundation stage. The current app is a runnable Go and Svelte shell with a health endpoint. Live quiz features are being built in the open through the linked GitHub issues.

## What we're building

- Quiz authoring for multiple choice, true/false, and multi-select questions.
- Live games with a room code, synchronized host and player screens, and no player accounts.
- Server-side deadlines and scoring, with correct answers kept private until reveal.
- Reconnection after temporary network interruptions.
- Post-game reports and CSV exports.
- Straightforward self-hosting, starting with Docker Compose and SQLite.
- A local-network friendly app with no required external CDN.

## Tech stack

- **Backend:** Go HTTP server.
- **Frontend:** Svelte and TypeScript, served as embedded static assets.
- **Current foundation:** Go 1.26+, Node.js 24 LTS+, and npm.
- **Deployment:** Single application process for the initial setup. Database and Docker support are tracked in follow-up issues.

## Run locally

Requirements: Go 1.26 or newer and Node.js 24 LTS or newer.

Build the frontend and backend, then start the server:

```sh
make build
./bin/openquiz
```

Open [http://localhost:8080](http://localhost:8080). The server port defaults to `8080`; set the `PORT` environment variable to change it. The health endpoint is [http://localhost:8080/healthz](http://localhost:8080/healthz).

For frontend development, start the Go server in one terminal, then run:

```sh
cd web
npm install
npm run dev
```

Vite serves the frontend on port 5173 and proxies `/healthz` to the Go server.

## Project layout

- `cmd/openquiz`: application entry point.
- `internal/web`: HTTP handlers and embedded frontend assets.
- `web`: Svelte application and Vite configuration.
- `.github/workflows/ci.yml`: automated checks for pushes and pull requests.

## Contributing

Bug reports, feature ideas, and pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community expectations. Please use GitHub's private vulnerability reporting for security issues; see [SECURITY.md](SECURITY.md).

## License

OpenQuiz is licensed under the [MIT License](LICENSE).
