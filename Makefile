.PHONY: dev build check clean

dev:
	go run ./cmd/openquiz

build:
	cd web && npm install && npm run build
	mkdir -p bin
	go build -o bin/openquiz ./cmd/openquiz

check:
	go vet ./...
	cd web && npm install && npm run check

clean:
	rm -rf bin web/node_modules internal/web/dist/assets
