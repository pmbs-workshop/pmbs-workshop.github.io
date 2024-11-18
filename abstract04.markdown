---
layout: default
---

**10:50 - 11:10**\\
**Microarchitectural comparison and in-core modeling of state-of-the-art CPUs: Grace, Sapphire Rapids, and Zen 4**

Jan Laukemann, Georg Hager, Gerhard Wellein\\
_University of Erlangen-Nuremberg, Germany_

_With NVIDIA’s release of the Grace Superchip, all three big semiconductor companies in HPC (AMD, Intel, NVIDIA) are currently competing in the race for the best CPU. In this work we analyze the performance of these state-of-the-art CPUs and create an accurate in-core performance model for their microarchitectures (Zen 4, Golden Cove, and Neoverse V2), extending the Open Source Architecture Code Analyzer (OSACA) tool and comparing it with LLVM-MCA. Starting from the peculiarities and upsides/downsides of a single core, we extend our comparison by a variety of microbenchmarks and the capabilities of a full node. The “write-allocate (WA) evasion” feature, which can automatically reduce the memory traffic caused by write misses, receives special attention; we show that the Grace Superchip has a next-to-optimal implementation of WA evasion, and that the only way to avoid write allocates on Zen 4 is the explicit use of non-temporal stores._