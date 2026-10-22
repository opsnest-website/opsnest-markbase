---
id: collections
subject: python
title: Collections and comprehensions
description: Use lists, tuples, dictionaries, sets and comprehensions.
difficulty: Beginner
order: 2
quiz:
  question: Which collection is designed for key/value lookup?
  options:
    - Dictionary
    - Tuple
    - String
  answer: 0
---
## Choose a collection

```python
services = ["api", "worker", "web"]
ports = {"api": 8080, "web": 3000}
active = {name: True for name in services}

print(ports.get("api"))
print([name.upper() for name in services])
```

Lists are ordered and mutable; tuples are immutable sequences; dictionaries map keys to values; sets contain unique elements. Choose based on the operations and invariants you need.

## Practice challenge

Build a list of names and use a comprehension to keep only names longer than four characters.
