---
id: configuration-injection
subject: gke
title: "Configuration Injection"
description: "Learn configuration injection with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 605
---
# Configuration Injection

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Configuration Injection.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Configuration can be delivered through environment variables, ConfigMaps, mounted files, command arguments, or an external configuration service. Each has different update behavior and visibility. Keep deploy-time configuration separate from the immutable image so the same image can be promoted across environments.

## Decision points for Configuration Injection

Configuration can be delivered through environment variables, ConfigMaps, mounted files, command arguments, or an external configuration service. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Deploy a sample workload with a non-sensitive ConfigMap and a dummy secret. Compare environment injection with a mounted file, update the configuration, and document the reload/rollout requirement without printing secret values.

### Inspect and verify

```bash
kubectl create configmap web-config --from-literal=LOG_LEVEL=info
kubectl get configmap web-config -o yaml
```

### Evidence to capture

For this lesson, save the output of `kubectl create configmap web-config --from-literal=LOG_LEVEL=info` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Do not put passwords, API keys, or private certificates in ConfigMaps. A changed ConfigMap does not guarantee the application reloads its configuration.


## Security, reliability, and cost notes

- Test rollouts against a disposable application and keep a known-good image available.
- Consider database/schema compatibility and request draining before promoting or rolling back.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Configuration Injection** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
