---
layout: default
---

**09:00 - 09:30**\\
**Modelling Load Imbalance In Shared Memory Multicore Systems**

Johannes Langguth\\
_Simula Research Laboratory, Norway_\\
_University of Bergen, Norway_ 

James Trotter\\
_Simula Research Laboratory, Norway_

Xing Cai\\
_University of Oslo, Norway_\\
_Simula Research Laboratory, Norway_

_Memory bandwidth has become the primary limiting factor of performance in many modern HPC applications, and it poses a limit to scalability because the achievable memory bandwidth only grows linearly with a small number of CPU cores. When the number of cores concurrently using the memory system exceeds a threshold, the aggregate memory bandwidth quickly saturates._

_To estimate the time usage of a computation dominated by memory traffic, the mainstream strategy is to divide the expected total memory traffic volume by the maximum memory bandwidth. However, this implicitly assumes homogeneous memory traffic which is often not the case, leading to inaccurate time estimates by the mainstream strategy._

_In this paper, we present a new performance model that specifically targets inhomogeneity in per-core memory traffic. The new requires only three hardware parameters. Using several cases of uneven per-core memory traffic, we demonstrate its advantage over the mainstream strategy._