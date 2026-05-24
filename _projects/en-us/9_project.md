---
page_id: project_neon
layout: page
title: "Electrons on Solid Neon: Toward High-Fidelity Qubits"
description: Nb-Ti-N nanowire resonators and prospects for spin-photon coupling with electrons on solid neon
img: assets/img/neon_electron_deposition.png
importance: 4
category: research
---

Electrons floating on solid neon can maintain quantum states for a long time, making them a promising candidate for qubits. In this work, we first demonstrated that superconducting resonators retain their high performance even after solid neon is deposited on them and electrons are loaded onto the neon surface. This is an important result showing that quantum devices based on electrons on solid neon can be realistically fabricated. Furthermore, we theoretically analyzed designs in which carefully arranged micromagnets enable strong coupling between the electron spin and microwave photons. Our analysis shows that, even using naturally occurring neon, single-qubit gate fidelities exceeding 99.99% and two-qubit gate fidelities exceeding 99.9% are achievable — precision sufficient for practical quantum computing.

<img src="{{ '/assets/img/neon_electron_deposition.png' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 0;">Time evolution of the superconducting resonator's resonance peaks (red crosses) during the deposition of electrons onto the solid neon surface. Each time a voltage is applied to the filament (red dashed lines), electrons are emitted and the resonance frequency shifts stepwise. After sufficient time has elapsed, the frequency stabilizes, confirming that the electrons have settled onto the solid neon surface. The inset (bottom left) shows the current–voltage characteristics of the filament.</p>

<div style="margin-top:2rem;"></div>

<div class="publications">
<style>div.publications h2 { display: none; }</style>
{% bibliography --query @*[key=tian2025neon] %}
</div>
