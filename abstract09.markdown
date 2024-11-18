---
layout: default
---

**14:30 - 15:00**\\
**AI-Assisted Design-Space Analysis of High-Performance Arm Processors**

Joseph Moore, Tom Deakin, Simon McIntosh-Smith\\
_University of Bristol, UK_

_This work quantifies the impact of microarchitectural features in modern high-performance Arm CPUs. To combat a parameter space that is too large to traverse naively, we employ a decision tree regression machine learning model to predict the number of execution cycles with 93.38% accuracy compared to the simulated cycles. We build on previous work by specializing our design to real-world HPC workloads and modernize our approach with updated search spaces, improved simulation frameworks, and over 180,000 simulated data points. We find empirically that vector length typically has the largest impact on HPC code performance at 25.91% of our performance weighting, followed by memory performance across all levels of the memory hierarchy, and the size of the reorder buffer and register files. Our results motivate deeper exploration of these parameters in both hardware design and simulation, as well as advancing the modelling of architectural simulation through the use of machine learning._