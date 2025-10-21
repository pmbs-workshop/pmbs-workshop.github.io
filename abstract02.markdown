---
layout: default
---

**09:30 - 10:00**\\
**A Peak Performance Model for All-to-all on Hierarchical Systems and Its Applications**

Rohini Uma-Vaideswaran, Daniel Dotson, P. K. Yeung\\
_Georgia Institute of Technology, USA_

Joshua Romero, David Appelhans\\
_NVIDIA Corporation, USA_

_An accurate measure of communication performance is a key component of optimizing large scale high performance computing applications. This paper presents a model for the peak performance of all-to-all communication, in the context of systems composed of a hierarchy of interconnect bandwidths; a common trait of multi-GPU per node systems. We demonstrate an application of the model to distributed transposes, such as those encountered in distributed three-dimensional Fast Fourier Transforms. The model is validated on three different network architectures, using a variety of communication libraries, by measuring all-to-all and distributed transpose performance in a pseudo-spectral code for direct numerical simulations of 3D fluid turbulence. Both the model and the validation results provide insights into the impact of fast communication links located lower in the network hierarchy, the expected scaling for all-to-all bound problems, and performance considerations when selecting slab (1D) or pencil (2D) domain decompositions._