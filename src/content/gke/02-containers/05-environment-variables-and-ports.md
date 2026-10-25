---
id: environment-variables-and-ports
subject: gke
title: "Environment Variables and Ports"
description: "Learn environment variables and ports with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 205
---
# Environment Variables and Ports

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Environment Variables and Ports.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Environment variables configure processes at runtime, while container ports describe listening endpoints and Kubernetes Service ports route traffic to Pods. Declaring EXPOSE in a Dockerfile is documentation; it does not publish a port by itself.

## Decision points for Environment Variables and Ports

Environment variables configure processes at runtime, while container ports describe listening endpoints and Kubernetes Service ports route traffic to Pods. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Build and run a disposable container that demonstrates **Environment Variables and Ports**. Inspect its configuration, process user, listening port, writable paths, and exit behavior; then recreate it to see which runtime state persists.

### Inspect and verify

```bash
docker run --rm -e APP_MODE=demo -p 8080:8080 IMAGE
```

### Evidence to capture

For this lesson, save the output of `docker run --rm -e APP_MODE=demo -p 8080:8080 IMAGE` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Do not bake credentials into images. Avoid assuming that a container listening on 127.0.0.1 is reachable from other Pods.


## Security, reliability, and cost notes

- Do not bake credentials into Dockerfile layers, build arguments, image labels, or logs.
- Scan images, pin trusted base images, and avoid running production containers as root without a documented reason.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Environment Variables and Ports** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://docs.docker.com/build/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
