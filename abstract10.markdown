---
layout: default
---

**14:30 - 15:00**\\
**Pretraining LLMs at Scale: Tuning Strategies and Performance Portability**

Adrián Pérez Diéguez, Àlex Batlle Casellas, Aleix Torres-Camps, Harris Teague,  Jordi Ros-Giralt\\
_Qualcomm, USA_

_Training large language models (LLMs) at scale presents challenges that demand careful co-design across software, hardware, and parallelization strategies. In this work, we introduce a communication-aware tuning methodology for optimizing LLM pretraining, and extend the performance portability metric to evaluate LLM-training efficiency across our systems. Our methodology, validated through LLM pretraining workloads at a leading global technology enterprise, delivered up to 1.6x speedup over default configurations. We further provide six key insights that challenge prevailing assumptions in LLM training performance, including the trade-offs between ZeRO stages, the default DeepSpeed communication collectives, and the critical role of batch size choices. Our findings highlight the need for platform-specific tuning and advocate for a shift toward end-to-end co-design to unlock performance efficiency in LLM training._