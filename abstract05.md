---
layout: default
---

**11:00 - 11:15**\\
**CXDVirt: Low Latency Kernel Module based CXL-SSD Emulation**

Hyunsun Chung, Seongho Bong, Youngjae Kim\\
_Sogang University, South Korea_

Hong-Yeon Kim\\
_Electronics and Telecommunications Research Institute (ETRI), South Korea_

_CXL-SSDs promise memory-semantic access to NAND-scale capacity through a small in-device DRAM cache, but scarce hardware makes emulation central to CXL-SSD research. Cylon, a state-of-the-art emulator, runs workloads in a VM, intercepting DRAM misses to inject NAND latency. We show this VM machinery adds over 3µs per miss, exceeding high-performance NAND read latency, while repeated VM exits inflate tail miss latencies several-fold. We present CXDVirt, a kernel-module-based CXL-SSD emulator that removes the VM entirely: the device is exposed through host devdax, hits run natively via the MMU, and a custom page-fault path models NAND latency on misses. CXDVirt preserves CXL-SSDs’ bimodal latency profile while reducing per-miss latency 1.4–1.6× (4.1× at P99.9); with eight threads its miss latency only doubles, against 8–9× for Cylon behind QEMU’s global lock. CXDVirt stays within 5% of remote DRAM without NAND traffic, where Cylon is 3.1– 3.6× slower, and enables configurable eviction and prefetch policy studies._
