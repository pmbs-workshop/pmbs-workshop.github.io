---
layout: default
---

**10:45 - 11:00**\\
**Orrery: Modeling and Simulation of GPU-direct MPI Communication with SimGrid**

Ahmad Moh'd Saleh A. Belbeisi\\
_Technical University of Munich, Germany_

Majid Salimi Beni\\
_Vienna University of Technology, Austria_

Amir Raoofy\\
_Leibniz Supercomputing Centre, Germany_

Josef Weidendorfer\\
_Technical University Dresden, Germany_

_Simulation of HPC applications is an essential tool for analyzing system design trade-offs and enabling effective hardware–software co-design. As modern supercomputers increasingly rely on GPU acceleration, MPI implementations have evolved to support GPU-aware communication, enabling direct GPU data transfers. Modeling these mechanisms is therefore critical for simulating HPC applications on current systems. In this paper, we introduce Orrery, an interposition layer built on SimGrid’s SMPI to model GPU-aware MPI communication using existing collective implementations and flow-based simulation. Orrery intercepts GPU memory allocations, kernel launches, data transfers, and MPI operations, and models their execution in SimGrid according to target system specifications, enabling simulation without requiring physical GPUs. We validate Orrery using CUDA-aware MPI microbenchmarks and a Jacobi solver on up to 32 nodes of the MUSICA supercomputer and demonstrate that it reproduces key GPU-aware MPI mechanisms._
