---
layout: default
---

**16:30 - 16:50**\\
**Scalable AMG Preconditioning for DG Neutron Diffusion Solvers on Manycore CPUs**

Antoine Kempf, Ansar Calloo, Cédric Chevalier, Marc Perache\\
_French Alternative Energies and Atomic Energy Commission (CEA), France_\\
_Université Paris-Saclay, France_

Romain Le Tellier\\
_French Alternative Energies and Atomic Energy Commission (CEA), France_

_Discontinuous Galerkin (DG) discretizations of diffusion-type operators arise across large-scale application domains, including neutron transport, where the resulting sparse systems are solved repeatedly and directly bottleneck simulation throughput. Standard incomplete LU (ILU) preconditioners exhibit O(h<sup>−1</sup>) iteration growth and prohibitive fill-in, limiting their scalability. This work evaluates a Smoothed Aggregation Algebraic Multigrid (SA-AMG) preconditioning strategy for 3D DG systems, implemented via Trilinos/MueLu and Kokkos. Evaluated on the Takeda Benchmark Model 1, the preconditioner demonstrates O(1) mesh-independent convergence up to 7.1×10<sup>6</sup> unknowns, yielding a 158× reduction in time-to-solution over a parallel threshold ILU baseline. To characterize hardware efficiency, we conduct a phase-decomposed strong scaling and roofline analysis across three distinct manycore topologies: Intel Sapphire Rapids, AMD Genoa, and NVIDIA Grace. The roofline model identifies all solver phases as strictly memory-bound. Crucially, on both dual-socket nodes (Sapphire Rapids and Genoa), scalability regresses or halts at the socket boundary due to inter-NUMA traffic during the fine-grid sparse matrix-vector product. Conversely, the single-socket Grace platform sustains its efficiency, achieving the lowest absolute time-to-solution despite a lower core count. These results identify memory topology, rather than raw core count, as the dominant scalability bottleneck, providing a scalable foundation for heterogeneous reactor transport calculations._
