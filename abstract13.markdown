---
layout: default
---

**17:00 - 17:30**\\
**Workload-adaptive Scheduling for Efficient Use of Parallel File System in High-performance Computing Clusters**

Alexander Goponenko, Damian Dechev\\
_University of Central Florida, USA_

Benjamin Allan, James Brandt\\
_Sandia National Laboratories, USA_ 

_Whereas contentions within storage systems noticeably impact runtimes, shared bandwidth-type resources, such as Lustre, pose challenges for high-performance computing cluster schedulers. Additionally, accurately estimating job resource requirements, particularly related to I/O operations, remains a significant challenge for users. In response to these challenges, we have developed a prototype that facilitates I/O-aware scheduling in Slurm without imposing additional burdens on users. Accounting for the specific properties of this bandwidth-type resource, our system monitors real-time Lustre bandwidth utilization, estimates job I/O requirements, and dynamically adjusts to the demands placed on the file system. Our workload-adaptive scheduler aims to maintain the bandwidth utilization at a level that reflects the resource requirement of the job queue. We further enhance the efficacy of our approach by introducing a "two-group'' approximation technique that ensures efficient performance regardless of the availability of zero-throughput jobs. We demonstrate the effectiveness of our approach through evaluation on a real cluster._