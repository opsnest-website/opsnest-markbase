# GKE: Zero to Expert

This course takes you from first principles to production-style GKE operations. Follow the modules in order, complete the labs in a dedicated learning project, and verify version-sensitive details against current official documentation.

> **Cost and safety:** Cloud resources may incur charges. Use a dedicated project, review billing and quotas, never paste credentials into content or Git, and delete lab resources when finished.

## Learning outcomes

You will learn to explain GKE architecture; deploy and operate workloads; design networking and storage; secure identity and workloads; scale and observe applications; troubleshoot incidents; automate delivery; manage infrastructure with Terraform; and prepare production readiness plans.


## Start Here

- [What Is GKE?](00-start-here/01-what-is-gke.md)
- [Who This Learning Path Is For](00-start-here/02-who-this-learning-path-is-for.md)
- [Prerequisites and Required Tools](00-start-here/03-prerequisites-and-required-tools.md)
- [Safe Learning Environment](00-start-here/04-safe-learning-environment.md)
- [Understanding Lab Costs](00-start-here/05-understanding-lab-costs.md)

## Google Cloud Foundations

- [Cloud Computing and Service Models](01-google-cloud-foundations/01-cloud-computing-and-service-models.md)
- [Google Cloud Resource Hierarchy](01-google-cloud-foundations/02-google-cloud-resource-hierarchy.md)
- [Projects Billing and APIs](01-google-cloud-foundations/03-projects-billing-and-apis.md)
- [Regions and Zones](01-google-cloud-foundations/04-regions-and-zones.md)
- [IAM Fundamentals](01-google-cloud-foundations/05-iam-fundamentals.md)
- [Install and Configure gcloud](01-google-cloud-foundations/06-install-and-configure-gcloud.md)
- [Quotas and Limits](01-google-cloud-foundations/07-quotas-and-limits.md)
- [VPC Networking Fundamentals](01-google-cloud-foundations/08-vpc-networking-fundamentals.md)

## Containers and Images

- [Containers Versus Virtual Machines](02-containers/01-containers-versus-virtual-machines.md)
- [Images Layers and Containers](02-containers/02-images-layers-and-containers.md)
- [Efficient Dockerfiles](02-containers/03-efficient-dockerfiles.md)
- [Build and Tag Images](02-containers/04-build-and-tag-images.md)
- [Environment Variables and Ports](02-containers/05-environment-variables-and-ports.md)
- [Volumes and Filesystems](02-containers/06-volumes-and-filesystems.md)
- [Health Checks and Graceful Shutdown](02-containers/07-health-checks-and-graceful-shutdown.md)
- [Non-Root Containers](02-containers/08-non-root-containers.md)
- [Artifact Registry](02-containers/09-artifact-registry.md)

## Kubernetes Foundations

- [Kubernetes Architecture](03-kubernetes-foundations/01-kubernetes-architecture.md)
- [Nodes Pods and Namespaces](03-kubernetes-foundations/02-nodes-pods-and-namespaces.md)
- [Deployments and ReplicaSets](03-kubernetes-foundations/03-deployments-and-replicasets.md)
- [Services and Service Discovery](03-kubernetes-foundations/04-services-and-service-discovery.md)
- [Labels Selectors and Annotations](03-kubernetes-foundations/05-labels-selectors-and-annotations.md)
- [ConfigMaps and Secrets](03-kubernetes-foundations/06-configmaps-and-secrets.md)
- [Requests Limits and QoS](03-kubernetes-foundations/07-requests-limits-and-qos.md)
- [Health Probes](03-kubernetes-foundations/08-health-probes.md)
- [Jobs and CronJobs](03-kubernetes-foundations/09-jobs-and-cronjobs.md)
- [DaemonSets and StatefulSets](03-kubernetes-foundations/10-daemonsets-and-statefulsets.md)
- [Persistent Storage Basics](03-kubernetes-foundations/11-persistent-storage-basics.md)
- [Scheduling Affinity and Tolerations](03-kubernetes-foundations/12-scheduling-affinity-and-tolerations.md)
- [YAML and kubectl Essentials](03-kubernetes-foundations/13-yaml-and-kubectl-essentials.md)
- [Kubernetes Troubleshooting](03-kubernetes-foundations/14-kubernetes-troubleshooting.md)

