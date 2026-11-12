---
layout: default
---

**11:50 - 12:10**\\
**Performance comparison and analysis of macroscopic cross section lookup kernel on Cerebras CS-3 and NVIDIA GPUs**

Reo Nagashima, Akeru Nakamura, Takaaki Miyajima\\
_Meiji University, Japan_

John R. Tramm\\
_Argonne National Laboratory, IL, United States_

_The Cerebras CS-3 comprises approximately 900,000 processing elements (PEs) connected in a two-dimensional mesh topology. It features not only high memory bandwidth but also an exceptionally high B/F ratio. These characteristics have drawn significant attention in the field of scientific computing. However, performance evaluations of memory-bound applications on the CS-3 have not yet been sufficiently conducted. In this study, we evaluate and analyze the performance of a computational kernel that abstracts the macroscopic cross section lookup kernel used in XSBench, a Monte Carlo (MC) particle transport mini-app, on the CS-3. This kernel represents a typical memory-bottleneck workload characterized by extremely low computational density and irregular random memory accesses. We measure the maximum performance, strong scaling, and weak scaling of the CS-3. We conduct detailed performance analysis and attempt to identify the contributing factors to the performance improvement over CS-2. We also compare its performance with optimized implementations on NVIDIA’s GH200 Grace Hopper Superchip (GH200) and A100 GPU. The CS-3 implementation, without any additional optimizations, achieved 9.44E+09 lookups/s and an 11% increase in geomean performance over the CS-2 implementation. Under the same experimental settings, it achieved 6.34x and 11.90x higher throughput than GH200 and A100, respectively. These results indicate that the CS-3 is a promising platform for this class of low-arithmetic-intensity, irregular memory-access lookup kernels._
