---
id: cpu-and-memory-requests-and-limits
subject: gke
title: "CPU and Memory Requests and Limits"
description: "Learn cpu and memory requests and limits with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 1001
---
# CPU and Memory Requests and Limits

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of CPU and Memory Requests and Limits.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

CPU and Memory Requests and Limits concerns cpu and memory requests and limits. In the context of capacity and workload scaling, the important design question is what state or behavior this feature controls, which component owns that behavior, and what evidence demonstrates that it is working. Autoscaling depends on resource requests, observed metrics, replica limits, quota, available machine capacity, and IP ranges. Diagnose unschedulable Pods separately from application-level load or latency.

## Decision points for CPU and Memory Requests and Limits

CPU and Memory Requests and Limits concerns cpu and memory requests and limits. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Use **CPU and Memory Requests and Limits** to explain a scaling decision with a small capacity model. Calculate requested CPU/memory or accelerator count at peak replicas, include headroom, and compare it with current quota, IP space, and schedulable capacity.

### Inspect and verify

```bash
kubectl get hpa -A
kubectl describe pod PENDING_POD
```

### Evidence to capture

For this lesson, save the output of `kubectl get hpa -A` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

For cpu and memory requests and limits, investigate the direct dependency first, then permissions, configuration, capacity, and version compatibility. A successful CLI exit is not sufficient evidence; verify the resulting behavior and check recent events or logs.


## Security, reliability, and cost notes

- Verify the active target and permissions before making changes; keep the experiment reversible.
- Check the resource-specific cost, data-retention, and cleanup behavior before running the lab.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **CPU and Memory Requests and Limits** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
