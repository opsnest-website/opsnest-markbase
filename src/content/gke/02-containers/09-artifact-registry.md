---
id: artifact-registry
subject: gke
title: "Artifact Registry"
description: "Learn artifact registry with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 209
---
# Artifact Registry

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Artifact Registry.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

Artifact Registry stores container images and other build artifacts. A GKE node identity needs permission to pull images from the relevant repository; workload identity used by application code is a separate identity path.

## Decision points for Artifact Registry

Artifact Registry stores container images and other build artifacts. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Build a versioned image, inspect its labels/layers/digest, and push it to a disposable or approved registry repository. Record the digest and explain how a deployment can verify it is running the artifact that CI produced.

### Inspect and verify

```bash
gcloud artifacts repositories list --location=REGION
gcloud auth configure-docker REGION-docker.pkg.dev
```

### Evidence to capture

For this lesson, save the output of `gcloud artifacts repositories list --location=REGION` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Repository location, IAM, VPC egress, and node identity can all affect image pulls. Do not solve a pull failure by granting project-wide Editor.


## Security, reliability, and cost notes

- Do not bake credentials into Dockerfile layers, build arguments, image labels, or logs.
- Scan images, pin trusted base images, and avoid running production containers as root without a documented reason.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Artifact Registry** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://docs.docker.com/build/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
