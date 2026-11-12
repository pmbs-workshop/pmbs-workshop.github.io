---
layout: default
---

**15:50 - 16:10**\\
**DMSim: Configurable Data Management Simulation Framework for Scientific Computing Grid**

Kuan-Chieh Hsu, Raees Ahmad Khan, Sairam Sri Vatsavai, Tasnuva Chowdhury, Ozgur Kilic, Sankha Dutta, David Park, Yihui Ren, Shinjae Yoo, Alexei Klimentov, Adolfy Hoisie\\
_Brookhaven National Laboratory, NY, United States_

Shengyu Feng, Yiming Yang\\
_Carnegie Mellon University, PA, United States_

Fatih Furkan Akman\\
_University of Massachusetts Amherst, MA, United States_

Rui Xue, John Rembrandt (Remy) Steele, Paul Nilsson, Tadashi Maeno, Verena Ingrid Martinez Outschoorn\\
_European Organization for Nuclear Research (CERN), Switzerland_

Tatiana Korchuganova, Joseph Boudreau\\
_University of Pittsburgh, PA, United States_

Scott Klasky, Norbert Podhorszki, Frederic Suter\\
_Oak Ridge National Laboratory, TN, United States_

Wei Yang, Kenny Yo\\
_SLAC National Accelerator Laboratory, CA, United States_

_Modern computing-grid simulators often emphasize system configuration and job allocation while simplifying data-management behavior because file movement introduces complex, stateful interactions over time. In data-centric infrastructures such as the Worldwide LHC Computing Grid (WLCG), however, replica placement and transfer policies directly affect network contention, job staging delay, storage utilization, and resiliency. Evaluating alternative policies on production system is difficult, leaving domain experts with limited ability to study the system-wide consequences of data-management decisions in a controlled environment._

_In this work, we propose a Data Management policy Simulation framework, DMSim, a configurable data-management simulation framework for scientific computing grid. DMSim extends CGSim with a lightweight global file system manager and SimGrid-based communication modeling to track file replicas, simulate contention-aware transfers, and expose configurable data-management policies. DMSim supports reactive transfers triggered by job input requests, proactive background transfer for replication and rebalancing, and explicit drop-in transfers for irregular production behaviors. We validate DMSim using historical PanDA and Rucio records by reconstructing initial file locations from transfer histories and comparing simulated job data-transfer queue times with production-derived observations. The results show that simulated staging times remain above a bandwidth-based lower bound and below observed total job queuing times, supporting as a practical platform for reproducible data-management policy exploration in large-scale scientific computing grids._
