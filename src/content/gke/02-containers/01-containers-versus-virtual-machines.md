---
id: containers-versus-virtual-machines
subject: gke
title: "Containers Versus Virtual Machines"
description: "Learn containers versus virtual machines with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 201
---
# Containers Versus Virtual Machines

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Containers Versus Virtual Machines.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

A VM virtualizes a machine and typically runs its own guest OS kernel. A container packages a process and its filesystem dependencies while sharing the host kernel through OS-level isolation. Containers are lighter to start, but they are not simply miniature VMs.

## Decision points for Containers Versus Virtual Machines

A VM virtualizes a machine and typically runs its own guest OS kernel. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Build and run a disposable container that demonstrates **Containers Versus Virtual Machines**. Inspect its configuration, process user, listening port, writable paths, and exit behavior; then recreate it to see which runtime state persists.

### Inspect and verify

```bash
docker run --rm hello-world
docker image ls
```

### Evidence to capture

For this lesson, save the output of `docker run --rm hello-world` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Do not rely on a container as a security boundary equivalent to a dedicated VM for hostile workloads without additional isolation.


## Security, reliability, and cost notes

- Do not bake credentials into Dockerfile layers, build arguments, image labels, or logs.
- Scan images, pin trusted base images, and avoid running production containers as root without a documented reason.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Containers Versus Virtual Machines** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://docs.docker.com/build/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
