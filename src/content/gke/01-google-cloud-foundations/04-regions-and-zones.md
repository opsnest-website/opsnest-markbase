---
id: regions-and-zones
subject: gke
title: "Regions and Zones"
description: "Learn regions and zones with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 104
---
# Regions and Zones

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Regions and Zones.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

A region is a geographic area containing zones; a zone is a failure domain within a region. Regional GKE clusters provide a regional control plane and can run nodes across zones, but workload availability still depends on replica count, scheduling, storage topology, and application design.

## Decision points for Regions and Zones

A region is a geographic area containing zones; a zone is a failure domain within a region. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Compare two candidate locations for latency, supported features, quota, data residency, and failure domains. Explain which resources are zonal, regional, or global and how the choice affects the recovery plan.

### Inspect and verify

```bash
gcloud compute regions list
gcloud compute zones list --filter="region:REGION_NAME"
```

### Evidence to capture

For this lesson, save the output of `gcloud compute regions list` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Regional placement alone does not make a single-replica application highly available.


## Security, reliability, and cost notes

- Prefer narrow IAM roles and explicit project IDs; do not use Owner/Editor as a shortcut for missing permissions.
- Confirm billing and quota before enabling services or provisioning resources.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Regions and Zones** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://cloud.google.com/docs)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
