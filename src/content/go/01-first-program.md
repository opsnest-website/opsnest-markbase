---
id: first-program
subject: go
title: Your first Go program
description: Set up the toolchain and understand packages, main and fmt.
difficulty: Beginner
order: 1
quiz:
  question: What does package main signal in an executable Go program?
  options:
    - It defines an executable program
    - It installs the Go compiler
    - It declares a test suite
  answer: 0
---
## What is Go?

Go is a compiled, statically typed language with built-in support for concurrency and a focused standard library. It is commonly used for services, infrastructure tools and command-line applications.

## Your first program

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
```

Save as `main.go`, then run `go run main.go`. The `main` package builds an executable; `main()` is its entry point.

## Practice challenge

Run the program, change the message, then run it again. Explain what `package main`, `import`, and `func main()` each do.