## GKE Architecture

- [GKE Architecture Overview](04-gke-architecture/01-gke-architecture-overview.md)
- [Autopilot Versus Standard](04-gke-architecture/02-autopilot-versus-standard.md)
- [Zonal Versus Regional Clusters](04-gke-architecture/03-zonal-versus-regional-clusters.md)
- [Control Plane and Endpoints](04-gke-architecture/04-control-plane-and-endpoints.md)
- [Node Pools and Machine Types](04-gke-architecture/05-node-pools-and-machine-types.md)
- [Release Channels and Versions](04-gke-architecture/06-release-channels-and-versions.md)
- [Cluster Lifecycle and Upgrades](04-gke-architecture/07-cluster-lifecycle-and-upgrades.md)
- [GKE Quotas and Capacity](04-gke-architecture/08-gke-quotas-and-capacity.md)

## Create and Operate a Cluster

- [Prepare a Google Cloud Project](05-cluster-operations/01-prepare-a-google-cloud-project.md)
- [Enable GKE APIs](05-cluster-operations/02-enable-gke-apis.md)
- [Configure kubectl Credentials](05-cluster-operations/03-configure-kubectl-credentials.md)
- [Create an Autopilot Cluster](05-cluster-operations/04-create-an-autopilot-cluster.md)
- [Create a Standard Cluster](05-cluster-operations/05-create-a-standard-cluster.md)
- [Deploy Your First Application](05-cluster-operations/06-deploy-your-first-application.md)
- [Inspect Cluster State](05-cluster-operations/07-inspect-cluster-state.md)
- [Upgrade and Maintain a Test Cluster](05-cluster-operations/08-upgrade-and-maintain-a-test-cluster.md)
- [Delete Resources and Avoid Costs](05-cluster-operations/09-delete-resources-and-avoid-costs.md)

## Workloads and Application Delivery

- [Declarative Deployment Manifests](06-workloads-delivery/01-declarative-deployment-manifests.md)
- [Rolling Updates and Rollbacks](06-workloads-delivery/02-rolling-updates-and-rollbacks.md)
- [Blue-Green Deployments](06-workloads-delivery/03-blue-green-deployments.md)
- [Canary Deployments](06-workloads-delivery/04-canary-deployments.md)
- [Configuration Injection](06-workloads-delivery/05-configuration-injection.md)
- [Secret Injection](06-workloads-delivery/06-secret-injection.md)
- [Graceful Shutdown and Probes](06-workloads-delivery/07-graceful-shutdown-and-probes.md)
- [Init Containers and Sidecars](06-workloads-delivery/08-init-containers-and-sidecars.md)
- [Jobs and Batch Workloads](06-workloads-delivery/09-jobs-and-batch-workloads.md)
- [Image Pull and CrashLoopBackOff](06-workloads-delivery/10-image-pull-and-crashloopbackoff.md)

## GKE Networking

- [VPC-Native Clusters and Alias IPs](07-networking/01-vpc-native-clusters-and-alias-ips.md)
- [Plan Pod and Service IP Ranges](07-networking/02-plan-pod-and-service-ip-ranges.md)
- [Kubernetes Service Types](07-networking/03-kubernetes-service-types.md)
- [GKE Ingress](07-networking/04-gke-ingress.md)
- [Gateway API on GKE](07-networking/05-gateway-api-on-gke.md)
- [Internal and External Load Balancing](07-networking/06-internal-and-external-load-balancing.md)
- [Private Clusters](07-networking/07-private-clusters.md)
- [DNS and Service Discovery](07-networking/08-dns-and-service-discovery.md)
- [Network Policies](07-networking/09-network-policies.md)
- [Outbound Access and Cloud NAT](07-networking/10-outbound-access-and-cloud-nat.md)
- [TLS and HTTPS](07-networking/11-tls-and-https.md)
- [Network Troubleshooting](07-networking/12-network-troubleshooting.md)

## Storage and Stateful Workloads

