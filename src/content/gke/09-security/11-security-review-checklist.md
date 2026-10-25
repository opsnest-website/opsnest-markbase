---
id: security-review-checklist
subject: gke
title: "Security Review Checklist"
description: "Learn security review checklist with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 911
---
# Security Review Checklist

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Security Review Checklist.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Security control must be applied at the layer that enforces the action: Cloud IAM for Google Cloud APIs, Kubernetes RBAC for Kubernetes API operations, admission policy for workload configuration, network policy for Pod traffic, and registry/deployment controls for artifact trust.

## Decision points for Security Review Checklist

Security control must be applied at the layer that enforces the action: Cloud IAM for Google Cloud APIs, Kubernetes RBAC for Kubernetes API operations, admission policy for workload configuration, network policy for Pod traffic, and registry/deployment controls for artifact trust. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Create a threat-model note for **Security Review Checklist**: identify the principal, resource, allowed action, trust boundary, audit evidence, and revocation procedure. Demonstrate the control with a harmless test identity or dummy secret and verify that an unauthorized action is denied.

### Inspect and verify

```bash
kubectl auth can-i get pods --as=system:serviceaccount:NAMESPACE:SERVICEACCOUNT -n NAMESPACE
gcloud projects get-iam-policy "$PROJECT_ID"
```

### Evidence to capture

For this lesson, save the output of `kubectl auth can-i get pods --as=system:serviceaccount:NAMESPACE:SERVICEACCOUNT -n NAMESPACE` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

A Kubernetes ServiceAccount is not the same thing as a Google Cloud IAM service account. Avoid downloadable long-lived keys for workloads when federation is supported.


## Security, reliability, and cost notes

- Use test identities and dummy values; never commit credentials or print secret payloads.
- Prefer least privilege, short-lived credentials, audit evidence, and explicit revocation. Confirm whether the control is enforced by Cloud IAM, Kubernetes RBAC, admission, network policy, or registry policy.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Security Review Checklist** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
