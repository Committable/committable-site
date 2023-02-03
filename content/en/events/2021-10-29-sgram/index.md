---
date: 2018-12-31T13:44:00Z
description: "We’re happy to share a keynote presented at the event of DevCon IV (2018 in Prague) about helping audit Solidity smart contracts by identifying potential vulnerabilities with N-gram language modeling techniques."
title: "S-gram: Statistical Linter For Incomplete Solidity Smart Contracts, presented on DevCon IV"
cover: "/img/events/2021-10-29-sgram-cover.jpeg"
categories: ["Events"]
---

We’re happy to share a keynote presented at the event of [DevCon IV](https://archive.devcon.org/devcon-4/details/) (2018 in Prague) about helping audit Solidity smart contracts by identifying potential vulnerabilities with N-gram language modeling techniques.

The abstract of this presentation is summarized below.

> Smart contracts, as a promising and powerful application on the Ethereum blockchain, have been growing rapidly in the past few years. Since they are highly vulnerable to different forms of attacks, their security becomes a top priority. However, existing security auditing techniques are either limited in finding vulnerabilities (rely on predefined bug patterns) or very expensive (rely on program analysis), thus are insufficient for Ethereum. To mitigate these limitations, we proposed a novel semantic-aware security auditing technique called S-gram for Ethereum. The key insight is a combination of N-gram language modeling and lightweight static semantic labeling, which can learn statistical regularities of contract tokens and capture high-level semantics as well (e.g., flow sensitivity of a transaction). S-gram can be used to predict potential vulnerabilities by identifying irregular token sequences and optimize existing in-depth analyzers (e.g., symbolic execution engines, fuzzers etc.). We have implemented S-gram for Solidity smart contracts in Ethereum. The evaluation demonstrated the potential of S-gram in identifying possible security issues.

{{< youtube "tCZGgDSAMAs" >}}
