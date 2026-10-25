---
id: maintenance-windows
subject: gke
title: "Maintenance Windows"
description: "Learn maintenance windows with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 1304
---
# Maintenance Windows

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Maintenance Windows.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Reliability requires explicit failure assumptions and evidence. Regional placement, replicas, PodDisruptionBudgets, backups, and multiple clusters solve different failure classes; none replaces testing. RTO is the target time to restore service, while RPO is the acceptable amount of data loss measured in time.

## Decision points for Maintenance Windows

Reliability requires explicit failure assumptions and evidence. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Write a failure scenario for **Maintenance Windows** and define the expected service impact, detection signal, mitigation, recovery steps, RTO/RPO where relevant, and proof of recovery. Exercise the plan in a non-production environment before relying on it.

### Inspect and verify

```bash
kubectl get pdb -A
kubectl get pods -A -o wide
kubectl get pvc -A
```

### Evidence to capture

For this lesson, save the output of `kubectl get pdb -A` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

A PDB only limits voluntary disruptions and does not guarantee application availability. Backups are useful only if restore is tested and permissions are available during an incident.


## Security, reliability, and cost notes

- Exercise failure and restore procedures only in an approved non-production environment unless a production game day is explicitly authorized.
- Confirm backups, access, DNS, certificates, and dependencies are available during recovery—not only Kubernetes manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Maintenance Windows** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-upgrades)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
