---
id: deployments-and-replicasets
subject: gke
title: "Deployments and ReplicaSets"
description: "Learn deployments and replicasets with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 303
---
# Deployments and ReplicaSets

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Deployments and ReplicaSets.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

A Deployment manages a desired Pod template and coordinates rollouts. It creates or manages ReplicaSets, which maintain the requested replica count. Editing the Pod template creates a new rollout; changing an unrelated field may not.

## Decision points for Deployments and ReplicaSets

A Deployment manages a desired Pod template and coordinates rollouts. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Apply a Deployment with two replicas, update only its Pod template image, watch the new ReplicaSet appear, and inspect rollout history. Trigger a rollback in the lab and verify the restored template and ready endpoints.

### Inspect and verify

```bash
kubectl rollout status deployment/APP
kubectl rollout history deployment/APP
kubectl rollout undo deployment/APP
```

### Evidence to capture

For this lesson, save the output of `kubectl rollout status deployment/APP` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

A rollout can stall because new Pods cannot schedule, fail readiness, or cannot pull the image. Check ReplicaSets and events before forcing a rollback.


## Security, reliability, and cost notes

- Avoid exposing workloads publicly during basic object labs; use a ClusterIP or port-forward unless external access is the lesson.
- Inspect selectors and namespace before applying or deleting manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Deployments and ReplicaSets** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
