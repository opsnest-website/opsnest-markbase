---
id: iam-fundamentals
subject: gke
title: "IAM Fundamentals"
description: "Learn iam fundamentals with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 105
---
# IAM Fundamentals

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of IAM Fundamentals.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Cloud IAM controls who can perform actions on Google Cloud resources. Kubernetes RBAC controls actions against Kubernetes API objects. These authorization systems overlap operationally but are not interchangeable; a user who can create a cluster may not automatically have permissions inside every namespace.

## Decision points for IAM Fundamentals

Cloud IAM controls who can perform actions on Google Cloud resources. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Choose one read-only task and identify the narrowest role and resource scope that permits it. Inspect the current IAM policy, explain any inherited access, and document what permission would be needed for a denied operation. Do not grant a broad role just to make the test pass.

### Inspect and verify

```bash
gcloud projects get-iam-policy "$PROJECT_ID"
```

### Evidence to capture

For this lesson, save the output of `gcloud projects get-iam-policy "$PROJECT_ID"` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Avoid primitive Owner/Editor grants for routine work. Treat service-account impersonation and key creation as sensitive privileges.


## Security, reliability, and cost notes

- Prefer narrow IAM roles and explicit project IDs; do not use Owner/Editor as a shortcut for missing permissions.
- Confirm billing and quota before enabling services or provisioning resources.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **IAM Fundamentals** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://cloud.google.com/docs)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
