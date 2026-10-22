---
id: errors
subject: go
title: Functions and errors
description: Return values explicitly and make failure paths clear.
difficulty: Intermediate
order: 3
quiz:
  question: What should a caller usually do with a non-nil error returned by a function?
  options:
    - Ignore it
    - Handle or propagate it
    - Convert it silently to zero
  answer: 1
---
## Multiple return values

```go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}
```

Go commonly returns an error as a value. Callers should inspect it instead of ignoring it. Add context with `fmt.Errorf` and `%w` when wrapping an error.

## Practice challenge

Write a function that parses a value and returns an error when the input is invalid.
