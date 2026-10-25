---
id: kubernetes-architecture
subject: gke
title: "Kubernetes Architecture"
description: "Learn kubernetes architecture with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 301
---
# Kubernetes Architecture

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Kubernetes Architecture.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Kubernetes separates the control plane from worker nodes. The API server validates and stores desired state; controllers reconcile resources; the scheduler assigns unscheduled Pods to nodes; kubelets on nodes run containers. GKE manages much of the control plane operation.

## Decision points for Kubernetes Architecture

Kubernetes separates the control plane from worker nodes. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Create or inspect a minimal Kubernetes object that demonstrates **Kubernetes Architecture**. Follow its lifecycle through the API object, controller status, events, and resulting Pod state; write down the evidence at each stage.

### Inspect and verify

```bash
kubectl get componentstatuses 2>/dev/null || true
kubectl get nodes
kubectl get pods -A
```

### Evidence to capture

For this lesson, save the output of `kubectl get componentstatuses 2>/dev/null || true` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

A Pod being accepted by the API server does not mean it was scheduled or that its container became ready.


## Security, reliability, and cost notes

- Avoid exposing workloads publicly during basic object labs; use a ClusterIP or port-forward unless external access is the lesson.
- Inspect selectors and namespace before applying or deleting manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Kubernetes Architecture** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
