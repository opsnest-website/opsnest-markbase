---
id: services-and-service-discovery
subject: gke
title: "Services and Service Discovery"
description: "Learn services and service discovery with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 304
---
# Services and Service Discovery

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Services and Service Discovery.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

A Service provides a stable virtual endpoint for a changing set of Pods. Selectors determine matching Pods; EndpointSlices represent backend endpoints. Cluster DNS commonly resolves service names to their ClusterIP, but the application must listen on the target port.

## Decision points for Services and Service Discovery

A Service provides a stable virtual endpoint for a changing set of Pods. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Deploy two labeled replicas and a ClusterIP Service. Verify that the Service selector matches the Pods, inspect EndpointSlices, and send a request from a temporary client Pod. Change one label in a test copy and observe how the endpoints change.

### Inspect and verify

```bash
kubectl get svc,endpointslices
kubectl get endpointslices -l kubernetes.io/service-name=SERVICE_NAME
```

### Evidence to capture

For this lesson, save the output of `kubectl get svc,endpointslices` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

An empty EndpointSlice often indicates selector mismatch or Pods that are not eligible endpoints; verify labels and readiness.


## Security, reliability, and cost notes

- Avoid exposing workloads publicly during basic object labs; use a ClusterIP or port-forward unless external access is the lesson.
- Inspect selectors and namespace before applying or deleting manifests.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Services and Service Discovery** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://kubernetes.io/docs/concepts/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
