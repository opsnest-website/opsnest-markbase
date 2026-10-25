---
id: blue-green-deployments
subject: gke
title: "Blue-Green Deployments"
description: "Learn blue-green deployments with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 603
---
# Blue-Green Deployments

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Blue-Green Deployments.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Blue-green deployment runs two application versions side by side and switches traffic from the active environment (blue) to the candidate (green). The switch can be a Service selector change, Gateway/Ingress routing update, or external traffic-manager action. The database must tolerate both versions during the transition.

## Decision points for Blue-Green Deployments

Blue-green deployment runs two application versions side by side and switches traffic from the active environment (blue) to the candidate (green). The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Deploy blue and green versions with distinct labels and a Service that selects one version. Test green directly, switch the selector in the lab, verify EndpointSlices and response version, and switch back to blue to rehearse rollback.

### Inspect and verify

```bash
kubectl get deploy,svc -o wide
kubectl get endpointslices -l kubernetes.io/service-name=web
```

### Evidence to capture

For this lesson, save the output of `kubectl get deploy,svc -o wide` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Blue-green can temporarily double compute usage. Do not switch if schema changes are backward-incompatible or candidate smoke tests fail.


## Security, reliability, and cost notes

- Test rollouts against a disposable application and keep a known-good image available.
- Consider database/schema compatibility and request draining before promoting or rolling back.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Blue-Green Deployments** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
