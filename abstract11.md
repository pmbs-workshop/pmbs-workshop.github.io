---
layout: default
---

**14:20 - 14:40**\\
**Enhancing Data Center Efficiency and Throughput by Co-Scheduling**

Paul Lin, Nestor Demeure, Mathias Wagner, Francesca Tartaglione, Garima Kochhar\\
_NVIDIA, United States_

Jonathan Skone, Dhruva Kulkarni, Jack Deslippe, Brian Austin\\
_Lawrence Berkeley National Laboratory, CA, United States_

Ian Karlin\\
_Queen's University, Canada_

_Many HPC data centers have supercomputers with separate CPU-only and GPU compute nodes to support different workloads. One approach to increase system throughput is to run CPU-only jobs on unused CPU resources on the GPU nodes. Analysis of the workload running on NERSC’s supercomputer showed that approximately 60% of Perlmutter’s GPU node-hours employed fewer than 12 CPU cores and less than 128GB host memory. The remaining 52 CPU cores and 128GB host memory could be used by co-scheduled CPU-only jobs. However, it is critical that the co-scheduled CPU-only jobs and GPU jobs have controlled/bounded interference. This preliminary study assesses the feasibility of co-scheduling in production. Testing of the NERSC-10 benchmark applications on NVIDIA Grace-Hopper nodes using Memory System Resource Partitioning and Monitoring (MPAM) and network/InfiniBand quality of service for performance isolation measured a 70% throughput increase from co-scheduling compared with no co-scheduling, while maintaining an acceptable level of performance isolation._
