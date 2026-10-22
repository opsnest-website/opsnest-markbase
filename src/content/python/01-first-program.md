---
id: first-program
subject: python
title: Your first Python program
description: Run Python, use print and understand script entry points.
difficulty: Beginner
order: 1
quiz:
  question: What does the __name__ == "__main__" guard help control?
  options:
    - Whether the file's main block runs when executed directly
    - The Python version
    - Whether variables are immutable
  answer: 0
---
## Start with a script

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

if __name__ == "__main__":
    print(greet("world"))
```

Save as `hello.py` and run `python3 hello.py`. The entry-point guard allows a file to be imported without running its main script behavior.

## Practice challenge

Change the greeting to accept a name from a command-line argument.
