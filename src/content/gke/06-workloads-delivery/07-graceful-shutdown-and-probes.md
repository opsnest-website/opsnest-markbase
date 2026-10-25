---
id: graceful-shutdown-and-probes
subject: gke
title: "Graceful Shutdown and Probes"
description: "Learn graceful shutdown and probes with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 607
---
# Graceful Shutdown and Probes

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Graceful Shutdown and Probes.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

When a Pod terminates, Kubernetes signals the container and eventually kills it after the termination grace period. Applications should stop accepting new work, drain active requests, and exit before the deadline. Readiness should become false before or during drain so traffic is removed from service endpoints.

## Decision points for Graceful Shutdown and Probes

When a Pod terminates, Kubernetes signals the container and eventually kills it after the termination grace period. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Build a small deployment scenario for **Graceful Shutdown and Probes**. Define the rollout or runtime contract, deploy it to a test namespace, and verify the specific object status and application response. Include one abort condition and one recovery action.

### Inspect and verify

```bash
kubectl delete pod POD_NAME
kubectl describe pod POD_NAME
kubectl get endpointslices
```

### Evidence to capture

For this lesson, save the output of `kubectl delete pod POD_NAME` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

A preStop hook consumes part of the grace period. Avoid sleep-based shutdown logic that merely delays termination without draining work.


## Security, reliability, and cost notes

- Test rollouts against a disposable application and keep a known-good image available.
- Consider database/schema compatibility and request draining before promoting or rolling back.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Graceful Shutdown and Probes** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
