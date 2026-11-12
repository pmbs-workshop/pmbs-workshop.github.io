---
layout: default
---

**11:15 - 11:30**\\
**Matching Workloads to Blackwell: Power-Resolved Benchmarking of NVIDIA B200 and B300 across HPC and AI Workloads**

Mohsen Zand, Trung Dac Nguyen, H. Birali Runesha\\
_University of Chicago, IL, United States_

_We evaluate NVIDIA B200 and B300 (Blackwell Ultra) GPUs on two independent eight-GPU clusters, spanning computer-vision inference and training, LLM inference with Llama-3-8B and 70B, and six production HPC codes. The B300 is not a uniform successor to the B200: it trails by up to 5.6× on convolutional inference, 8× on 3D vision transformer training, 24–27% on 70B LLM throughput, and 16× on double-precision Quantum ESPRESSO. We resolve the convolutional deficit using per-GPU board power rather than throughput alone: on the affected workloads the B300 draws only 36–53% of its 1100 W envelope, whereas on ViT-Large, which it wins, both parts saturate at 95–97% of TDP. Because our harness keeps inputs resident in device memory, a host-side data pipeline is excluded by construction, localizing the cause to per-kernel cost. Two B300 nodes of identical silicon differ by 2.1× in time-to-first-token solely from a development vLLM build. We give per-workload procurement guidance._
