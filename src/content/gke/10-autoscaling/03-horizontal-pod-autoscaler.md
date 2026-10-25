---
id: horizontal-pod-autoscaler
subject: gke
title: "Horizontal Pod Autoscaler"
description: "Learn horizontal pod autoscaler with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 1003
---
# Horizontal Pod Autoscaler

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Horizontal Pod Autoscaler.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Scaling has multiple control loops. HPA adjusts replica count from metrics; VPA can recommend or adjust resource requests; cluster autoscaling changes node capacity in Standard; Autopilot manages underlying compute based on workload requests. Quota, IP space, machine availability, and placement constraints can block scale-out.

## Decision points for Horizontal Pod Autoscaler

Scaling has multiple control loops. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Deploy a sample workload with realistic CPU requests and an HPA. Generate bounded load, observe metric availability and replica changes, then inspect whether new replicas become Ready or remain Pending due to capacity.

### Inspect and verify

```bash
kubectl get hpa,vpa -A
kubectl describe pod PENDING_POD
kubectl top pods -A
```

### Evidence to capture

For this lesson, save the output of `kubectl get hpa,vpa -A` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Do not assume more replicas improve throughput when a shared database, GPU, connection pool, or downstream API is already saturated.


## Security, reliability, and cost notes

- Verify the active target and permissions before making changes; keep the experiment reversible.
- Check the resource-specific cost, data-retention, and cleanup behavior before running the lab.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Horizontal Pod Autoscaler** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
