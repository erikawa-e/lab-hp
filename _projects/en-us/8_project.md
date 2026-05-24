---
page_id: project_plasmon
layout: page
title: Plasmon–Photon Coherent Coupling
description: Coherent coupling between plasmons and photons in a clean two-dimensional electron system
img: assets/img/plasmon_avoided_crossing.png
importance: 4
category: research
---

A plasmon is a collective oscillation of many electrons that interacts strongly with electromagnetic waves. Plasmons have been widely used in sensing applications and are now attracting interest for quantum information technologies such as quantum computing. Electrons floating on liquid helium exist in an exceptionally clean environment, free of impurities and defects. This cleanliness preserves high-quality plasmon oscillations, enabling strong coherent coupling with RF photons in an LC resonator. Time-resolved measurements directly revealed periodic energy exchange between the two modes, confirming their coherent coupling.

<img src="{{ '/assets/img/plasmon_avoided_crossing.png' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 2rem;">The frequency of collective electron oscillations (plasmons) is tuned via the electrode voltage toward the resonance frequency of an electrical circuit (LC resonator). As the two frequencies approach each other, an avoided crossing appears — a phenomenon in which the two modes repel each other rather than crossing. This is key evidence that the plasmon and the LC circuit are coherently coupled in a quantum mechanical sense. When the two systems are strongly coupled, the originally independent modes hybridize and form two new mixed modes. The experimental data shown in the left panel agree well with the simulation results (right panel), validating the model. The blue dashed lines overlaid represent the theoretical plasmon frequency and reproduce the observed modes well.</p>

<img src="{{ '/assets/img/plasmon_time_resolved.png' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 0;">Time evolution of the reflected signal intensity after applying a 20 ns RF pulse. In the experimental results (left), periodic energy exchange between the plasmon and photon modes is clearly observed, demonstrating strong coherent coupling between the two. The right panel shows the theoretical simulation results, where the color indicates the RF electric field intensity stored in the LC resonator. The simulated energy exchange between the plasmon and photon modes reproduces the experimental observations well.</p>

<div style="margin-top:2rem;"></div>

<div class="publications">
<style>div.publications h2 { display: none; }</style>
{% bibliography --query @*[key=jennings2025plasmon] %}
</div>
