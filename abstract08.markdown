---
layout: default
---

**14:00 - 14:30**\\
**Hello SME!**

Stefan Remke, Alexander Breuer\\
_Friedrich Schiller University Jena, Germany_

_Modern central processing units (CPUs) feature single-instruction, multiple-data pipelines to accelerate compute-intensive floating-point and fixed-point workloads. Traditionally, these pipelines and corresponding instruction set architectures (ISAs) were designed for vector parallelism. The Scalable Matrix Extension (SME) was announced for the Arm architecture in 2021, and Apple's M4 chip is the first to support SME. This paper presents an in-depth study of SME on M4. Our microbenchmarks determine the maximum floating-point and fixed-point throughput of M4's SME acceleration and study the achievable bandwidth for transfers to and from the matrix registers. Furthermore, we used the insights gained to design a just-in-time code generator for SME-based small matrix multiplications. The results presented show that M4's SME support is FP32-centric, with an achievable throughput of over 2.3\,FP32 TFLOPS. Our just-in-time generated small matrix multiplication kernels outperform the vendor-optimized BLAS implementation in almost all tested configurations._