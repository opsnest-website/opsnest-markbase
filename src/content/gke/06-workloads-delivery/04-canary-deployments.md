---
id: canary-deployments
subject: gke
title: "Canary Deployments"
description: "Learn canary deployments with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 604
---
# Canary Deployments

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Canary Deployments.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

A canary exposes a small portion of traffic to a candidate version before wider rollout. Kubernetes replica ratios do not guarantee an exact traffic percentage, especially with uneven connections or low request volume. Reliable weighted traffic splitting usually requires a capable Gateway, service mesh, or external load balancer configuration.

## Decision points for Canary Deployments

A canary exposes a small portion of traffic to a candidate version before wider rollout. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Deploy stable and candidate versions with separate labels. Send controlled test requests to each version and define error-rate/latency promotion thresholds. If you test weighted traffic, use a supported Gateway or traffic controller and measure actual request distribution rather than inferring it from replica counts.

### Inspect and verify

```bash
kubectl get deploy,svc,endpointslices
kubectl rollout status deployment/canary
```

### Evidence to capture

For this lesson, save the output of `kubectl get deploy,svc,endpointslices` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Do not claim that one canary Pod equals a precise 10% traffic share. Watch sample size, request distribution, saturation, and dependency errors.


## Security, reliability, and cost notes

- Test rollouts against a disposable application and keep a known-good image available.
- Consider database/schema compatibility and request draining before promoting or rolling back.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Canary Deployments** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
