---
id: scheduling-affinity-and-tolerations
subject: gke
title: "Scheduling Affinity and Tolerations"
description: "Learn scheduling affinity and tolerations with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 312
---
# Scheduling Affinity and Tolerations

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Scheduling Affinity and Tolerations.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

The scheduler evaluates resource requests, node selectors, affinity/anti-affinity, taints and tolerations, topology constraints, and other predicates. A toleration permits a Pod to be considered for a tainted node; it does not attract the Pod there by itself.

## Decision points for Scheduling Affinity and Tolerations

The scheduler evaluates resource requests, node selectors, affinity/anti-affinity, taints and tolerations, topology constraints, and other predicates. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Apply a non-production node selector or affinity rule to a test Pod. Observe placement and events, then introduce an impossible selector in a copy to identify the scheduler message that explains Pending status.

### Inspect and verify

```bash
kubectl describe pod POD_NAME
kubectl get nodes --show-labels
```

### Evidence to capture

For this lesson, save the output of `kubectl describe pod POD_NAME` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Overly strict affinity, missing tolerations, or insufficient requested capacity can leave Pods Pending. Use required rules only when placement is mandatory.


## Security, reliability, and cost notes

- Avoid exposing workloads publicly during basic object labs; use a ClusterIP or port-forward unless external access is the lesson.
- Inspect selectors and namespace before applying or deleting manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Scheduling Affinity and Tolerations** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
