---
layout: default
---

**14:00 - 14:30**\\
**MoE-Inference-Bench: Performance Evaluation of Mixture of Expert Large Language and Vision Models**

Krishna Teja Chitty-Venkata, Murali Emani, Venkatram Vishwanath\\
_Argonne National Laboratory, USA_

Sylvia Howland, Golara Azar, Daria Soboleva, Natalia Vassilieva\\
_Cerebras, USA_

Siddhisanket Raskar\\
_Pacific Northwest National Laboratory, USA_

_Mixture of Experts (MoE) models have enabled the scaling of Large Language Models (LLMs) and Vision Language Models (VLMs) by achieving massive parameter counts while maintaining computational efficiency. However, MoEs introduce several inference-time challenges, including load imbalance across experts and the additional routing computational overhead. To address these challenges and fully harness the benefits of MoE, a systematic evaluation of hardware acceleration techniques is essential. We present MoE-Inference-Bench, a comprehensive study to evaluate MoE performance across diverse scenarios. We analyze the impact of batch size, sequence length, and critical MoE hyperparameters such as FFN dimensions and number of experts on throughput. We evaluate several optimization techniques on Nvidia H100 GPUs, including pruning, Fused MoE operations, speculative decoding, quantization, and various parallelization strategies. Our evaluation includes MoEs from the Mixtral, DeepSeek, OLMoE and Qwen families. The results reveal performance differences across configurations and provide insights for the efficient deployment of MoEs._