- [Ephemeral and Persistent Storage](08-storage/01-ephemeral-and-persistent-storage.md)
- [PersistentVolumes and Claims](08-storage/02-persistentvolumes-and-claims.md)
- [StorageClasses](08-storage/03-storageclasses.md)
- [Persistent Disk](08-storage/04-persistent-disk.md)
- [Filestore](08-storage/05-filestore.md)
- [StatefulSets](08-storage/06-statefulsets.md)
- [Snapshots and Recovery](08-storage/07-snapshots-and-recovery.md)
- [Capacity and Performance Troubleshooting](08-storage/08-capacity-and-performance-troubleshooting.md)

## Security and Identity

- [IAM Versus Kubernetes RBAC](09-security/01-iam-versus-kubernetes-rbac.md)
- [Least Privilege](09-security/02-least-privilege.md)
- [Workload Identity Federation for GKE](09-security/03-workload-identity-federation-for-gke.md)
- [Secret Manager Integration](09-security/04-secret-manager-integration.md)
- [Kubernetes Secrets and Encryption](09-security/05-kubernetes-secrets-and-encryption.md)
- [Cluster Hardening](09-security/06-cluster-hardening.md)
- [Network Isolation and Policy](09-security/07-network-isolation-and-policy.md)
- [Container and Pod Hardening](09-security/08-container-and-pod-hardening.md)
- [Image Scanning and Binary Authorization](09-security/09-image-scanning-and-binary-authorization.md)
- [Audit Logs](09-security/10-audit-logs.md)
- [Security Review Checklist](09-security/11-security-review-checklist.md)

## Autoscaling and Resource Management

- [CPU and Memory Requests and Limits](10-autoscaling/01-cpu-and-memory-requests-and-limits.md)
- [Scheduling and Resource Pressure](10-autoscaling/02-scheduling-and-resource-pressure.md)
- [Horizontal Pod Autoscaler](10-autoscaling/03-horizontal-pod-autoscaler.md)
- [Vertical Pod Autoscaler](10-autoscaling/04-vertical-pod-autoscaler.md)
- [Cluster Autoscaler](10-autoscaling/05-cluster-autoscaler.md)
- [Node Auto-Provisioning](10-autoscaling/06-node-auto-provisioning.md)
- [Autopilot Resource Management](10-autoscaling/07-autopilot-resource-management.md)
- [Quotas and Unschedulable Pods](10-autoscaling/08-quotas-and-unschedulable-pods.md)
- [GPU Workloads and Capacity](10-autoscaling/09-gpu-workloads-and-capacity.md)
- [Cost-Aware Placement](10-autoscaling/10-cost-aware-placement.md)

## Observability and Troubleshooting

- [GKE Logging and Monitoring](11-observability/01-gke-logging-and-monitoring.md)
- [Cloud Logging Queries](11-observability/02-cloud-logging-queries.md)
- [Cloud Monitoring Dashboards](11-observability/03-cloud-monitoring-dashboards.md)
- [Prometheus Metrics](11-observability/04-prometheus-metrics.md)
- [Events and Workload Logs](11-observability/05-events-and-workload-logs.md)
- [Alerting and SLOs](11-observability/06-alerting-and-slos.md)
- [Scheduling Failures](11-observability/07-scheduling-failures.md)
- [CPU Throttling and Memory Pressure](11-observability/08-cpu-throttling-and-memory-pressure.md)
- [DNS and Connectivity Diagnostics](11-observability/09-dns-and-connectivity-diagnostics.md)
- [Node Diagnostics](11-observability/10-node-diagnostics.md)
- [Incident Response and Root Cause Analysis](11-observability/11-incident-response-and-root-cause-analysis.md)

## CI/CD and GitOps

- [Container CI Pipeline Design](12-cicd-gitops/01-container-ci-pipeline-design.md)
- [Artifact Registry Integration](12-cicd-gitops/02-artifact-registry-integration.md)
- [Deploy with GitHub Actions](12-cicd-gitops/03-deploy-with-github-actions.md)
- [Cloud Build and Cloud Deploy](12-cicd-gitops/04-cloud-build-and-cloud-deploy.md)
- [Helm Fundamentals](12-cicd-gitops/05-helm-fundamentals.md)
- [Kustomize Fundamentals](12-cicd-gitops/06-kustomize-fundamentals.md)
- [GitOps Principles](12-cicd-gitops/07-gitops-principles.md)
- [Argo CD or Flux](12-cicd-gitops/08-argo-cd-or-flux.md)
- [Environment Promotion](12-cicd-gitops/09-environment-promotion.md)
- [Rollback and Verification](12-cicd-gitops/10-rollback-and-verification.md)

