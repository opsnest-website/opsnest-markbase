---
id: persistent-storage-basics
subject: gke
title: "Persistent Storage Basics"
description: "Learn persistent storage basics with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 311
---
# Persistent Storage Basics

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Persistent Storage Basics.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Kubernetes storage separates a Pod from the lifecycle of persistent data. Ephemeral volumes suit scratch space; PersistentVolumeClaims request storage with a capacity and access mode; the provisioner and StorageClass determine how backing storage is created.

## Decision points for Persistent Storage Basics

Kubernetes storage separates a Pod from the lifecycle of persistent data. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Mount a disposable PVC into a test Pod, write a marker file, delete and recreate the Pod, and verify persistence. Inspect the StorageClass and reclaim policy before deleting the claim.

### Inspect and verify

```bash
kubectl get pv,pvc,storageclass
```

### Evidence to capture

For this lesson, save the output of `kubectl get pv,pvc,storageclass` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Deleting a PVC can have different consequences depending on the backing volume reclaim policy. Confirm the policy before cleanup.


## Security, reliability, and cost notes

- Avoid exposing workloads publicly during basic object labs; use a ClusterIP or port-forward unless external access is the lesson.
- Inspect selectors and namespace before applying or deleting manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Persistent Storage Basics** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
