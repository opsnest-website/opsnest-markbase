---
id: files-exceptions
subject: python
title: Files, JSON and exceptions
description: Read and write files safely and handle failures explicitly.
difficulty: Intermediate
quiz:
  question: What is the benefit of catching a specific exception?
  options:
    - It makes all errors disappear
    - It avoids masking unrelated failures
    - It disables tracebacks
  answer: 1
---
## Use explicit error handling

```python
import json
from pathlib import Path

config_path = Path("config.json")
try:
    config = json.loads(config_path.read_text())
except FileNotFoundError:
    config = {"environment": "dev"}
except json.JSONDecodeError as exc:
    raise ValueError("Invalid JSON config") from exc
```

`Path` makes path operations clearer. Context managers clean up resources reliably. Catch specific exceptions when you can recover; do not hide failures with broad empty handlers.

## Practice challenge

Read a JSON configuration file and report a useful message if its content is invalid.
