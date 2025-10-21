---
layout: default
---

**12:15 - 12:30**\\
**Experiences of Porting Structured and Unstructured Stencil Applications to FPGA using SYCL**

Zadok Storkey, Steven A. Wright, Ian Gray\\
_University of York, UK_

_In this paper we explore a stencil application written in SYCL on both CPU and FPGA architectures. We prepare two versions of the application, using a structured grid and an unstructured grid, and then optimise these implementations for CPU and FPGA architectures, with a focus on maintaining portability between both. We benchmark the application on an AMD CPU and an Intel Stratix 10 FPGA, seeking to answer whether we can target FPGAs productively from a single-source code base. Our findings indicate that for low arithmetic intensity kernels FPGA performance is lacking compared to CPU performance, suggesting that FPGA architectures may be unsuitable for such kernels, or that significant platform-specific optimisations may be required to reduce the performance gap, at the expense of developer productivity._