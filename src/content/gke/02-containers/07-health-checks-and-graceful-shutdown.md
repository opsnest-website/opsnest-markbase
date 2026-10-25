---
id: health-checks-and-graceful-shutdown
subject: gke
title: "Health Checks and Graceful Shutdown"
description: "Learn health checks and graceful shutdown with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 207
---
# Health Checks and Graceful Shutdown

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Health Checks and Graceful Shutdown.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

A health check should test a meaningful property of the service. Kubernetes separates startup, liveness, and readiness probes: startup gives slow applications time to initialize, liveness detects stuck processes, and readiness controls traffic eligibility. SIGTERM handling lets applications stop accepting new work and finish in-flight requests.

## Decision points for Health Checks and Graceful Shutdown

A health check should test a meaningful property of the service. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Run a sample service with a readiness endpoint and SIGTERM handling. Send a request while stopping the container and record whether in-flight work drains before the process exits.

### Inspect and verify

```bash
kubectl describe pod POD_NAME
kubectl get endpointslices
```

### Evidence to capture

For this lesson, save the output of `kubectl describe pod POD_NAME` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

A liveness probe that depends on a transient downstream service can restart healthy processes during an outage and amplify the incident.


## Security, reliability, and cost notes

- Do not bake credentials into Dockerfile layers, build arguments, image labels, or logs.
- Scan images, pin trusted base images, and avoid running production containers as root without a documented reason.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Health Checks and Graceful Shutdown** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://docs.docker.com/build/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
