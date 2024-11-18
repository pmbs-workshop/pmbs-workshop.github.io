---
layout: default
---

**10:30 - 10:50 Best Short Paper**\\
**System-Wide Roofline Profiling - a Case Study on NERSC’s Perlmutter Supercomputer**

Brian Austin, Dhruva Kulkarni, Samuel Williams, Nicholas Wright\\
_Lawrence Berkeley National Laboratory, USA_

_HPC system architects routinely use application profiling and performance modeling to evaluate hardware and software performance trade-offs. However, the focus on individual applications leaves gaps in the understanding of system utilization because it is impractical to collect profiles and models for every application. In this paper, we use hardware activity metrics gathered from NERSC’s Perlmutter system to perform a roofline performance analysis of a diverse scientific workload and provide quantitative empirical evidence for widely held beliefs that had previously been inferred from scattered analyses of individual applications. Specifically, we confirm the predominance of double-precision operations. The arithmetic intensity distribution suggests that near equal fractions of the workload are compute-bound and bandwidth-bound on Perlmutter GPUs. These results stand in worrisome contrast to hardware performance trends, where artificial intelligence applications driving processors emphasize the performance of reduced-precision operations, and gains in memory bandwidth are not keeping pace with peak processing rates._