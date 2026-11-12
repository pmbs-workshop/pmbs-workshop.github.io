---
layout: default
---

**11:30 - 11:50**\\
**HPL and HPL-MxP at Exascale on Aurora: Performance Engineering and Characterization**

Kazushige Goto, Huda Ibeid, Anthony-Trung Nguyen, Aditya Nishtala\\
_Intel Corporation, United States_

Kalyan Kumaran, Servesh Muralidharan\\
_Argonne National Laboratory, IL, United States_

_Running HPL and HPL-MxP at exascale requires more than optimized numerical kernels; it requires coordinated performance engineering across communication, resource mapping, runtime configuration, CPU–GPU interaction, and mixed-precision execution. This paper reports experience from large-scale benchmarking campaigns on Aurora, the Intel-based exascale supercomputer at the Argonne Leadership Computing Facility. Aurora progressed from 0.585 EF/s on 5,439 nodes to 1.01 EF/s on 9,234 nodes in FP64 HPL, while HPL-MxP reached 11.64 EF/s on 9,500 nodes. We describe the system-level choices behind these results, including locality-aware rank, GPU, memory, and NIC placement; explicit CPU–GPU pipelining; host-buffer MPI and transport configuration; phase-specific NIC assignment; AMX-accelerated mixed precision; and a hybrid point-to-point/collective path introduced after synchronization stalls at scale. This experience-based study concludes with practitioner guidance separating Aurora-specific findings from broader principles for tightly coupled heterogeneous systems._
