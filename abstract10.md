---
layout: default
---

**14:00 - 14:20**\\
**Benchmarking Physical GCD Placement Effects on Performance, Energy, and Co-Execution**

Arthur Lorenzon, Philippe Navaux\\
_Federal University of Rio Grande do Sul, Brazil_

Antigoni Georgiadou, James White III, Bronson Messer\\
_Oak Ridge National Laboratory, TN, United States_

Bruno Alvarez, Jordà Polo, Karl Schulz\\
_AMD, United States_

_GPU-accelerated supercomputers expose large populations of nominally identical resources that are often treated as interchangeable, even though physical device variability can affect performance and energy efficiency. This is particularly relevant for multi-die accelerators and workload co-execution, where outcomes depend on both workload compatibility and physical placement. We characterize these effects on Frontier using six synthetic workload classes. A solo campaign covers 600 node allocations and 4,800 AMD Instinct MI250X Graphics Compute Die (GCD) observations, while co-execution evaluates all workload pairs across 72 representative physical placements using matched solo baselines. Across the sampled population, best-to-worst GCD differences reach 18.7% in performance, 32.3% in average GPU-package power, and 36.9% in energy. Complementary co-executions approach ideal overlap and reduce energy by approximately 40%. Workload compatibility determines whether sharing is beneficial, while physical GCD placement determines its magnitude and stability, motivating GCD-aware scheduling to improve science per watt._
