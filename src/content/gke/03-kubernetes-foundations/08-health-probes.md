---
id: health-probes
subject: gke
title: "Health Probes"
description: "Learn health probes with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 308
---
# Health Probes

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Health Probes.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Startup probes protect slow-starting applications from premature liveness failures. Readiness probes decide whether a Pod should receive traffic. Liveness probes restart a container after repeated failures. Probe thresholds and timeouts should reflect the application’s actual startup and failure characteristics.

## Decision points for Health Probes

Startup probes protect slow-starting applications from premature liveness failures. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Configure startup, readiness, and liveness probes with different purposes. Make readiness fail without crashing the process and verify the Pod is removed from ready endpoints while its container remains running.

### Inspect and verify

```bash
kubectl describe pod POD_NAME
kubectl get pods -w
kubectl get endpointslices
```

### Evidence to capture

For this lesson, save the output of `kubectl describe pod POD_NAME` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Avoid making liveness depend on every external dependency; a database outage should not necessarily restart every application replica.


## Security, reliability, and cost notes

- Avoid exposing workloads publicly during basic object labs; use a ClusterIP or port-forward unless external access is the lesson.
- Inspect selectors and namespace before applying or deleting manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Health Probes** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
