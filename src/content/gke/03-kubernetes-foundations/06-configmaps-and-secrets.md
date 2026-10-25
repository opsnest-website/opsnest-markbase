---
id: configmaps-and-secrets
subject: gke
title: "ConfigMaps and Secrets"
description: "Learn configmaps and secrets with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 306
---
# ConfigMaps and Secrets

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of ConfigMaps and Secrets.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

ConfigMaps hold non-confidential configuration; Kubernetes Secrets hold sensitive values but are not automatically safe merely because they are Secret objects. Access control, encryption at rest, audit logging, and secret delivery patterns matter. Environment variables are fixed at container start; mounted files can update depending on volume semantics.

## Decision points for ConfigMaps and Secrets

ConfigMaps hold non-confidential configuration; Kubernetes Secrets hold sensitive values but are not automatically safe merely because they are Secret objects. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Inject a harmless feature flag through a ConfigMap, inspect the mounted file or environment, then update the ConfigMap and test whether the application reloads it. Use dummy data only and document how real credentials would be protected.

### Inspect and verify

```bash
kubectl get configmap
kubectl describe secret SECRET_NAME
```

### Evidence to capture

For this lesson, save the output of `kubectl get configmap` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Do not print Secret data in terminals, CI logs, screenshots, or support tickets. Base64 encoding is not encryption.


## Security, reliability, and cost notes

- Avoid exposing workloads publicly during basic object labs; use a ClusterIP or port-forward unless external access is the lesson.
- Inspect selectors and namespace before applying or deleting manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **ConfigMaps and Secrets** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
