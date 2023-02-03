---
date: 2019-12-31T14:22:00Z
description: "We’re happy to share a keynote presented at the event of DevCon V (2019 in Osaka) about detecting cloned smart contracts by capturing high-level semantics from smart contract byte-code. We’ve implemented the tool EClone with this technique. When copying functions from a smart contract, the vulnerabilities come along. We show how to identify a vulnerability with EClone."
title: "Birthmarking Your Smart Contracts For Vulnerability Search, presented on DevCon V"
cover: "/img/events/2021-10-29-birthmarking-cover.jpeg"
categories: ["Events"]
---

We’re happy to share a keynote presented at the event of [DevCon V](https://archive.devcon.org/devcon-5/details/) (2019 in Osaka) about detecting cloned smart contracts by capturing high-level semantics from smart contract byte-code. We’ve implemented the tool EClone with this technique. When copying functions from a smart contract, the vulnerabilities come along. We show how to identify a vulnerability with EClone.

The abstract of this presentation is summarized below.

> In this talk, we will highlight an automatic vulnerability search technique for smart contracts. In the context of security, vulnerability search enables us to make quick responses to new threats and zero-day exploits. In those cases, well-designed analysis is far from prepared to deliver precise detection. Our vulnerability search technique can act as a complement in this setting to efficiently identify potentially vulnerable contracts without heavyweight in-depth reasoning and analysis. The key insight is to “birthmarking” a smart contract by abstracting its programming intents. Generally, the generation of birthmarks is realized via symbolically executing the byte-code of a smart contract and building global dependency on the fly. More specifically, both syntax features (e.g., number and type of instructions) and semantic features (e.g., load and store at the same storage) are considered in birthmarks. Then, the task of searching for a known vulnerability is converted to computing a similarity between a target contract (with the vulnerability) and a candidate contract (may/may not have the vulnerability). We have implemented a prototype to search for known vulnerabilities and conducted large-scale evaluations on real-world security issues. Particularly, we will use CVE­-2018-­10376 to explain how the search technique can help existing security analyzers.

{{< youtube "WZS-KrdXUcU" >}}
