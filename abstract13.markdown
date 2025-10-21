---
layout: default
---

**16:30 - 17:00**\\
**ILAN: The Interference- and Locality-Aware NUMA Scheduler**

Edvin Mellberg, Axel Carlsson, Jing Chen, Miquel Pericas\\
_Chalmers University of Technology, Sweden_

_Modern HPC platforms increasingly adopt NUMA architectures, where OpenMP task-based programming model is a standard for enabling dynamic parallelism. However, the default OpenMP runtime is topology-agnostic, and the existing affinity policies are insufficient to ensure optimal performance on modern NUMA architectures. This lack of topology awareness results in suboptimal data locality and performance degradation. Additionally, the current OpenMP standard lacks mechanisms for detecting and mitigating the interference between concurrently executing tasks, further exacerbating the performance degradation. To enhance the performance of OpenMP task-based applications on NUMA architectures, we propose the ILAN scheduler: an interference- and locality-aware scheduler, employing moldability to dynamically minimize interference combined with hierarchical scheduling for improved data locality. We implement ILAN as an extension of LLVM OpenMP runtime. The results on a 64-core AMD Zen 4 platform show that ILAN achieves an average speedup of 13.2%, and a maximum speedup of 45.8% compared to the default scheduler._