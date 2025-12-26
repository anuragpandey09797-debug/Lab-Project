// My personal study notes collection 📚
// Started collecting these from 1st year - hope they help you too!

const notesData = {
  "1st Year": {
    "Programming in C": {
      "Unit 1": "https://cdn-wl-assets.classplus.co/production/436362/cf0588f7-01e6-4874-bb10-1e2f12bcb86a.pdf",
      "Unit 2": "https://cdn-wl-assets.classplus.co/production/436362/2445e9c7-5efe-414e-b8ce-4f18fbb5ec86.pdf",
      "Unit 3": "https://cdn-wl-assets.classplus.co/production/436362/e677ca31-ed54-45e6-982e-913170285dd8.pdf",
      "Unit 4": "https://cdn-wl-assets.classplus.co/production/436362/24603d81-cf83-4ea9-8977-347722e9e0a7.pdf",
      "Unit 5": "https://cdn-wl-assets.classplus.co/production/436362/f5a0c0b3-e061-4dc3-ab24-930443a12854.pdf"
    },
    "Mathematics I": {
      "Unit 1": "https://www.mediafire.com/file/lontue5jo08aj4y/M-1_UNIT-1_ONE_SHOT_REVISION_NOTES_42396404_2025_06_02_18_02.pdf/file",
      "Unit 2": "https://www.mediafire.com/file/k8iga5tqb3ore5o/M-1_UNIT-2_ONE_SHOT_REVISION_NOTES_42396402_2025_06_02_18_02.pdf/file",
      "Unit 3": "https://www.mediafire.com/file/00v52abtm0fev6j/M-1_UNIT-3_ONE_SHOT_REVISION_NOTES_42396406_2025_06_02_18_03.pdf/file",
      "Unit 4": "https://www.mediafire.com/file/x29zawq3b8duzh2/M-1_UNIT-4_ONE_SHOT_REVISION_NOTES_42396403_2025_06_02_18_03.pdf/file",
      "Unit 5": "https://www.mediafire.com/file/gn3km0ydobxb6ti/M-1_UNIT-5_ONE_SHOT_REVISION_NOTES_42396405_2025_06_02_18_03.pdf/file"
    },
    "Mathematics II": {
      "Unit 1": "https://www.mediafire.com/file/0yu7mzdjimuade5/M-2_UNIT-1_ONE_SHOT_NOTES_46321626_2025_06_02_17_41.pdf/file",
      "Unit 2": "https://www.mediafire.com/file/7fvmqxdqeybfi6t/M-2_UNIT-2_ONE_SHOT_NOTES_46321627_2025_06_02_17_41.pdf/file",
      "Unit 3 Part I": "https://www.mediafire.com/file/v9herfjvu1tur5h/M-2_UNIT-3_ONE_SHOT_NOTES_%2528_P-1%2529_46321628_2025_06_02_17_42.pdf/file",
      "Unit 3 Part II": "https://www.mediafire.com/file/ys69a5q6ny6yfe9/M-2_UNIT-3_ONE_SHOT_NOTES_%2528P-2%2529_46321629_2025_06_02_17_42.pdf/file",
      "Unit 4": "https://www.mediafire.com/file/kbq0q51vpsihy56/M-2_UNIT-4_ONE_SHOT_NOTES_46321624_2025_06_02_17_42.pdf/file",
      "Unit 5": "https://www.mediafire.com/file/dzt2a5s12cw08xj/M-2_UNIT-5_ONE_SHOT_NOTES_46321625_2025_06_02_17_42.pdf/file"  
    },
    "Physics": {
      "Unit 1 Part I": "https://www.mediafire.com/file/oohtx5xzp1w14ri/Physics_UNIT-1_ONE_SHOT_Revision_%2528_Part-I_%2529_Notes__43624059_2025_06_02_17_59.pdf/file",
      "Unit 1 Part II": "https://www.mediafire.com/file/huvth40q2c2kpb1/Physics_UNIT-1_ONE_SHOT_Revision_%2528_Part-II_%2529_Notes__43624058_2025_06_02_17_59.pdf/file",
      "Unit 2": "https://www.mediafire.com/file/r5xrseyx5at8ah9/Physics_UNIT-2_ONE_SHOT_Revision_Notes_43624060_2025_06_02_17_59.pdf/file",
      "Unit 3 Part I": "https://www.mediafire.com/file/vbglg8d2z0yab5w/Physics_UNIT-3__ONE_SHOT_Revision_%2528_Part-I_%2529_Notes_43624061_2025_06_02_17_59.pdf/file",
      "Unit 3 Part II": "https://www.mediafire.com/file/udogtdhn15vvpms/Physics_UNIT-3__ONE_SHOT_Revision_%2528_Part-II_%2529_Notes_43624067_2025_06_02_17_59.pdf/file",
      "Unit 4 - LASER": "https://www.mediafire.com/file/wqc1mk0ybacflg5/Physics__U-4__LASER_ONE_SHOT_Notes_43624066_2025_06_02_17_59.pdf/file",
      "Unit 4 - Fiber Optics": "https://www.mediafire.com/file/6oujv7bmgdk6qd8/Physics__U-4__Fiber_Optics_ONE_SHOT_Notes_43624064_2025_06_02_17_59.pdf/file",
      "Unit 5 - Superconductors": "https://www.mediafire.com/file/hiuvkafxth2jqjn/PHYSICS_U-5_ONE_SHOT_Superconductors_Notes_43624065_2025_06_02_17_59.pdf/file"
    },
    "Chemistry": {
      "Unit 1": "https://www.mediafire.com/file/7wjfqdmzlpzfri6/CHEM_UNIT-1_Hand_Written_Notes_43522495_2025_06_02_18_03.pdf/file",
      "Unit 2": "https://www.mediafire.com/file/vsvmo83w4lqoyvg/CHEM_U-2_Hand_Written_Notes%2528ONE_SHOT%2529_43522497_2025_06_02_18_04.pdf/file",
      "Unit 3": "https://www.mediafire.com/file/nsuv4062m5epzgs/CHEM_U-3_Hand_Written_Notes%2528ONE_SHOT%2529_43522498_2025_06_02_18_04.pdf/file",
      "Unit 4": "https://www.mediafire.com/file/rhp4tqa8oqna4j5/CHEM_U-4_Hand_Written_Notes%2528ONE_SHOT%2529_43522496_2025_06_02_18_11.pdf/file",
      "Unit 5": "https://www.mediafire.com/file/ql5as72ld9jt86w/CHEM_U-5_Hand_Written_Notes_43522499_2025_06_02_18_04.pdf/file"
    },
    "FME (Fundamentals of Mechanical Engineering)": {
      "Unit 1": "https://cdn-wl-assets.classplus.co/production/436362/b0f2a7e8-5c63-47b2-afea-fd092c0b38a9.pdf",
      "Unit 2": "https://cdn-wl-assets.classplus.co/production/436362/181c18a8-c4ef-4585-8e8f-93b45bf55ceb.pdf",
      "Unit 3": "https://cdn-wl-assets.classplus.co/production/436362/cf8aaaae-33ea-4465-b1d3-36a129d41384.pdf",
      "Unit 4": "https://cdn-wl-assets.classplus.co/production/436362/e00b2f43-e2ce-452c-9ead-9f4d67d5c2ba.pdf",
      "Unit 5": "https://cdn-wl-assets.classplus.co/production/436362/2b088a17-1ada-47d6-86a8-c63143988419.pdf"
    },
    "Electronics": {
      "Unit 1": "https://www.mediafire.com/file/izvq8zrghrg7nt8/BEC_UNIT-1_Combined_Notes_57858602_2025_06_04_18_52.pdf/file",
      "Unit 2": "https://www.mediafire.com/file/73g8ffj3wqp392y/FEC_UNIT-2__COMBINED_NOTES_57858606_2025_06_04_18_52.pdf/file",
      "Unit 3": "https://www.mediafire.com/file/s7n7dk3zy11dt23/Electronics_UNIT-3__COMBINED_NOTES_57858615_2025_06_04_18_53.pdf/file",
      "Unit 4": "https://www.mediafire.com/file/hviwhc3v3jswpfu/Electronics_UNIT-4__COMBINED_NOTES_57858622_2025_06_04_18_53.pdf/file",
      "Unit 5": "https://www.mediafire.com/file/br65ue6o8epssr7/FEC_UNIT-5_by_Vimal_Sir_COMBINED_NOTES_57858629_2025_06_04_18_53.pdf/file",
      "Unit 5 Numericals": "https://www.mediafire.com/file/8itnj8srltq8gfn/ELECTRONIS_U-5_AKTU_NUMERICALS_%2528PYQs%2529_57858601_2025_06_04_18_53.pdf/file"
    },
    "Electrical Engineering": {
      "Unit 1": "https://www.mediafire.com/file/pjg2rkndvf7150q/BEE_U-1_ONE_SHOT_Revision_Notes_41157083_2025_06_02_18_06.pdf/file",
      "Unit 2": "https://www.mediafire.com/file/an6cldoqsptg2l4/BEE_U-2_ONE_SHOT_Revision_Notes_41157084_2025_06_02_18_06.pdf/file",
      "Unit 3": "https://www.mediafire.com/file/nl69qoe0j9e51gf/BEE_U-3_ONE_SHOT_Revision_Notes_41157086_2025_06_02_18_07.pdf/file",
      "Unit 4": "https://www.mediafire.com/file/dywf54kkarp4mf6/BEE_U-4_ONE_SHOT_Revision_Notes_41157085_2025_06_02_18_06.pdf/file",
      "Unit 5": "https://www.mediafire.com/file/gcz1aif8zvqr0jq/BEE_U-5_ONE_SHOT_Revision_Notes_45192633_2025_06_02_18_07.pdf/file"
    },
    "Environmental Science (EVS)": {
      "Unit 1": "https://cdn-wl-assets.classplus.co/production/436362/2d677c8f-034c-45aa-9196-5d9d4a430a91.pdf",
      "Unit 2": "https://cdn-wl-assets.classplus.co/production/436362/2aa55b0c-a562-40f0-be28-4ce0f9de85bd.pdf",
      "Unit 3": "https://cdn-wl-assets.classplus.co/production/436362/7efca2da-fb41-46b9-8f32-2180827370f9.pdf",
      "Unit 4": "https://cdn-wl-assets.classplus.co/production/436362/782deb1f-a303-4792-a6c6-5639e4a372a8.pdf",
      "Unit 5": "https://cdn-wl-assets.classplus.co/production/436362/7e735827-f576-4e9b-983d-544058ff11d9.pdf"
    }
  },
  "2nd Year": {
    "Computer Organization": {
      "Unit 1 - Introduction to Functional Units, Buses, Processor Organization": "https://drive.google.com/file/d/1g5918L0xdORGEGRY9IHV5W9XUZXp0PFy/view",
      "Unit 2 - Arithmetic and Logic Unit, Multiplication, Division, Floating-Point Operations": "https://drive.google.com/file/d/1g9L95dpN75dym5ITX-NzQAudIVO4Re5G/view",
      "Unit 3 – Control Unit Design, Instruction Cycle, Microprogramming, Pipelining": "https://drive.google.com/file/d/1fJ_lw9WCJOKRZRwxTupbsSpyHzFyxRWS/view",
      "Unit 4 – Memory Organization, Cache Memories, Virtual Memory": "https://drive.google.com/file/d/1fXTWDby3zUg3aqcY5AeUf-NopcGLJQBJ/view",
      "Unit 5 – Input/Output Organization, Modes of Data Transfer, Communication Interfaces": "https://drive.google.com/file/d/1fFUYeGdTITRzzxtJPfMxl-8xJ0uSon1Y/view"
    },
    "Data Structures": {
      "Unit 1: Introduction to Data Structures ": "https://drive.google.com/file/d/1gQDwFFSHGFZ4rCtz6A5oH3G3QN69azg0/view",
      "Unit 2 - Stacks & Queues, and Recursion": "https://drive.google.com/file/d/1fCl_aDPsBsi8dQ9wh-ddg0w3zCPZTZ8V/view", 
      "Unit 3: Searching, Sorting, and Hashing": "https://drive.google.com/file/d/1fCl_aDPsBsi8dQ9wh-ddg0w3zCPZTZ8V/view",
      "Unit 4: Trees and Their Applications": "https://drive.google.com/file/d/1fDD1wqb7Osd2TId25KVNnPYfEqXfwUx7/view",
      "Unit 5: Graphs and Shortest Path ": "https://drive.google.com/file/d/1fDD1wqb7Osd2TId25KVNnPYfEqXfwUx7/view"
    },
    "DSTL": {
      "Unit 1:": "https://drive.google.com/file/d/1dvI8B_-YZ0prczm-FEKZFNwuoRv9syya/view",
      "Unit 2": "https://drive.google.com/file/d/1e64C665p690G_eszMGaajZUFuyKo3tVU/view", 
      "Unit 3": "https://drive.google.com/file/d/1eidtEAbYsr5Jl1rYF8ZFc2FNP5wjrIRW/view",
      "Unit 4: ": "https://drive.google.com/file/d/1ehbNmyAN14ztWANqgff2aP9vT6pt0HCf/view",
      "Unit 5: ": "https://drive.google.com/file/d/1ekw8SdSbWVBEvODGStZFFDdE7gzJxKoC/view"
    },
    "Math4": {
      "Unit 1 - ": "https://drive.google.com/file/d/1m0Qd979LpK6IA0AUBV6DRrcl5OxSGqHT/view",
      "Unit 2 - ": "https://drive.google.com/file/d/1m8UxMEcNyAaQiFZdKGCMhNHa5Z6Ji5q-/view", 
      "Unit 3 - ": "https://drive.google.com/file/d/1m36F2JENpn1Og1JCGse2IfFC9QY8rY0d/view",
      "Unit 4 - ": "https://drive.google.com/file/d/1mSP12o1ZvViUd2teKpyVbgg_I3DnplMP/view",
      "Unit 5 - ": "https://drive.google.com/file/d/1mNKFyZecifQNfjmev52t4HZ2lUVsanwI/view"
    },
    "Object oriented programming with java": {
      "Unit 1 - ": "https://drive.google.com/file/d/1GRKXCmP2IstbxYwEYmuv03zLggMfjv1q/view",
      "Unit 2 - ": "https://drive.google.com/file/d/1CBjkl8qFxSTmK94p_HipNfrsh79IbeH3/view", 
      "Unit 3 - ": "https://drive.google.com/file/d/1_Ymebn07v7jUJF11CxM0z0gCS_yiLf7F/view",
      "Unit 4 - ": "https://drive.google.com/file/d/1VfFkq4nxJHPxLsHKvHCwbk6yFD7Uzh_e/view",
      "Unit 5 - ": "https://drive.google.com/file/d/18RirfYjFKBueXgPZljyIF8EuBFc1ajY4/view"
    },
    "Python Programming": {
      "Unit 1 - ": "https://drive.google.com/file/d/1hMhyabIn4poanRtOb_9_VsXYO76dEO-C/view",
      "Unit 2 -": "https://drive.google.com/file/d/1hgQ3emq2UdZm787fK_Y4Qo02a-vP1-Vr/view", 
      "Unit 3 - ": "https://drive.google.com/file/d/1hOhetI-c21czxseC5EZfrcI_N_UEt7GC/view",
      "Unit 4 - ": "https://drive.google.com/file/d/1hRBYpiMG36brdRh0Ou54lqBiD6sLwxck/view",
      "Unit 5 -": "https://drive.google.com/file/d/1hPp_O_IYWabD5DZ7M90rmq1hY81AOzm2/view"
    },
    "Cyber security": {
      "Unit 1 - ": "https://drive.google.com/file/d/1gk07xsgL0Taz17GJ4J2qJDNW6nalg92_/view",
      "Unit 2 -": "https://drive.google.com/file/d/1glWlhV800g1U9yyQxenQulKI4Nk-upl-/view", 
      "Unit 3 - ": "https://drive.google.com/file/d/1fAaRkS7t00hGhajzWNpAIIs3E8TQnLYz/view",
      "Unit 4 - ": "https://drive.google.com/file/d/1tY6eDa7lt7McnUe-aH1ytD9-v-DE1Pzq/view",
      "Unit 5 -": "https://drive.google.com/file/d/1nWKMTCaU85fY9HQXXDMs3QfVno465HhM/view"
    },
    "Technical Communication": {
      "Unit 1 - ": "https://drive.google.com/file/d/1-rqOsIL2N-Ec3nouoHaKIUf830pni0bz/view",
      "Unit 2 -": "https://drive.google.com/file/d/1pJURRDwvKY7C80lai1Dyq-jmQ_9K5SGz/view", 
      "Unit 3 - ": "https://drive.google.com/file/d/1U__MC7APqbQBQhdc3FbqzggBVhYJ2q1m/view",
      "Unit 4 - ": "https://drive.google.com/file/d/1il97y3G9Jy3GJ6dv0rGvkIOrp11W4KwD/view",
      "Unit 5 -": "https://drive.google.com/file/d/16A2Fe1xegeFaZaD60leRQ10OVlA2nWQt/view"
    },
    "Operating System": {
      "Unit 1 - ": "https://drive.google.com/file/d/1_JyBBGpRsIauBWJsUYDXkmvsorAlAXe6/view",
      "Unit 2 -": "https://drive.google.com/file/d/1i9XiuFn8kfhcuXkkzUBAdGD2Ehxeumg2/view", 
      "Unit 3 - ": "https://drive.google.com/file/d/100OnWlRnKiQrhT6Gfh6aHz4sCIDano0J/view",
      "Unit 4 - ": "https://drive.google.com/file/d/11UAjqLdSlZxBb54_jTR040zWNUjYWSK5/view",
      "Unit 5 -": "https://drive.google.com/file/d/1DsHMN_2gqooFxb8CTP4ZukrBo5UmAsZ-/view"
    },
    "Universal Human Values": {
      "Unit 1 - ": "https://drive.google.com/file/d/1ncun0173QR-ea5ATd-AzpIsrAZ5X4B1y/view",
      "Unit 2 -": "https://drive.google.com/file/d/1nfvd4nNpV-s-CxmRuwUhA91h1BwcBp49/view", 
      "Unit 3 - ": "https://drive.google.com/file/d/1ngGCasMFSQlnT1NwZ2pd3zpzt85BAoLU/view",
      "Unit 4 - ": "https://drive.google.com/file/d/1nmayvrjEvMVaDsinnO6ZPSajL2b7C8P0/view",
      "Unit 5 -": "https://drive.google.com/file/d/1np8s76YqTv51fnYBLHo70v_zlRtrZb6R/view"
    },
    "Theory of Automata and Formal Languages": {
      "Unit 1 - ": "https://drive.google.com/file/d/1yYwBvGUcMW8LE2xUegAxe02as2ZoM05E/view",
      "Unit 2 -": "https://drive.google.com/file/d/1yB7EVdneoF58ZIrcI36mJVPAkFxnB9Pq/view", 
      "Unit 3 - ": "https://drive.google.com/file/d/1ycCX1G8JECXaoP9mF2UFCAP8rsVh4qvK/view",
      "Unit 4 - ": "https://drive.google.com/file/d/1yXu1zfzcaMK5PrkLu_g0zsV76Z49qwTR/view",
      "Unit 5 -": "https://drive.google.com/file/d/1y87PXdTde6ZoszWKdBDHyUegl3vontl7/view"
    },
    "Electric and hybrid vehicles": {
      "Unit 1 - ": "https://drive.google.com/file/d/1kXqO1XHUqi1ScSXPqSCI1Hj-dazA-yRR/view",
      "Unit 2 -": "https://drive.google.com/file/d/1EAAZ6Ge3L7nEUO0J5yRB6HvDLu1HDr1y/view", 
      "Unit 3 - ": "https://drive.google.com/drive/folders/1OQTe9H3PoTccIoWvSn5KjUKeEvcmiIpW",
      "Unit 4 - ": "https://drive.google.com/drive/folders/18rinqWUBkUip3Sl-8Bjgwp-zOsSC8w0w",
      "Unit 5 -": "https://drive.google.com/file/d/1ECE4Xo4Sn7K7CJiVTM1pe2omkwj4wORf/view"
    }
  },
  "3rd Year": {
    "Database Management System": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1W7zv43hiNoa2ChG3APKm1awMgOvXKhJi"
    },
    "Data Analytics": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1tYBzbkq00ojFGvOY3WF_ydtv2lqaORnp"
    },
    "Object-Oriented System Design with C++": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1XBGMLIJ2JOnHOWchGpDVJFlA-OUfW-Qg"
    },
    "Artificial Intelligence": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1pPb6BYuB503bVSEOKlCdPeHG-MZfdC5d"
    },
    "Application of Soft Computing": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1MakBY-KmdJHvdNHorjSYMWidruH5290v"
    },
    "Image Processing": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1QdT4b-ONGhGawQJ6S-LgXtjL7jCd9o-4"
    },
    "Natural Language Processing": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1VjO0x2KSN8aDqRmE04QfpoJMdVd4BkqG"
    },
    "Cloud Computing": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1ankCHSWiKxnJYHhnCfKGKMl_Z5OWfExX"
    },
    "Data Warehousing & Data Mining": {
      "Unit 1 - ": "https://drive.google.com/file/d/1EuZ-QJ22D_WwdxcR9w9YQuJLCDXoRHcA/view"
    },
    "Constitution Of India": {
      "Unit 1 - ": "https://drive.google.com/file/d/19p4WMiD2a4lmNtMnTnGrVflkGFVX09Ed/view"
    },
    "Essence of Indian Traditional Knowledge": {
      "Unit 1 - ": "https://drive.google.com/file/d/1SyN4IVrMcuEj0Po-Tgg75Kaen1RL63Tm/view"
    },
    "Software Engineering": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1glQ4rSOxJ2k4HqBVafukOy0esGrpE9oF"
    },
    "Computer Networks": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1W7zv43hiNoa2ChG3APKm1awMgOvXKhJi"
    },
    "Cyber Forensic analytics": {
      "Unit 1 - ": "https://drive.google.com/file/d/1AAtNz55v2KgPbbVjSkMOlyxLsu91ESbG/view"
    },
    "Social Media Analytics and Data Analysis": {
      "Unit 1 - ": "https://drive.google.com/drive/folders/1St8AdGUg7LJUWBc5k9tt0t3Di2rMwklY"
    },
    "Machine Learning Techniques": {
      "Unit 1 - ": "https://drive.google.com/file/d/1-h_PhlcarvvOnwAuBRBcLwBEYQexhCKz/view"
    }
  },
  "4th Year": {
    "Complete notes of 4th yesr": {
      "notes": "https://drive.google.com/drive/folders/1hFLyltBnu_A7HE-aCqhjbaAgPDXanYF-",
    },
  }
};

