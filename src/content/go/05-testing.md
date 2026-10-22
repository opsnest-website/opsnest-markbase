---
id: testing
subject: go
title: Testing and tooling
description: Format, test, benchmark and inspect Go programs.
difficulty: Intermediate
order: 5
quiz:
  question: Which command runs tests in all packages under the current module?
  options:
    - go run ./...
    - go test ./...
    - go fmt test
  answer: 1
---
## Essential commands

```bash
gofmt -w .
go test ./...
go test -race ./...
go test -cover ./...
go vet ./...
```

Formatting is part of the normal Go workflow. Table-driven tests help cover cases consistently. The race detector finds certain data races during execution; it is not a proof that a program is race-free.

## Practice challenge

Write table-driven tests for valid input, empty input and invalid input.
