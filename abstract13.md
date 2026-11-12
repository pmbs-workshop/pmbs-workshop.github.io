---
layout: default
---

**15:30 - 15:50**\\
**PortWarp: A Cycle-Accurate GPU-Accelerated HPC Network Simulator Using Port-per-Thread Model**

Jun Tan, Boning Li, Christopher Carothers\\
_Rensselaer Polytechnic Institute, NY, United States_

Kevin Brown\\
_Argonne National Laboratory, IL, United States_

Zhiling Lan\\
_University of Illinois Chicago, IL, United States_

_The cycle-accurate modeling methodology, used by popular tools such as BookSim2, Gem5, and SST, has become a de facto standard for modeling HPC networks and systems. However, single-threaded cycle loops limit the system size and timescales that can be explored. In this work, we developed PortWarp, a new cycle-accurate approach that efficiently models exascale-class HPC network designs by leveraging GPU accelerators. Here, a network port is the base unit of model parallelization and is mapped to a single CUDA thread, and the collection of ports that comprise a network router is grouped into a CUDA thread block. We compare the accuracy and performance of PortWarp to those of BookSim2. Using a multi-phased CUDA kernel approach per clock cycle, PortWarp’s switch allocator, virtual-channel allocator, credit/buffer state machine, and measurement semantics are decision-rule-equivalent to BookSim2. Across six dragonfly topologies and seventeen injection rates per topology (102 matched configurations spanning 36 to 5,346 routers), the PortWarp and BookSim2 latency–throughput curves agree to three-to-four decimal places on accepted rate and to within ∼2% on packet/flit latency below the saturation knee (inj ≤ 0.25). On a fixed-cycle apples-to-apples sweep executed on a single NVIDIA V100 GPU, PortWarp executes up to 177× faster than BookSim2. We observe that speedup rises steeply with topology size and then flattens in the mid-large regime—peaking on the 2,064-router topology—as the per-cycle iSLIP allocation cost grows with router radix. Because the thread-per-port mapping is hardware-agnostic, the identical validated build achieves 445× speedup on an NVIDIA H100 and 513× speedup on a B100 GPU, with the additional gain coming entirely from newer hardware. Per-port-occupancy instrumentation confirms that in the saturation regime where those speedups are realized, nearly every port-thread performs useful work each cycle. Overall, we are encouraged by PortWarp’s performance gains and believe this modeling approach could be applied to other HPC computer systems modeling domains._