// DOM refs
const yearSelect = document.getElementById('yearSelect');
const subjectSelect = document.getElementById('subjectSelect');
const unitSelect = document.getElementById('unitSelect');
const openBtn = document.getElementById('openBtn');
const copyBtn = document.getElementById('copyBtn');
const unitsPreview = document.getElementById('unitsPreview');
const status = document.getElementById('status');

// populate years
Object.keys(notesData).forEach(y=>{
  const o=document.createElement('option');o.value=y;o.textContent=y;
  yearSelect.appendChild(o);
});

// status helper with more human messages
const statusMessages = [
  'All set! ',
  'Ready to go!',
  'Good to go ',
  'Standing by...',
  'Ready! '
];

function setStatus(msg,time=2000){
  const statusText = document.querySelector('.status-text');
  if(statusText) {
    statusText.textContent = msg;
  } else {
    status.textContent = msg;
  }
  clearTimeout(setStatus._t);
  setStatus._t=setTimeout(()=>{
    const randomMsg = statusMessages[Math.floor(Math.random() * statusMessages.length)];
    if(statusText) {
      statusText.textContent = randomMsg;
    } else {
      status.textContent = randomMsg;
    }
  },time);
}

// reset / disable
function disableAll(dis=true){
  subjectSelect.disabled=dis;unitSelect.disabled=dis;openBtn.disabled=dis;copyBtn.disabled=dis;
}

