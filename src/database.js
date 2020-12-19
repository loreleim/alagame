class Database {
    constructor() {
      this.questions = [
        {
          questionText:
            "My favorite part of my job in the library is...",
          answerOptions: [
            { answerText: "Developing new programs", 
              category: "event planning" },
            {
              answerText: "Building partnerships out in the community",
              category: "community knowledge"
            },
            { answerText: "Designing book displays", 
              category: "creativity" },
            {
              answerText: "Interacting with patrons",
              category: "interpersonal skills"
            },
            {
              answerText: "Managing the library’s website",
              category: "outreach & marketing"
            }
          ]
        },
        {
            questionText:
              "The word that best describes me  is...",
            answerOptions: [
              { answerText: "Organized", 
                category: "event planning" },
              {
                answerText: "Connected",
                category: "community knowledge"
              },
              { answerText: "Creative", 
                category: "creativity" },
              {
                answerText: "Social",
                category: "interpersonal skills"
              },
              {
                answerText: "Persuasive",
                category: "outreach & marketing"
              }
            ]
        },
        {
            questionText:
              "The quote that speaks to me best is...",
            answerOptions: [
              { answerText: "There is a hunger in this digital age to hear authors together, to participate in programs, to just be in a place, a community space. -Carla Hayden", 
                category: "event planning" },
              {
                answerText: "In the nonstop tsunami of global information, librarians provide us with floaties and teach us to swim. – Linton Weeks",
                category: "community knowledge"
              },
              { answerText: "The classroom was a jail of other people’s interests. The library was open, unending, free. ― Ta-Nehisi Coates", 
                category: "creativity" },
              {
                answerText: "The truth is libraries are raucous clubhouses for free speech, controversy and community. – Paula Poundstone",
                category: "interpersonal skills"
              },
              {
                answerText: "If you want a future of libraries, it is within you, the librarians. If you want a healthy community that seeks out knowledge, and seeks informed conversation, then advocate for it beyond your walls. -R. David Lankes",
                category: "outreach & marketing"
              }
            ]
        },
        {
          questionText: "The aspect of  my job that I enjoy the most is..?",
            answerOptions: [
              { answerText: "Planning! I never met a list I didn’t love.", 
                category: "event planning" },
              {
                answerText: "Hearing about all that's happening in our community and listening to various discussions",
                category: "community knowledge"
              },
              { answerText: "Figuring out creative new ways to present information or solve problems", 
                category: "creativity" },
              {
                answerText: "Talking to patrons about anything and everything",
                category: "interpersonal skills"
              },
              {
                answerText: "Bragging  about everything the library has to offer",
                category: "outreach & marketing"
              }
            ]
        },
        {
          questionText: "On days off from work, I like to...",
            answerOptions: [
              { answerText: "Stick to a schedule. Errands, social events, I get it all done!", 
                category: "event planning" },
              {
                answerText: "Explore a part of my community that I’ve never been to before (or visit old favorites)",
                category: "community knowledge"
              },
              { answerText: "Flex my creative muscles by cooking, gardening or decorating", 
                category: "creativity" },
              {
                answerText: "Hang with friends and family",
                category: "interpersonal skills"
              },
              {
                answerText: "Post on social media",
                category: "outreach & marketing"
              }
            ]
        },
        {
            questionText:
              "Other than the library, my favorite part of school was...",
            answerOptions: [
              { answerText: "School supplies! Trapper keepers, post-it notes, highlighters, oh my!", 
                category: "event planning" },
              {
                answerText: "Field trips and guest speakers",
                category: "community knowledge"
              },
              { answerText: "Art, music or creative writing -- something where I could express myself", 
                category: "creativity" },
              {
                answerText: "Lunch, recess and passing notes in class",
                category: "interpersonal skills"
              },
              {
                answerText: "Fundraisers. I got the award for most candy bars sold every time.",
                category: "outreach & marketing"
              }
            ]
        },
        {
            questionText:
              "To help patrons answer questions, I...",
            answerOptions: [
              { answerText: "Go right into planning mode, building a list of search phrases that could  help them find answers", 
                category: "event planning" },
              {
                answerText: "Draw on my knowledge of the town and local resources to help them",
                category: "community knowledge"
              },
              { answerText: "Brainstorm some ideas/resources they may not have thought about yet", 
                category: "creativity" },
              {
                answerText: "Ask them more questions to help you better understand what they’re looking for and what they may need",
                category: "interpersonal skills"
              },
              {
                answerText: "Provide some resources that relate to their questions and let them know about other things that they may be interested in",
                category: "outreach & marketing"
              }
            ]
        },
      ];

      this.resultText = [
        {
          headerText:
            "You possess skills, experiences, and/or mindsets that make you good at...",
          answerOptions: [
            { answerText: "You don’t have to be a celebrity wedding planner to be able to plan for a successful conversation. You are already oriented to what it takes to think about the logistics of a good gathering, from working out the details of spaces, attendees, and speakers to making programs accessible, appealing, and culturally appropriate for all. Whether you’ve ever led a public program or not, you have the ability to think organizationally and focus your efforts on a clear goal, which are essential skills for creating a successful event.", 
              category: "event planning" },
            {
              answerText: "Whether you are just good at getting to know people, you’ve lived here for years, or you’ve run for office in this town, you know this community! This is critical to leading strong conversations. You’ve shown that you have the background to build relationships and partnerships that strengthen your library’s programs and make the offerings of the library accessible to all.",
              category: "community knowledge"
            },
            { answerText: "What’s great about you is that you see challenges as opportunities to make something new and interesting. You’re also adept at coming up with unique solutions to issues. That’s exactly what is needed to be able to facilitate a constructive conversation.", 
              category: "creativity" },
            {
              answerText: "Facilitating a conversation will necessitate communication with potential partners, stakeholders, and community members at all steps of the process. Fortunately, you’re able to draw on your significant social skills and ability to meaningfully connect with others to make sure everyone has what they need to participate in a fruitful dialogue.",
              category: "interpersonal skills"
            },
            {
              answerText: "From friends, to family members, to patrons, you know who needs to hear about what! You’ve got essential skills to be able to connect and engage with others, which is what will help to bring a diverse group of patrons and partners in to participate in a robust conversation.",
              category: "outreach & marketing"
            }
          ]
        },
      ]
  
      this.userChoices = [];
    }
  }
  
  const store = new Database();
  export default store;
  