## Reliability and Production Operations

- [High Availability and Regional Design](13-reliability/01-high-availability-and-regional-design.md)
- [Failure Domains and Pod Distribution](13-reliability/02-failure-domains-and-pod-distribution.md)
- [Pod Disruption Budgets and Draining](13-reliability/03-pod-disruption-budgets-and-draining.md)
- [Maintenance Windows](13-reliability/04-maintenance-windows.md)
- [Cluster and Node Upgrades](13-reliability/05-cluster-and-node-upgrades.md)
- [Compatibility and Deprecations](13-reliability/06-compatibility-and-deprecations.md)
- [Backup and Disaster Recovery](13-reliability/07-backup-and-disaster-recovery.md)
- [RTO and RPO Planning](13-reliability/08-rto-and-rpo-planning.md)
- [Multi-Cluster Architectures](13-reliability/09-multi-cluster-architectures.md)
- [Fleet Management](13-reliability/10-fleet-management.md)
- [Production Readiness Review](13-reliability/11-production-readiness-review.md)

## Advanced GKE

- [Compute Classes and Specialized Hardware](14-advanced-gke/01-compute-classes-and-specialized-hardware.md)
- [GPU Workload Design](14-advanced-gke/02-gpu-workload-design.md)
- [Advanced Scheduling and Topology](14-advanced-gke/03-advanced-scheduling-and-topology.md)
- [Advanced Gateway and Traffic Management](14-advanced-gke/04-advanced-gateway-and-traffic-management.md)
- [Service Mesh Concepts](14-advanced-gke/05-service-mesh-concepts.md)
- [Policy Enforcement](14-advanced-gke/06-policy-enforcement.md)
- [Multi-Tenancy](14-advanced-gke/07-multi-tenancy.md)
- [Advanced Network Security](14-advanced-gke/08-advanced-network-security.md)
- [Cost Allocation](14-advanced-gke/09-cost-allocation.md)
- [Capacity Planning](14-advanced-gke/10-capacity-planning.md)
- [AI and ML Workloads](14-advanced-gke/11-ai-and-ml-workloads.md)
- [Kubernetes Operators](14-advanced-gke/12-kubernetes-operators.md)

## Infrastructure as Code

- [Terraform Fundamentals](15-terraform/01-terraform-fundamentals.md)
- [Google Cloud Terraform Provider](15-terraform/02-google-cloud-terraform-provider.md)
- [Provision VPC and GKE](15-terraform/03-provision-vpc-and-gke.md)
- [IAM as Code](15-terraform/04-iam-as-code.md)
- [Terraform State and Remote Backends](15-terraform/05-terraform-state-and-remote-backends.md)
- [Reusable Modules](15-terraform/06-reusable-modules.md)
- [Environment Separation](15-terraform/07-environment-separation.md)
- [Drift Detection](15-terraform/08-drift-detection.md)
- [Policy Checks in CI](15-terraform/09-policy-checks-in-ci.md)
- [Safe Infrastructure Changes](15-terraform/10-safe-infrastructure-changes.md)

## Hands-On Projects and Capstone

- [Project 1 Static Website](16-projects/01-project-1-static-website.md)
- [Project 2 Frontend API and Database](16-projects/02-project-2-frontend-api-and-database.md)
- [Project 3 HTTPS and Rolling Releases](16-projects/03-project-3-https-and-rolling-releases.md)
- [Project 4 Secure Workload Identity](16-projects/04-project-4-secure-workload-identity.md)
- [Project 5 Secure CI/CD Pipeline](16-projects/05-project-5-secure-ci-cd-pipeline.md)
- [Project 6 Autoscaling and Observability](16-projects/06-project-6-autoscaling-and-observability.md)
- [Project 7 Disaster Recovery Runbook](16-projects/07-project-7-disaster-recovery-runbook.md)
- [Capstone Production-Ready GKE Platform](16-projects/08-capstone-production-ready-gke-platform.md)
