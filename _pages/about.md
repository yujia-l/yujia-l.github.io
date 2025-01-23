---
permalink: /
title: ""
excerpt: ""
author_profile: true
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

I'm Yujia Liu, currently a 3rd-year M.A. student in Information Art and Design at [Tsinghua University's Future Lab](https://thfl.tsinghua.edu.cn/en/), advised by Prof. [Yingqing Xu](https://thfl.tsinghua.edu.cn/en/yjdw/jzg/Central_Organization/Human_Computer_Interaction__and_User_Experience/Resercher/Yingqing_Xu.htm) and Prof. [Chun Yu](https://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/). 

With my background in Electrical Engineering and Computer Science (EECS), Mechanical Engineering, and Product Design, my previous research focused on <u>human-AI interaction</u>, <u>prototype engineering</u>, and their intersection. I am not only eager to develope adaptive sensing systems that enhance AI's understanding of human contexts, but also interested in applying these innovations to real-world scenarios such as smart healthcare and responsive educational technologies.

**I am now seeking PhD opportunities for Fall 2025.**

View my [CV](https://yujia-l.github.io/pdfs/CV.pdf).

<center>
<img src='images/proj/interests.png' alt="sym" width="70%">
</center>

# 🔥 News
- 2025/01: Our paper "**BrickSmart**" has been accepted by CHI 2025! 🎉
- 2025/01: Our paper "**Mentigo**" has been accepted by CHI 2025! 🎉
- 2025/01: Our paper "**Xstrings**" has been accepted by CHI 2025! 🎉

# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Accepted by CHI'25</div><img src='images/proj/BrickSmart.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[BrickSmart: Leveraging Generative AI to Support Children's Spatial Language Learning in Family Block Play](https://yujia-l.github.io/pdfs/BrickSmart.pdf)

**<u>Yujia Liu</u>**\*, Siyu Zha\*, Yuewen Zhang, Yanjin Wang, Yangming Zhang, Qi Xin, Lunyiu Nie, Chao Zhang, Yingqing Xu.
- Led a project to generate personalized block play instructions for creativity and eco-friendly reuse of bricks.
- Designed an AI Agent for children's spatial language learning in family block play, using LLMs and Gen-AI.
- Conducted a lab experiment with 24 parent-child pairs (children aged 6-8), demonstrating the system's effectiveness in enhancing spatial language skills.
- First author of this paper, accepted by ACM CHI’25.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Accepted by CHI'25</div><img src='images/proj/Mentigo.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[Mentigo: An Intelligent Agent for Mentoring Students in the Creative Problem Solving Process](https://yujia-l.github.io/pdfs/Mentigo.pdf)

Siyu Zha\*, **<u>Yujia Liu</u>**\*, Chengbo Zheng, Jiaqi Xu, Fuze Yu, Jiangtao Gong, Yingqing Xu.
- Co-led the development of Mentigo, an interactive agent using LLMs to mentor middle school students through the creative problem-solving (CPS) process, with dataset of real classroom interactions and an agentic workflow.
- Tested effectiveness through a comparative experiment with 12 students and feedback from 5 expert teachers, showing significant improvements in student engagement and creative outcomes. 
- Co-first author of this paper, accepted by ACM CHI’25.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">In submission</div><img src='images/proj/3DMirrorcle.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[3D-Mirrorcle: Bridging the Virtual and Real through Depth Alignment in Smart Mirror Systems](https://yujia-l.github.io/pdfs/3DMirrorcle.pdf)

**<u>Yujia Liu</u>**, Qi Xin, Chenzhuo Xiang, Yu Zhang, Lunyiu Nie, Xuhai Xu, Yingqing Xu.
- Led the development of 3DMirrorcle, a system addressing depth mismatch in AR smart mirrors using lenticular grating for a 3D display and algorithms for mirror reflection alignment and lenticular grating segmentation to align AR content with users' reflections.
- Conducted user studies across various tasks and scenarios, demonstrating superior performance in user experience compared to existing solutions.
- First author of the work.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Accepted by CHI'25</div><img src='images/proj/Xstrings.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[Xstrings: 3D printing cable-driven mechanism for actuation, deformation, and manipulation](https://yujia-l.github.io/pdfs/Xstrings.pdf)

Jiaji Li, Shuyue Feng, Maxine Alexandra Perroni-Scharf, **<u>Yujia Liu</u>**, Emily Guan, Guanyun Wang, Stefanie Mueller. 
- We developed Xstrings, a method for 3D printing cable-driven mechanisms in a single process, enabling four types of interactions: bend, twist, coil, and compress, activated by applying force to the cables.
- Investigated the impact of various printing parameters on maximum tensile strain and the repeatability of interactions without cable failure.
- This work has been accepted by ACM CHI’25. My work included mathematical derivation, test printing parameters, engineering the prototype, and writing parts of the paper.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CHI'24</div><img src='images/proj/MindShift_o.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
[MindShift: Leveraging Large Language Models for Mental-States-Based Problematic Smartphone Use Intervention](https://dl.acm.org/doi/pdf/10.1145/3613904.3642790)

Ruolan Wu, Chun Yu, Xiaole Pan, **<u>Yujia Liu</u>**, Ningning Zhang, Yue Fu, Yuhan Wang, Zhi Zheng, Li Chen, Qi-aolei Jiang, Xuhai Xu, Yuanchun Shi.
- We developed MindShift, a mobile app that uses LLMs to create dynamic, personalized content aimed at reducing problematic smartphone use, adapting to user context and mental states. 
- Wizard-of-Oz and interview studies were conducted to identify key mental states, and the system was validated in a 5-week field trial with 25 participants, showing significant improvements in smartphone usage patterns.
- This work was published on ACM CHI’24. My work included conducting the Wizard-of-Oz studies and the field trial, data analyzing, and illustrating the findings.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">UIST'24 Poster</div><img src='images/proj/KeyFlow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[KeyFlow: Acoustic Motion Sensing for Cursor Control on Any Keyboard](https://dl.acm.org/doi/pdf/10.1145/3672539.3686348)

**<u>Yujia Liu</u>**\*, Qihang Shan\*, Zhihao Yao, Qiuyu Lu.
- Led the development of KeyFlow, a system that integrates mouse functionality into keyboards using machine learning, enabling users to control the cursor by gliding their fingers across the surface without pressing keys.
- Our research shows that KeyFlow reduces hand movement by 78.3%, significantly enhancing typing efficiency.
- First author of work published at ACM UIST’24 Poster.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">UIST'24 Demo</div><img src='images/proj/FlexEOP.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FlexEOP: Flexible Shape-changing Actuator using Embedded Electroosmotic Pumps](https://dl.acm.org/doi/pdf/10.1145/3672539.3686785)

Tianyu Yu, Yang Liu, **<u>Yujia Liu</u>**, Qiuyu Lu, Teng Han, Haipeng Mi.
- We developed FlexEOP, a method for creating fully flexible electroosmotic pumps, enabling adaptable, self-contained shape-changing actuators.
- FlexEOP’s versatility is demonstrated in applications such as flexible displays, panels, curved surfaces, and soft robotic fibers.
- This work has been published on ACM UIST’24 Demo. My work contributions include experimental design and testing, modeling and rendering, and writing parts of the paper.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">UbiComp'24 Workshop</div><img src='images/proj/MoreThanShapes.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[More Than Shapes: Exploring the Tactile Parameters of Art Appreciation for the Visually Impaired](https://dl.acm.org/doi/pdf/10.1145/3675094.3678391)

MingYu Cui, Chao Yuan, **<u>Yujia Liu</u>**, Yingying Zheng.
- We enhanced art education for the visually impaired by focusing on Impressionist paintings through workshops.
- Experts translated key painting elements (layout, content, color, lighting, brushwork) into tactile forms, using clay modeling to help participants experience, analyze, and create art, enriching their engagement.
- This work has been published on ACM UbiComp’24 Workshop. My work was method development, paper writing.
</div>
</div>

# 🗂️ Projects

<div class='paper-box'><div class='paper-box-image'><div><img src='images/proj/smart_editing.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Automated Video Editing with Semantic Analysis and Aesthetic Evaluation**
- I led this industry-academic collaboration project to develop an intelligent video editing system that transforms photos and videos from users' smartphones into captivating highlight reels.
- Using film editing principles, we crafted coherent narratives, emphasized key moments, and ensured seamless harmony between music and visuals.
- My work was aligning musical elements with the film's style, identifying musical climaxes and video key moments, and creating rhythm, flow, and timing for cuts and transitions.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/proj/music_light.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Adaptive Music and Lighting Systems for Emotional Well-being**
- I led this industry-academic collaboration project, developing a smart home system that dynamically adjusts music and lighting to enhance the living experience.
- Developed a framework that aligns music-emotion-light and implemented a demo using the Philips Hue system.
- My work included literature review, creating music-emotion-light framework, and realizing the demo.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/proj/Vibration.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Design of Tactile Vibration Experience for Smartphones**
- This industry-academic collaboration project aimed to study vibration experiences across different smartphones. 
- We developed a framework that maps task urgency, importance, and metaphorical meaning to vibration timing, duration, intensity, frequency, and variability, based on a user study comparing smartphones from six brands.
- My work involved conducting literature research, developing the framework, and designing the user study.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/proj/Color1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**User’s Color Preferences of Pictures Across Diverse Displays**
- This industry-academic collaboration project involved six expert interviews and a user study with 89 participants to identify color preferences for various image types across different smartphone hardware. 
- We developed a framework to optimize picture color on specific smartphone hardware for improved aesthetics and user experience. 
- My work included designing and conducting the user study, adjusting images, and analyzing the data.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/proj/Speaker.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Ferrofluid Speaker Design Based on Emotion-Mapped Musical Elements** [Video](https://drive.google.com/file/d/1jVUglUCcuspq0HQMu4pqdy2FeszfBXGU/view?usp=drive_link)
- This was my undergraduate graduation project, where I designed and built a ferrofluid speaker that visually responds to music. 
- The ferrofluid inside the speaker moves in sync with the audio, displaying a range of motions, including linear, rotational, and pulsating patterns. These movements dynamically change with the rhythm and sound of the music. 
</div>
</div>

# 📖 Educations
- *2022.09 - Now*, Tsinghua University, M.A. in Information Art and Design.
- *2017.08 - 2022.07*, Tsinghua University, B.Eng. in Automation Engineering & B.A. in Industrial Design.

# 💻 Internships
- *2021.8 - Now*, Research Assistant @ Future Lab, Tsinghua University.
- *2024.6 - 2024.11*, Visiting Student @ HCI Engineering Group, CSAIL, MIT.
- *2022.10 - 2023.6*, Research Assistant @ Pervasive Interaction Laboratory, Tsinghua University.
- *2021.07 - 2021.10*, Product Manager Intern @ Tencent, ID/UX Design Group, Cyberverse Product Line.
- *2020.06 - 2020.08*, Algorithm Engineer Intern @ Beijing Ewaybot Technology, Robot Navigation Group.

# 🧘‍♀️ Hobbies
In my spare time, I enjoy practicing yoga, zazen meditation, photography, and knitting. 

I’m also a vlogger & content creator on [Xiaohongshu](https://www.xiaohongshu.com/user/profile/5ad8bc90e8ac2b398c6ac4a1) with ~100k subscribers. 