// handle year
yearSelect.addEventListener('change',()=>{
  const y=yearSelect.value;
  subjectSelect.innerHTML='<option value="">-- Choose Subject --</option>';
  unitSelect.innerHTML='<option value="">-- Choose Unit --</option>';
  unitsPreview.innerHTML='<div class="empty">Select subject to see units.</div>';
  disableAll(true);
  if(!y){return;}
  Object.keys(notesData[y]).forEach(s=>{
    const opt=document.createElement('option');opt.value=s;opt.textContent=s;subjectSelect.appendChild(opt);
  });
  subjectSelect.disabled=false;
  setStatus(`${y} selected! 📚`);
});

// handle subject
subjectSelect.addEventListener('change',()=>{
  const y=yearSelect.value,s=subjectSelect.value;
  unitSelect.innerHTML='<option value="">-- Choose Unit --</option>';
  unitsPreview.innerHTML='';
  disableAll(true);
  if(!s){unitsPreview.innerHTML='<div class="empty">Select subject to see units.</div>';return;}
  const units=Object.keys(notesData[y][s]);
  units.forEach(u=>{
    const opt=document.createElement('option');opt.value=u;opt.textContent=u;unitSelect.appendChild(opt);
  });
  renderUnits(y,s,units);
  unitSelect.disabled=false;
  setStatus(`Found ${units.length} units for ${s} 📖`);
});

