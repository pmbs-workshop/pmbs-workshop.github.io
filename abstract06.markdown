---
layout: default
---

**11:30 - 12:00**\\
**Performance Analysis of Runtime Handling of Zero-Copy for OpenMP Programs on MI300A APUs**

Carlo Bertolli, Thorsten Blass, Jan-Patrick Lehr, Doru Bercea, Dhruva Chakrabarti, Lynd Stringer, Nicole Aschenbrenner, Lawrence Meadows, Ron Liberman\\
_AMD, USA_

_In current discrete GPU systems, the penalty of data movement between host and device memory is inevitable, forcing many large-scale applications to include optimizations that amortize this cost. On systems like the AMD Instinct™ MI300A series accelerators, based on the accelerated processing unit (APU) architecture, host and device memories are unified into a single physical storage. On an APU, the GPU can access memory in the same way the CPU does, thus avoiding the need for additional data movement (zero-copy). To inform developers of MI300A's expected advantages and potential overheads, we follow an experimental approach to study our OpenMP implementation that leverages MI300A zero-copy. Performance results show that zero-copy is faster than the legacy “copy” implementation by a ratio of 1.2X-2.3X for a production-ready application, but that it incurs up to 11% penalty for one SPECaccel 2023 benchmark._