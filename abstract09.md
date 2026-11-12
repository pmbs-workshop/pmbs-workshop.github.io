---
layout: default
---

**12:10 - 12:30**\\
**FP64 Performance and the Limits of Ozaki Emulation on HPC Systems**

Katarzyna (Kasia) Swirydowicz, Nicholas Malaya, Noah Wolfe, Paul Bauman, Pieter Ghysels, Jonathan Belof\\
_Advanced Micro Devices, Inc, United States_

_A growing industry narrative holds that native double precision can be deprioritized in High Performance Computing (HPC) accelerators, on the hypothesis that low-precision tensor cores can emulate FP64 on demand, and that most HPC workloads are bandwidth-bound. This paper evaluates some of those claims and explores the importance of FP64 in scientific computing. We show roofline profiling data of representative HPC workloads, across a variety of common computational motifs, to evaluate the arithmetic-intensity and accuracy requirements of these workloads. We also consider FP64 emulation via the Ozaki method to ascertain some of the possibilities and limitations of these approaches._

_These results indicate that Ozaki emulation should not be evaluated as a general replacement for FP64, but as an optimization for the subset of workloads whose dominant computation is sufficiently large, dense, and General Matrix Multiply (GEMM)-shaped. Our analysis indicates this is less than 10% of the HPC ecosystem. Furthermore, even in this favorable regime, standalone GEMM speedup is not sufficient: numerical behavior, workspace requirements, matrix shape, and integration overhead determine whether the benefit survives at application scale. This paper characterizes those boundaries empirically. Furthermore, we show that dense GEMM accounts for only a small fraction of FP64 computation across HPC workloads, leaving most application-level FP64 work beyond the reach of GEMM-based emulation._
