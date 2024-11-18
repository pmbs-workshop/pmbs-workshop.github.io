---
layout: default
---

**16:00 - 16:30**\\
**Assessing the GPU Offload Threshold of GEMM and GEMV Kernels on Modern Heterogeneous HPC Systems**

Finn Wilkinson, Alex Cockrean, Wei-Chen Lin, Simon McIntosh-Smith, Tom Deakin\\
_University of Bristol, UK_

_With an ever-growing compute advantage over CPUs, GPUs are often used in workloads with ample BLAS computation to improve performance. However, several factors, including data-to-compute ratio, amount of data re-use, and data structure, can all impact performance. Hence, using a GPU is not a guarantee of better BLAS performance. In this work, we introduce the GPU BLAS Offload Benchmark (GPU-BLOB), a novel and portable benchmark that measures CPU and GPU compute performance of different BLAS kernels and problem configurations. From the GPU offload threshold (a BLAS kernel’s minimum dimensions for a certain configuration where using a GPU is guaranteed to yield improved performance), we evaluate the per-node performance of three in-production HPC systems. We show that the offload threshold for GEMM is highly dependent on problem shape and number of consecutive BLAS calls, and that, contrary to conventional wisdom, GEMV can benefit from GPU acceleration, especially on SoC-based systems._