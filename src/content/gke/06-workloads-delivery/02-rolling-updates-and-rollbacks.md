---
id: rolling-updates-and-rollbacks
subject: gke
title: "Rolling Updates and Rollbacks"
description: "Learn rolling updates and rollbacks with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 602
---
# Rolling Updates and Rollbacks

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Rolling Updates and Rollbacks.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

A Deployment rolling update gradually replaces old Pods with new ones according to `maxSurge` and `maxUnavailable`. Readiness gates traffic eligibility; rollout history records revisions when the Pod template changes. Rollback restores an earlier template, not necessarily the state of external dependencies.

## Decision points for Rolling Updates and Rollbacks

A Deployment rolling update gradually replaces old Pods with new ones according to `maxSurge` and `maxUnavailable`. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Deploy a known-good image, change to a test image, watch rollout progress and readiness, then roll back. Record the old/new ReplicaSets and test the application after rollback; note any external schema or data changes that rollback would not undo.

### Inspect and verify

```bash
kubectl rollout status deployment/APP
kubectl rollout history deployment/APP
kubectl rollout undo deployment/APP
```

### Evidence to capture

For this lesson, save the output of `kubectl rollout status deployment/APP` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

A rollout can appear complete while the application has a logical regression. Pair rollout checks with smoke tests and metrics.


## Security, reliability, and cost notes

- Test rollouts against a disposable application and keep a known-good image available.
- Consider database/schema compatibility and request draining before promoting or rolling back.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Rolling Updates and Rollbacks** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
