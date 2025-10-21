---
layout: default
---

**16:00 - 16:30**\\
**A GPU FFT Wrapper to Co-optimize Floating-Point Precision and Library Selection via Predictive Error Modeling**

Julius Lehner, Eishi Arima, Martin Schulz\\
_Technical University of Munich, Germany_

_Approximate and low-precision computing are essential for modern applications, and effectively leveraging available precision options can deliver substantial gains in performance and energy efficiency. We focus on the Fast Fourier Transform (FFT), a representative function used in scientific computing, and propose a wrapper library to exploit these options. Using multiple GPU-accelerated FFT libraries, we observe that different libraries excel in different regions of the performance–accuracy space and that these sweet spots depend on transform size and input content. Guided by these insights, we propose a framework that selects the best kernel (library and precision) on the fly to minimize runtime or energy while satisfying a specified error threshold. A lightweight machine learning model predicts per-kernel error at runtime from sampled input features. Experiments show over 98% selection accuracy and mean speedups exceeding 40\% compared to a double precision baseline. The framework integrates seamlessly with existing workflows as a wrapper library._