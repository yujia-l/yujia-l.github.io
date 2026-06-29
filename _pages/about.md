---
permalink: /
title: ""
excerpt: ""
author_profile: true
news_sidebar: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<h1 class="section-heading section-heading--first">{% include section-icon.html name="about" %} About Me</h1>

<div class="intro-block">
<div class="hero-intro" markdown="1">

Hi, I'm a Ph.D. student at [interactive structures lab](https://interactive-structures.org/) at [CMU HCII](https://hcii.cmu.edu/), advised by [Prof. Alexandra Ion](https://alexandraion.com/). 

My current work aim to explore how **metamaterial** can serve as interfaces that allow **AI** to assist humans in real-world applications, especially in **education** scenarios.

Before joining CMU, I got both undergraduate and master's degrees at [Tsinghua University](https://www.tsinghua.edu.cn/en/), with a background in Electrical Engineering and Computer Science (EECS), Mechanical Engineering, and Product Design.

View my [**CV**](https://yujia-l.github.io/pdfs/CV.pdf) (updated: 01/2026).

</div>
<div class="intro-block__image">
{% include interests-diagram.html %}
</div>
</div>

<h1 id="-publications" class="section-heading">{% include section-icon.html name="publications" %} Publications</h1>
<div class='paper-box'><div class="badge">CHI'26</div><div class='paper-box-image'><div><img src='images/proj/Exoskeleton.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[Towards Accessible Mobility Support: User-Centered Design of a Passive, Multi-Functional, Low-Cost Knee Exoskeleton](https://yujia-l.github.io/pdfs/Exoskeleton.pdf)

Yuyu Lin, **<u>Yujia Liu</u>**, Emma Kim, Alexandra Ion.
- We designed a fully passive knee exoskeleton that locks during stance and unlocks during swing using underfoot load as the trigger, enabling more natural walking (including stairs/slopes) without electronics. 
- The prototype combines load-triggered heel/toe switches with a mechanical AND gate and achieves lightweight, low-cost mobility support (0.95 kg, ~$38) in a sock-like form factor.
</div>
</div>


<div class='paper-box'><div class="paper-box-badges"><div class="badge">CHI'25</div><span class="award-badge"><span class="award-badge__short">🏅 Honorable Mention</span><span class="award-badge__full">🏅 Honorable Mention Award (Top 5%)</span></span></div><div class='paper-box-image'><div><img src='images/proj/BrickSmart.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[BrickSmart: Leveraging Generative AI to Support Children's Spatial Language Learning in Family Block Play](https://dl.acm.org/doi/10.1145/3706598.3714212)

**<u>Yujia Liu</u>**\*, Siyu Zha\*, Yuewen Zhang, Yanjin Wang, Yangming Zhang, Qi Xin, Lunyiu Nie, Chao Zhang, Yingqing Xu.
- We designed an AI Agent for children's spatial language learning in family block play, using LLMs and Gen-AI to generate personalized block play instructions for creativity and eco-friendly reuse of bricks.
- Conducted a lab experiment with 24 parent-child pairs (children aged 6-8), demonstrating the system's effectiveness in enhancing spatial language skills.
</div>
</div>

<div class='paper-box'><div class="badge">CHI'25</div><div class='paper-box-image'><div><img src='images/proj/Mentigo.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[Mentigo: An Intelligent Agent for Mentoring Students in the Creative Problem Solving Process](https://dl.acm.org/doi/10.1145/3706598.3713952)

Siyu Zha\*, **<u>Yujia Liu</u>**\*, Chengbo Zheng, Jiaqi Xu, Fuze Yu, Jiangtao Gong, Yingqing Xu.
- We developed Mentigo, an interactive agent using LLMs to mentor middle school students through the creative problem-solving (CPS) process, with dataset of real classroom interactions and an agentic workflow.
- Tested effectiveness through a comparative experiment with 12 students and feedback from 5 expert teachers, showing significant improvements in student engagement and creative outcomes. 
</div>
</div>

<div class='paper-box'><div class="paper-box-badges"><div class="badge">CHI'25</div><span class="award-badge"><span class="award-badge__short">🏅 Honorable Mention</span><span class="award-badge__full">🏅 Honorable Mention Award (Top 5%)</span></span></div><div class='paper-box-image'><div><img src='images/proj/Xstrings.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[Xstrings: 3D printing cable-driven mechanism for actuation, deformation, and manipulation](https://dl.acm.org/doi/10.1145/3706598.3714282)

Jiaji Li, Shuyue Feng, Maxine Alexandra Perroni-Scharf, **<u>Yujia Liu</u>**, Emily Guan, Guanyun Wang, Stefanie Mueller. 
- We developed Xstrings, a method for 3D printing cable-driven mechanisms in a single process, enabling four types of interactions: bend, twist, coil, and compress, activated by applying force to the cables.
- Investigated the impact of various printing parameters on maximum tensile strain and the repeatability of interactions without cable failure.
</div>
</div>

<div class='paper-box'><div class="badge">arXiv</div><div class='paper-box-image'><div><img src='images/proj/3DMirrorcle.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[3D-Mirrorcle: Bridging the Virtual and Real through Depth Alignment in Smart Mirror Systems](https://arxiv.org/abs/2310.13617)

**<u>Yujia Liu</u>**, Qi Xin, Chenzhuo Xiang, Yu Zhang, Lunyiu Nie, Xuhai Xu, Yingqing Xu.
- We developed 3DMirrorcle, a system addressing depth mismatch in AR smart mirrors using lenticular grating for a 3D display and algorithms for mirror reflection alignment and lenticular grating segmentation to align AR content with users' reflections.
- Conducted user studies across various tasks and scenarios, demonstrating superior performance in user experience compared to existing solutions.
</div>
</div>

<div class='paper-box'><div class="badge">CHI'24</div><div class='paper-box-image'><div><img src='images/proj/MindShift_o.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[MindShift: Leveraging Large Language Models for Mental-States-Based Problematic Smartphone Use Intervention](https://dl.acm.org/doi/10.1145/3613904.3642790)

Ruolan Wu, Chun Yu, Xiaole Pan, **<u>Yujia Liu</u>**, Ningning Zhang, Yue Fu, Yuhan Wang, Zhi Zheng, Li Chen, Qi-aolei Jiang, Xuhai Xu, Yuanchun Shi.
- We developed MindShift, a mobile app that uses LLMs to create dynamic, personalized content aimed at reducing problematic smartphone use, adapting to user context and mental states. 
- Wizard-of-Oz and interview studies were conducted to identify key mental states, and the system was validated in a 5-week field trial with 25 participants, showing significant improvements in smartphone usage.
</div>
</div>

<div class='paper-box'><div class="badge">UIST'24 Poster</div><div class='paper-box-image'><div><img src='images/proj/KeyFlow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[KeyFlow: Acoustic Motion Sensing for Cursor Control on Any Keyboard](https://dl.acm.org/doi/10.1145/3672539.3686348)

**<u>Yujia Liu</u>**\*, Qihang Shan\*, Zhihao Yao, Qiuyu Lu.
- We developed KeyFlow, a system that integrates mouse functionality into keyboards using machine learning, enabling users to control the cursor by gliding their fingers across the surface without pressing keys.
- Our research shows that KeyFlow reduces hand movement by 78.3%, significantly enhancing typing efficiency.
</div>
</div>

<div class='paper-box'><div class="badge">UIST'24 Demo</div><div class='paper-box-image'><div><img src='images/proj/FlexEOP.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FlexEOP: Flexible Shape-changing Actuator using Embedded Electroosmotic Pumps](https://dl.acm.org/doi/10.1145/3672539.3686785)

Tianyu Yu, Yang Liu, **<u>Yujia Liu</u>**, Qiuyu Lu, Teng Han, Haipeng Mi.
- We developed FlexEOP, a method for creating fully flexible electroosmotic pumps, enabling adaptable, self-contained shape-changing actuators.
- FlexEOP’s versatility is demonstrated in applications such as flexible displays, panels, curved surfaces, and soft robotic fibers.
</div>
</div>

<div class='paper-box'><div class="badge">UbiComp'24 Workshop</div><div class='paper-box-image'><div><img src='images/proj/MoreThanShapes.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[More Than Shapes: Exploring the Tactile Parameters of Art Appreciation for the Visually Impaired](https://dl.acm.org/doi/10.1145/3675094.3678391)

MingYu Cui, Chao Yuan, **<u>Yujia Liu</u>**, Yingying Zheng.
- We enhanced art education for the visually impaired by focusing on Impressionist paintings through workshops.
- Experts translated key painting elements (layout, content, color, lighting, brushwork) into tactile forms, using clay modeling to help participants experience, analyze, and create art, enriching their engagement.
</div>
</div>

<h1 id="-projects" class="section-heading">{% include section-icon.html name="projects" %} Projects</h1>

{% include project-grid.html %}

<h1 id="-educations" class="section-heading">{% include section-icon.html name="educations" %} Educations</h1>

<ul class="resume-list">
<li><em>2025.08 – Now</em>, Carnegie Mellon University, Ph.D. in Computer Science.</li>
<li><em>2022.09 – 2025.07</em>, Tsinghua University, M.A. in Information Art and Design.</li>
<li><em>2017.08 – 2022.07</em>, Tsinghua University, B.Eng. in Automation Engineering &amp; B.A. in Industrial Design.</li>
</ul>

<h1 id="-internships" class="section-heading">{% include section-icon.html name="internships" %} Internships</h1>

<ul class="resume-list">
<li><em>2021.08 – 2025.06</em>, Research Assistant @ Future Lab, Tsinghua University.</li>
<li><em>2024.06 – 2024.11</em>, Visiting Student @ HCI Engineering Group, CSAIL, MIT.</li>
<li><em>2022.10 – 2023.06</em>, Research Assistant @ Pervasive Interaction Laboratory, Tsinghua University.</li>
<li><em>2021.07 – 2021.10</em>, Product Manager Intern @ Tencent, ID/UX Design Group, Cyberverse Product Line.</li>
<li><em>2020.06 – 2020.08</em>, Algorithm Engineer Intern @ Beijing Ewaybot Technology, Robot Navigation Group.</li>
</ul>

<h1 id="-hobbies" class="section-heading">{% include section-icon.html name="hobbies" %} Hobbies</h1>

<div class="hobbies-block" markdown="1">

In my spare time, I enjoy practicing yoga, zazen meditation, photography, and recently got into squash.

I’m also a vlogger & content creator on [RedNote](https://www.xiaohongshu.com/user/profile/5ad8bc90e8ac2b398c6ac4a1) with ~110k subscribers. 

</div>
