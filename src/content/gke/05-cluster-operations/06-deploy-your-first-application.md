---
id: deploy-your-first-application
subject: gke
title: "Deploy Your First Application"
description: "Learn deploy your first application with a focused explanation, practical exercise, verification steps, and troubleshooting guidance."
difficulty: Beginner
order: 506
---
# Deploy Your First Application

## What you will learn

By the end of this lesson, you should be able to:
- Explain the purpose and operational boundary of Deploy Your First Application.
- Identify the relevant Kubernetes, GKE, or Google Cloud components and their responsibilities.
- Apply the concept in a controlled environment and verify it with observable evidence.
- Recognize the most likely failure modes and avoid unsafe production assumptions.

## Core concept

A basic GKE deployment needs an image, Deployment spec, sensible resource requests, health probes, labels, and a traffic exposure choice. A ClusterIP Service is safer for the first lab than creating a public load balancer.

## Decision points for Deploy Your First Application

A basic GKE deployment needs an image, Deployment spec, sensible resource requests, health probes, labels, and a traffic exposure choice. The practical decision is to choose a configuration that satisfies the workload requirement without adding unsupported assumptions or unnecessary operational complexity. Confirm which component owns the behavior, what prerequisites apply, and what observable result will prove the design works.

## Practical exercise

Deploy a stateless sample to a test namespace, wait for rollout completion, verify ready replicas and Service endpoints, and perform a simple request. Capture the output before and after a controlled configuration change.

### Inspect and verify

```bash
kubectl apply -f deployment.yaml
kubectl rollout status deployment/sample
kubectl get deploy,pods,svc
```

### Evidence to capture

For this lesson, save the output of `kubectl apply -f deployment.yaml` and explain how it supports (or contradicts) the expected behavior described above. Record the relevant resource name and timestamp, and note one alternative explanation you ruled out. The exercise is complete only when you can restore the starting state or explain why cleanup is not required.

## Failure modes and diagnosis

Image pull failures, missing selectors, and readiness failures are distinct. Inspect events and logs instead of repeatedly reapplying unchanged YAML.


## Security, reliability, and cost notes

- Confirm project, region, and cluster context before any change; cluster creation, public exposure, and deletion can affect billing or availability.
- Use a dedicated project and a written teardown list. Verify standalone disks, addresses, forwarding rules, and other cloud resources after cluster cleanup.
- Check the official documentation below for current feature availability, CLI flags, IAM permissions, quotas, and pricing before production use.

## Knowledge check

1. What specific behavior does **Deploy Your First Application** control, and which component owns it?
2. What observable evidence would demonstrate that the configuration works?
3. Name two plausible failure causes and the evidence you would collect to distinguish them.
4. What is the safest way to test the concept and return the lab to its initial state?

## References

- [Official documentation relevant to this module](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-cluster)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs)

---
