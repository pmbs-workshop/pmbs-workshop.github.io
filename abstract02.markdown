---
layout: default
---

**09:30 - 10:00**\\
**Comprehensive Performance Modeling and System Design Insights for Foundation Models**

Shashank Subramanian, Ermal Rrapaj, Peter Harrington, Steven Farrell, Brian Austin, Samuel Williams, Nicholas Wright, Wahid Bhimji\\
_Lawrence Berkeley National Laboratory, USA_

Smeet Chheda\\
_Stony Brook University, USA_

_Generative AI, in particular large transformer models, are increasingly driving HPC system design in science and industry. We analyze performance characteristics of such transformer models and discuss their sensitivity to the transformer type, parallelization strategy, and HPC system features (accelerators and interconnects). We utilize a performance model that allows us to explore this complex design space and highlight its key components. We find that different transformer types demand different parallelism and system characteristics at different training regimes. Large language models are performant with 3D parallelism and amplify network needs only at pre-training scales with reduced dependence on accelerator capacity and bandwidth. On the other hand, long-sequence transformers, representative of scientific foundation models, place a more uniform dependence on network and capacity with necessary 4D parallelism. Our analysis emphasizes the need for closer performance modeling of different transformer types, keeping system features in mind, and demonstrates a path towards this._