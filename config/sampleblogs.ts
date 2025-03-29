interface BlogType{
    slug: string
    title: string    
    description: string
    category: string[],
    imageUrl: string
    author: string
    date: string
}


const SampleBlogs: BlogType[] = [
    {
      slug: "herbode-sistas-friendship-in-crisis",
      title: "Herbode Sistas: Friendship In Crisis",
      description: "In this heartfelt interview, Herbode Sistas sits down with L and her best friend A, who recount their story of friendship, secrecy, and resilience during a teenage crisis. ",
      category: ["HERBODE SISTAS"],
      imageUrl: '/Friendship.webp',
      author: 'SARAHKAYANWAR',
      date: 'March 25, 2025'
    },
  
    {
      slug: "things-i-am-no-longer-apologizing-for-and-you-shouldnt-either",
      title: "Things I Am No Longer Apologizing For (And You Shouldn’t Either)",
      description: "This piece explores the freedom that comes with unlearning people-pleasing and embracing boundaries.",
      category: ["HERBODE WOMEN’S GUIDE"],
      imageUrl: '/Apologizing.webp',
      author: 'Herbode',
      date: 'March 08, 2025'
    },

    {
      slug: "understanding-pcos-and-its-symptoms",
      title: "Understanding PCOS and Its Symptoms",
      description: " In this in-depth guide, we break down the causes, symptoms, treatment options, and lifestyle changes that can help manage PCOS effectively.",
      category: ["Educational Posts", "Social Issues"],
      imageUrl: '/Pcos.webp',
      author: 'Herbode',
      date: 'February 28, 2025'
    },
  
    {
      slug: "overcoming-barriers-a-womans-law-career-story",
      title: "Overcoming Barriers: A Woman’s Law Career Story",
      description: "This article is an exclusive interview wit Sarah, Content Team Lead at Herbode, who shares her powerful journey through law school as a woman in Nigeria.",
      category: ['Basic Feminism'],
      imageUrl: '/Barriers.webp',
      author: 'Herbode',
      date: 'February 27, 2025'
    },
  
    {
      slug: "navigating-university-life-and-adulthood",
      title: "NAVIGATING UNIVERSITY LIFE AND ADULTHOOD",
      description: "This article offers a heartfelt and practical guide for Nigerian students navigating university life and the transition into adulthood.",
      category: ["Educational Posts", "HERBODE WOMEN’S GUIDE"],
      imageUrl: '/university.webp',
      author: 'Herbode',
      date: 'February 15, 2025'
    },
    
    {
      slug: "femicide-in-nigeria",
      title: "FEMICIDE IN NIGERIA",
      description: "This article uncovers the alarming rise of femicide in Nigeria, spotlighting real cases, cultural silence, and the urgent need for justice. It dives deep into the root causes, the devastating impact on families, and the power of community-led change.",
      category: ["Educational Posts", "Social Issues"],
      imageUrl: '/Femicide.webp',
      author: 'Herbode',
      date: 'February 07, 2025'
    }, 

    {
      slug: "my-body-his-choice-its-health-effect-on-women",
      title: "MY BODY, HIS CHOICE: It’s health effect on women",
      description: "Six Nigerian women share powerful, personal insights into how the growing rhetoric of male control over women’s bodies is not only harmful to autonomy but dangerous to women's health",
      category: ["Educational Posts"],
      imageUrl: '/Body.webp',
      author: 'Naomi',
      date: 'November 25, 2024'
    }, 
  
    {
      slug: "herbode-sistas-2",
      title: "Herbode Sistas",
      description: "In this touching edition of Herbode Sistas, we spotlight real stories of kindness, courage, and sisterhood. These heartfelt memories celebrate the power of women supporting women, even when they don't know each other.",
      category: ["HERBODE WOMEN’S GUIDE"],
      imageUrl: '/SISTAS.webp',
      author: 'Naomi',
      date: 'November 23, 2024'
    }, 
  
    {
      slug: "taking-a-low-budget-vacation-in-nigeria",
      title: "Taking a Low Budget Vacation in Nigeria",
      description: "Discover how to explore Nigeria on a low budget with smart travel tips! From off-season travel to eating like a local, this guide shows how you can enjoy memorable vacations without breaking the bank.",
      category: ["HERBODE WOMEN’S GUIDE"],
      imageUrl: '/Travel.webp',
      author: 'Naomi',
      date: 'November 23, 2024'
    }, 

    {
      slug: "health-education-esophageal-cancer",
      title: "Health Education: Esophageal Cancer",
      description: "This article explores the symptoms, risk factors, types, and treatments of esophageal cancer, urging early detection and empowering communities through knowledge and awareness.",
      category: ["Educational Posts"],
      imageUrl: '/Cancer.webp',
      author: 'Naomi',
      date: 'November 23, 2024'
    }, 
  
    {
      slug: "the-dynamics-of-sexual-activity-during-pregnancy",
      title: "The Dynamics of Sexual Activity During Pregnancy",
      description: "This article explores the physical, emotional, and relational changes that occur during pregnancy, emphasizing that sexual activity can be safe and enriching when no medical complications are present.",
      category: ["Educational Posts"],
      imageUrl: '/Sexual.webp',
      author: 'Naomi',
      date: 'November 23, 2024'
    }, 
  
    {
      slug: "the-risk-of-unprotected-sex-for-women",
      title: "The Risk of Unprotected Sex for Women",
      description: "This article explores the serious health consequences of unprotected sex for women, including the heightened risk of STIs, unintended pregnancy, and emotional distress.",
      category: ["Educational Posts"],
      imageUrl: '/Unprotected.webp',
      author: 'Naomi',
      date: 'November 23, 2024'
    }, 
  
    {
      slug: "herbode-sistas",
      title: "HERBODE SISTAS",
      description: "In this touching HerbodeSistas story, Miracle shares how her bond with her older sister deepened during a dark time when she didn’t make the law school list. What started as emotional distance transformed into her biggest source of comfort, faith, and support. ",
      category: ["HERBODE SISTAS"],
      imageUrl: '/Sistas.webp',
      author: 'Herbode',
      date: 'May 28, 2024'
    }, 

    {
      slug: "mental-health-awareness-month-with-six-women-living-with-mental-illness",
      title: "MENTAL HEALTH AWARENESS MONTH WITH SIX WOMEN LIVING WITH MENTAL ILLNESS",
      description: "Explore the experiences of women living with Depression and BPD.",
      category: ["Herbode's Interview"],
      imageUrl: '/MentalHealth.webp',
      author: 'Nagwol',
      date: 'May 19, 2024'
    }, 
 
    {
      slug: "teenage-pregnancy-in-nigeria",
      title: "Teenage Pregnancy In Nigeria",
      description: "This article explores the complex issue of teenage pregnancy in Nigeria. It highlights the roles of patriarchy, child marriage, and lack of sex education. It calls for urgent action against pedophilia and child trafficking.",
      category: ['Educational Posts'],
      imageUrl: '/Pregnancy.webp',
      author: 'Herbode',
      date: 'March 02, 2024'
    }, 

    {
      slug: "navigating-career-change",
      title: "Navigating Career Change",
      description: "This article explores the real-life experiences of three individuals who took bold steps to change their careers. They share what inspired their transitions, the challenges they faced, and how they found purpose in new paths.",
      category: ['Basic Feminism'],
      imageUrl: '/Career.webp',
      author: 'Sekhani',
      date: 'February 24, 2024'
    }, 

    {
      slug: "the-beauty-of-human-interactions-sisterhood",
      title: "THE BEAUTY OF HUMAN INTERACTIONS: SISTERHOOD",
      description: "This heartfelt piece explores the essence of sisterhood beyond blood ties—celebrating the warmth, unity, and strength found in female friendships and solidarity.",
      category: ['Basic Feminism'],
      imageUrl: '/Sisterhood.webp',
      author: 'Herbode',
      date: 'February 17, 2024'
    }, 

    {
      slug: "dealing-with-anxiety-as-a-woman",
      title: "Dealing with Anxiety as a Woman",
      description: "Anxiety affects women disproportionately and is often intensified by today’s chaotic world. This guide offers gentle, practical tools - from grounding techniques to self-compassion - to help navigate anxious moments.",
      category: ['Basic Feminism'],
      imageUrl: '/Anxiety.webp',
      author: 'Herbode',
      date: 'February 03, 2024'
    },  
    
    {
      slug: "navigating-first-time-sex-a-guide-to-a-meaningful-experience",
      title: "Navigating First-Time Sex: A Guide to a Meaningful Experience",
      description: "First-time sex is deeply personal and often clouded by noise. This guide helps you choose clarity, consent, and care—on your own terms.",
      category: ['HERBODE WOMEN’S GUIDE'],
      imageUrl: '/FirstTime.webp',
      author: 'Herbode',
      date: 'January 13, 2024'
    },
    
    {
      slug: "interview-with-sekhani-first-sexual-experience",
      title: "Interview With Sekhani: First Sexual Experience",
      description: "Thirteen women open up to Sekhani about their first sexual experiences—raw, real, and in many cases, deeply painful. ",
      category: ['Basic Feminism'],
      imageUrl: '/Sekhani.webp',
      author: 'Sekhani',
      date: 'January 11, 2024'
    },

    {
      slug: "consent",
      title: "CONSENT",
      description: "Think consent is just a simple yes or no? There's more to it than you think. Discover what real consent looks like—and what it absolutely isn’t.",
      category: ['Basic Feminism'],
      imageUrl: '/Consent.webp',
      author: 'Herbode',
      date: 'December 03, 2023'
    },

    {
      slug: "what-is-gender-based-violence-16-days-of-activism",
      title: "What Is Gender Based Violence? #16 Days of Activism",
      description: "The 16 Days of Activism raises awareness against GBV.",
      category: ['Basic Feminism'],
      imageUrl: '/Gender.webp',
      author: 'Herbode',
      date: 'December 03, 2023'
    },

    {
      slug: "gender-based-violence",
      title: "Gender Based Violence",
      description: "Survivors of gender-based violence share their experiences, challenges, and healing journeys. Join us in raising awareness and supporting the fight to end GBV.",
      category: ['Basic Feminism'],
      imageUrl: '/Violence.webp',
      author: 'Sekhani',
      date: 'December 01, 2023'
    },
  
    {
      slug: "sexual-grooming",
      title: "Sexual Grooming",
      description: "Two women share their experiences with grooming, revealing red flags, its impact, and the importance of speaking up. A must-read for awareness and support.",
      category: ['Basic Feminism'],
      imageUrl: '/Grooming.webp',
      author: 'Sekhani',
      date: 'November 21, 2023'
    },

    {
      slug: "what-is-herbode",
      title: "What Is Herbode?",
      description: "Herbode is a Nigerian NGO dedicated to providing a safe haven for victims of domestic abuse and advocating for girls' education.",
      category: ['Basic Feminism'],
      imageUrl: '/Herbode.webp',
      author: 'Herbode',
      date: 'November 18, 2023'
    },
  ];

export default SampleBlogs