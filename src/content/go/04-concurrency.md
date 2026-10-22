---
id: concurrency
subject: go
title: Concurrency and context
description: Use goroutines, channels, cancellation and synchronization safely.
difficulty: Advanced
order: 4
quiz:
  question: What can happen if a goroutine blocks forever on a channel send that no one receives?
  options:
    - It may leak and never finish
    - Go automatically retries then exits cleanly
    - The channel always drops the value
  answer: 0
---
## Start concurrent work

```go
done := make(chan string)
go func() {
    done <- "finished"
}()
message := <-done
fmt.Println(message)
```

A goroutine runs concurrently. Channels communicate values between goroutines. Production code should also consider cancellation, blocked sends, shared-memory races, bounded worker pools and shutdown behavior.

> Concurrency is not automatically faster. Bound parallel work and propagate `context.Context` through operations that may need cancellation.

## Practice challenge

Sketch a worker pool with a fixed number of workers and a cancellation path.
