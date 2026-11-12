---
layout: default
---

**16:50 - 17:10**\\
**Exploiting the Interplay of Compute- and Memory-Bound kernels in MPI Applications**

Ayesha Afzal, Georg Hager\\
_Erlangen National High Performance Computing Center, Friedrich-Alexander-Universität Erlangen-Nürnberg, Germany_

Krishna Manda\\
_University of Bonn, Germany_

_Parallel applications are often designed for synchronous, lock-step execution, treating communication stalls as performance hazards. Yet, in a communication-light application without frequent synchronization points that alternates between compute-bound and memory-bound execution, an MPI communication stall can act as an unintentional relief on memory-bandwidth contention. We demonstrate this using a Parallel Optical Flow Solver, which combines a compute-bound Ray Tracing kernel with a memory-bound Optical Flow Solver kernel and negligible inter-process communication. This program shows considerable speedup via desynchronization and automatic overlap between compute- and memory-bound phases, showing that natural desynchronization is an architecture-aware optimization. An optimal speedup is achieved when the number of processes concurrently executing the memory-bound phase on a ccNUMA domain is near the bandwidth saturation point. We also show a case where reducing communication overhead using MPI asynchronous progress significantly degrades performance because it allows too many ranks to contend for memory bandwidth simultaneously. In order to study the dynamics under more controlled conditions, we develop a tunable dual-kernel microbenchmark, with which we show that significant application or system noise (natural or injected) is required to achieve full desynchronization. Finally, we also validate these results using a bandwidth-aware, model-based simulator._
