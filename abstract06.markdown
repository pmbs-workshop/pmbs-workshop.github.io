---
layout: default
---

**11:45 - 12:00**\\
**Implications of Full-System Modeling for Superconducting Architectures**

Kunal Pai, Mahyar Samani, Anusheel Nand, Jason Lowe-Power\\
_University of California, Davis, USA_

_As Moore's Law slows, superconducting electronics offer ultra-low-power, high-speed computation potential. This paper presents the first full-system superconducting architecture modeling in gem5, evaluating superconducting cores, caches, and interconnects under realistic workloads. We extend gem5 with cryogenic semiconductor (4 GHz) and superconducting (100 GHz) RISC-V cores and multi-level caches, evaluating RISC-V benchmarks and SPEC CPU2006 applications. We also integrate SRNoC, a superconducting interconnect, with the NOVA graph accelerator._

_Results show superconducting cores and caches achieve up to 24x speedup for compute-intensive workloads, but memory-intensive applications are bottlenecked by room-temperature DRAM (1.2x improvement). High cache bandwidth requirements (800 GB/s) present design challenges. SRNoC provides 35-73x energy efficiency gains for narrow data paths but 1246x slowdown for wide data communication. Therefore, superconducting technology suits domain-specific accelerators better than general-purpose computing, with performance dependent on workload memory access patterns and data widths._