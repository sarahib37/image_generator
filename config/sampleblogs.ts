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
      slug: "consent",
      title: "CONSENT",
      description: "Think consent is just a simple yes or no? There's more to it than you think. Discover what real consent looks like—and what it absolutely isn’t.",
      category: ['Basic Feminism'],
      imageUrl: '/Consent.webp',
      author: 'Herbode',
      date: 'December 3, 2023'
    },

    {
      slug: "what-is-gender-based-violence-16-days-of-activism",
      title: "What Is Gender Based Violence? #16 Days of Activism",
      description: "The 16 Days of Activism raises awareness against GBV.",
      category: ['Basic Feminism'],
      imageUrl: '/Gender.webp',
      author: 'Herbode',
      date: 'December 3, 2023'
    },

    {
      slug: "gender-based-violence",
      title: "Gender Based Violence",
      description: "Survivors of gender-based violence share their experiences, challenges, and healing journeys. Join us in raising awareness and supporting the fight to end GBV.",
      category: ['Basic Feminism'],
      imageUrl: '/Violence.webp',
      author: 'Sekhani',
      date: 'December 1, 2023'
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