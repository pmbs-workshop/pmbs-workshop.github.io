---
layout: default
---

**16:30 - 17:00**\\
**Understanding VASP Power Profiles on NVIDIA A100 GPUs**

Zhengji Zhao, Brian Austin, Ermal Rrapaj, Nicholas Wright\\
_Lawrence Berkeley National Laboratory, USA_

_Power is a critical limiting factor in supercomputing as systems scale to exascale levels. To advance scientific computing, supercomputers must operate efficiently under limited power budgets. Power-aware scheduling can help by enforcing power management strategies, but this requires a deep understanding of application power behavior, especially on modern GPU-centric supercomputers. This study examines the power behavior of VASP, a leading HPC application, on the Perlmutter A100 GPU system at NERSC. We explore how VASP’s power usage changes with various inputs and parallelism and assess its response to power capping. We find that VASP’s power usage varies significantly with different workloads, more so than with parallel concurrency. Additionally, power capping GPUs to 50% of their Thermal Design Power can be applied to VASP workloads with less than a 10% performance loss._

_These findings shed light on the feasibility and effectiveness of power-aware scheduling based on application power profiles on HPC systems._