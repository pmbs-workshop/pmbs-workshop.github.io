---
layout: default
---

**17:10 - 17:30**\\
**FHE-STREAM: Characterizing Memory Access Behavior in Fully Homomorphic Encryption Workloads**

Ashlesha Malla, Yash Kumar, Michael Beebe, Yong Chen\\
_Texas Tech University, TX, United States_

Wendy Poole, Steve Poole\\
_Los Alamos National Laboratory, NM, United States_

_Fully Homomorphic Encryption (FHE) enables computation on encrypted data, but adoption is limited by high memory overheads. The Residue Number System makes FHE arithmetic practical on CPUs while expanding each polynomial into a fragmented, pointer-based collection of limb arrays. Standard HPC memory benchmarks use flat, contiguous arrays and cannot capture how these structures behave under irregular access. We present FHE-STREAM, a microbenchmark suite that reproduces the memory layout of production RNS-based FHE libraries and measures the gap between the bytes an algorithm intends to move and the bytes the memory system actually transfers. Validation against hardware DRAM counters shows this gap is driven by cache-line utilization rather than access irregularity alone: cache-line-granular or coarser access shows little amplification, while sub-cache-line random access substantially increases traffic. This ordering predicts real cost, with OpenFHE relinearization spending more than half its runtime waiting on memory, providing measured targets for accelerator and library designers._
