---
id: environments
subject: python
title: Modules and virtual environments
description: Organize code and isolate project dependencies.
difficulty: Intermediate
order: 3
quiz:
  question: Why use a virtual environment for a project?
  options:
    - To isolate project dependencies
    - To compile Python code to Go
    - To remove the standard library
  answer: 0
---
## Create an isolated environment

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install requests
python -m pip freeze > requirements.txt
```

A virtual environment separates project dependencies from the system Python. Pin and review dependencies appropriately for reproducible deployments; installation commands vary by project policy.

## Practice challenge

Create a virtual environment and document the commands needed to recreate it.
