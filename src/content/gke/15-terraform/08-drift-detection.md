---
id: drift-detection
subject: gke
title: "Drift Detection"
description: "Learn drift detection with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 1508
---
# Drift Detection

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Drift Detection.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Terraform uses configuration, providers, a dependency graph, and state to plan changes to real infrastructure. The plan is the critical review artifact: it identifies create, update, replacement, and destroy actions before apply. Remote state needs access control, encryption, locking where supported, and backup/recovery procedures.

## Decision points for Drift Detection

Terraform uses configuration, providers, a dependency graph, and state to plan changes to real infrastructure. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Implement a minimal Terraform configuration for **Drift Detection** in a disposable workspace. Run formatting, validation, and plan; inspect creates, replacements, and destroys before applying. Record backend/state assumptions and how the change would be reviewed in CI.

### Inspect and verify

```bash
terraform fmt -check
terraform validate
terraform plan
```

### Evidence to capture

For this lesson, save the output of `terraform fmt -check` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Do not edit state JSON by hand or commit state files. A refresh-only or import operation can change the relationship between configuration and real resources; review it carefully.


## Security, reliability, and cost notes

- Never commit state files, credentials, or unreviewed plan output containing sensitive values. Protect remote state with least-privilege access and supported locking.
- Review every replacement/destroy action and use a disposable environment for destructive tests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Drift Detection** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://developer.hashicorp.com/terraform/language)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
