# OpenQuiz

OpenQuiz is an open-source, self-hosted live quiz platform for classrooms, meetups, and events. Hosts create quizzes and run games; players join from their phones with a room code and no account.

The project aims to make hosting a quiz simple, keep player access unrestricted, and work reliably on a local network without depending on external services.

## Project status

OpenQuiz is at the planning stage. The first release will focus on a complete, dependable live quiz loop before adding advanced question types or scaling features.

## MVP

- Create, edit, duplicate, and delete quizzes.
- Support multiple choice, true/false, and multi-select questions.
- Start a live game and let players join with a room code or link.
- Show synchronized lobby, question, answer, results, leaderboard, and final podium screens.
- Score correct answers with a speed bonus, calculated on the server.
- Let players reconnect after a temporary network interruption.
- Show a post-game report and export results as CSV.
- Run locally with Docker Compose and SQLite, with persistent data stored in a volume.

## Initial technical direction

- **Backend:** Go HTTP server with WebSocket support.
- **Frontend:** Svelte and TypeScript, built into static assets served by the backend.
- **Storage:** SQLite for the first release; keep persistence behind a small interface so PostgreSQL can be added when needed.
- **Game state:** In memory for active games, with quiz definitions and completed results persisted to SQLite.
- **Deployment:** One application container plus a persistent data directory. No Redis or external runtime services for a single instance.

These choices keep the first self-hosted setup small. The implementation should validate them against real usage before adding multi-instance or enterprise features.

## Milestones

1. **Foundation:** project layout, local development setup, health endpoint, SQLite migration, and Docker Compose.
2. **Quiz authoring:** quiz and question data model, validation, and basic editor.
3. **Live game:** room creation, player joining, host controls, WebSocket state updates, answer collection, and scoring.
4. **Results and resilience:** reconnect flow, final reports, CSV export, and end-to-end manual acceptance checklist.
5. **Self-hosting release:** backup guidance, configuration reference, security review, and first tagged release.

## Design principles

- Players should not need accounts.
- The server is authoritative for game state, deadlines, and scores.
- Never send correct-answer data to players before the reveal.
- Escape and validate player-provided names; apply rate limits to room joining.
- Bundle frontend assets so a LAN installation does not need a CDN.
- Keep deployment and backup instructions understandable to a non-specialist.

## Contributing

The project is being bootstrapped. Contributions, issue reports, and suggestions are welcome. Please open an issue before making a large change so the project can agree on its scope.

## License

The project license has not been selected yet. Choose a license before the first public release. AGPL-3.0 supports reciprocal sharing of network-hosted modifications; Apache-2.0 is a permissive alternative.
