---
layout: default
---

**15:30 - 16:00**\\
**Impact of Varying BLAS Precision on DCMESH**

Nariman Piroozan, S. John Pennycook, Peter Caday, Nalini Kumar\\
_Intel Corporation, USA_

Taufeq Razakh, Aiichiro Nakano\\
_University of Southern California, USA_

_The limiting factor in the application of high-accuracy quantum molecular simulations to large systems has been the associated high computational costs in terms of both compute power and memory. In this paper we explore the use of various BLAS precision modes (BF16, TF32, and Complex_3M) in DCMESH, a framework utilized for the study of light-matter interaction. On a single stack of the Intel Data Center GPU Max Series 1550, we are able to achieve a speedup of 1.35x while retaining accuracy in key output parameters such as the number of excited electrons, current density, and kinetic energy. For large problem sizes, we observe speed-ups of up to 3.91x for individual BLAS calls. Switching between BLAS precision modes requires no source code changes (only environment variables), and so the approach we demonstrate could be readily applied to other high performance computing (HPC) workloads that spend significant time in BLAS calls._