// render unit cards
function renderUnits(y,s,units){
  unitsPreview.innerHTML='';
  units.forEach(u=>{
    const url=notesData[y][s][u];
    const div=document.createElement('div');
    div.className='unit';
    div.innerHTML=`
      <h4>${u}</h4>
      <p>${s}</p>
      <div class="links">
        <button class="link-btn open" data-url="${url}">Open</button>
        <button class="link-btn copy" data-url="${url}">Copy</button>
      </div>`;
    unitsPreview.appendChild(div);
  });
  // open & copy actions
  document.querySelectorAll('.link-btn.open').forEach(b=>b.onclick=()=>window.open(b.dataset.url,'_blank'));
  document.querySelectorAll('.link-btn.copy').forEach(b=>b.onclick=async()=>{
    try{
      await navigator.clipboard.writeText(b.dataset.url);
      setStatus('Link copied! 📋');
    }catch{setStatus('Oops, copy failed 😅');}
  });
}

// handle unit selection for top buttons
unitSelect.addEventListener('change',()=>{
  const y=yearSelect.value,s=subjectSelect.value,u=unitSelect.value;
  if(!u){disableAll(true);return;}
  const link=notesData[y][s][u];
  openBtn.dataset.url=link;copyBtn.dataset.url=link;
  openBtn.disabled=false;copyBtn.disabled=false;
});

