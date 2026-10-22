---
id: variables
subject: go
title: Variables and types
description: Learn declarations, zero values, conversions and basic types.
difficulty: Beginner
order: 2
quiz:
  question: Which operator is commonly used for short variable declaration inside a function?
  options:
    - ==
    - :=
    - =>
  answer: 1
---
## Declare values

```go
name := "Mukul"
var retries int = 3
const appName = "worker"

fmt.Println(name, retries, appName)
```

`:=` declares and infers a local variable. Use `var` when you need an explicit declaration or want to declare before assignment. Constants represent compile-time values.

## Zero values

Uninitialized variables receive useful zero values: numeric types start at zero, booleans at `false`, strings at an empty string, and pointer-like types at `nil`.

## Practice challenge

Declare a string, integer and boolean; print their values before assigning anything.
