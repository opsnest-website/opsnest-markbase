---
id: requests-limits-and-qos
subject: gke
title: "Requests Limits and QoS"
description: "Learn requests limits and qos with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 307
---
# Requests Limits and QoS

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Requests Limits and QoS.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Requests influence scheduling and are used by resource managers; limits constrain consumption for supported resources. CPU limits can throttle; exceeding a memory limit commonly leads to OOM termination. Pod QoS class depends on container resource requests and limits.

## Decision points for Requests Limits and QoS

Requests influence scheduling and are used by resource managers; limits constrain consumption for supported resources. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Create or inspect a minimal Kubernetes object that demonstrates **Requests Limits and QoS**. Follow its lifecycle through the API object, controller status, events, and resulting Pod state; write down the evidence at each stage.

### Inspect and verify

```bash
kubectl describe pod POD_NAME
kubectl top pod POD_NAME --containers
```

### Evidence to capture

For this lesson, save the output of `kubectl describe pod POD_NAME` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Understated requests cause overpacking; overly high requests waste capacity and can block scheduling. CPU and memory behave differently under pressure.


## Security, reliability, and cost notes

- Avoid exposing workloads publicly during basic object labs; use a ClusterIP or port-forward unless external access is the lesson.
- Inspect selectors and namespace before applying or deleting manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Requests Limits and QoS** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