// top buttons
openBtn.onclick=()=>window.open(openBtn.dataset.url,'_blank');
copyBtn.onclick=async()=>{
  try{await navigator.clipboard.writeText(copyBtn.dataset.url);setStatus('Link copied! 📋');}
  catch{setStatus('Hmm, copy didn\'t work ');}
};

// ==================== PARTICLE ANIMATION ====================
const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');
let w,h,particles=[];
function resize(){
  w=canvas.width=window.innerWidth;
  h=canvas.height=window.innerHeight;
}
window.addEventListener('resize',resize);
resize();

for(let i=0;i<40;i++){
  particles.push({
    x:Math.random()*w,
    y:Math.random()*h,
    r:Math.random()*2+1,
    dx:(Math.random()-0.5)*0.3,
    dy:(Math.random()-0.5)*0.3
  });
}
function animate(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle='rgba(0,255,159,0.2)';
  particles.forEach(p=>{
    p.x+=p.dx;p.y+=p.dy;
    if(p.x<0||p.x>w)p.dx*=-1;
    if(p.y<0||p.y>h)p.dy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

// ==================== UPLOAD GUIDE ====================
const hideGuideBtn = document.getElementById('hideGuide');
const uploadGuide = document.getElementById('uploadGuide');

if(hideGuideBtn && uploadGuide) {
  hideGuideBtn.addEventListener('click', () => {
    uploadGuide.style.display = 'none';
    localStorage.setItem('hideUploadGuide', 'true');
  });

  if(localStorage.getItem('hideUploadGuide') === 'true') {
    uploadGuide.style.display = 'none';
  }
}