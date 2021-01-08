class Database {
    constructor() {
      this.questions = [
        {
          questionText:
            "My favorite part of my job in the library is...",
          answerOptions: [
            { answerText: "Developing new programs", 
              category: "event",
              isSelected: false },
            {
              answerText: "Building partnerships out in the community",
              category: "community", 
              isSelected: false
            },
            { answerText: "Designing book displays", 
              category: "creativity",
              isSelected: false },
            {
              answerText: "Interacting with patrons",
              category: "interpersonal",
              isSelected: false
            },
            {
              answerText: "Managing the library’s website",
              category: "outreach",
              isSelected: false
            }
          ]
        },
        {
            questionText:
              "The word that best describes me  is...",
            answerOptions: [
              { answerText: "Organized",
                image: "https://media.giphy.com/media/BXgfFotA3amW6GjJPj/giphy.gif", 
                category: "event",
                isSelected: false },
              {
                answerText: "Connected",
                image: "https://media.giphy.com/media/S3gnHTbb3QYEQ2aDcu/giphy.gif", 
                category: "community",
                isSelected: false
              },
              { answerText: "Creative", 
                image: "https://media.giphy.com/media/Ux9XDxUga9e80/giphy.gif", 
                category: "creativity",
                isSelected: false },
              {
                answerText: "Social",
                image: "https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif", 
                category: "interpersonal",
                isSelected: false
              },
              {
                answerText: "Persuasive",
                image: "https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif", 
                category: "outreach",
                isSelected: false
              }
            ]
        },
        {
            questionText:
              "The quote that speaks to me best is...",
            answerOptions: [
              { answerText: "There is a hunger in this digital age to hear authors together, to participate in programs, to just be in a place, a community space. -Carla Hayden", 
                category: "event",
                isSelected: false },
              {
                answerText: "In the nonstop tsunami of global information, librarians provide us with floaties and teach us to swim. – Linton Weeks",
                category: "community",
                isSelected: false
              },
              { answerText: "The classroom was a jail of other people’s interests. The library was open, unending, free. ― Ta-Nehisi Coates", 
                category: "creativity",
                isSelected: false },
              {
                answerText: "The truth is libraries are raucous clubhouses for free speech, controversy and community. – Paula Poundstone",
                category: "interpersonal",
                isSelected: false
              },
              {
                answerText: "If you want a future of libraries, it is within you, the librarians. If you want a healthy community that seeks out knowledge, and seeks informed conversation, then advocate for it beyond your walls. -R. David Lankes",
                category: "outreach",
                isSelected: false
              }
            ]
        },
        {
          questionText: "The aspect of  my job that I enjoy the most is..?",
            answerOptions: [
              { answerText: "Planning! I never met a list I didn’t love.", 
                image: "https://media.giphy.com/media/B7o99rIuystY4/giphy.gif",
                category: "event",
                isSelected: false },
              {
                answerText: "Hearing about all that's happening in our community and listening to various discussions",
                image: "https://media.giphy.com/media/xT8qAXAERiWiL17OYU/giphy.gif",
                category: "community",
                isSelected: false
              },
              { answerText: "Figuring out creative new ways to present information or solve problems", 
                image: "https://media.giphy.com/media/JWF7fOo3XyLgA/giphy.gif",
                category: "creativity",
                isSelected: false },
              {
                answerText: "Talking to patrons about anything and everything",
                image: "https://media.giphy.com/media/l0HlSF89is7bCAjte/giphy.gif",
                category: "interpersonal",
                isSelected: false
              },
              {
                answerText: "Bragging  about everything the library has to offer",
                image: "https://media.giphy.com/media/TEj9VRTz1Xtqre3kUT/giphy.gif",
                category: "outreach",
                isSelected: false
              }
            ]
        },
        {
          questionText: "On days off from work, I like to...",
            answerOptions: [
              { answerText: "Stick to a schedule. Errands, social events, I get it all done!", 
                category: "event",
                isSelected: false },
              {
                answerText: "Explore a part of my community that I’ve never been to before (or visit old favorites)",
                category: "community",
                isSelected: false
              },
              { answerText: "Flex my creative muscles by cooking, gardening or decorating", 
                category: "creativity",
                isSelected: false },
              {
                answerText: "Hang with friends and family",
                category: "interpersonal",
                isSelected: false
              },
              {
                answerText: "Post on social media",
                category: "outreach",
                isSelected: false
              }
            ]
        },
        {
            questionText:
              "Other than the library, my favorite part of school was...",
            answerOptions: [
              { answerText: "School supplies! Trapper keepers, post-it notes, highlighters, oh my!", 
                image: "https://media.giphy.com/media/3vnHhhpVXP8lBrOQhH/giphy.gif",
                category: "event",
                isSelected: false },
              {
                answerText: "Field trips and guest speakers",
                image: "https://media.giphy.com/media/vhpwk2TOw2hq0/giphy.gif",
                category: "community",
                isSelected: false
              },
              { answerText: "Art, music or creative writing -- something where I could express myself", 
                image: "https://media.giphy.com/media/l0ckewhzX2dDtPb1VQ/giphy.gif",
                category: "creativity",
                isSelected: false },
              {
                answerText: "Lunch, recess and passing notes in class",
                image: "https://media.giphy.com/media/9Dg8hPEsQIzcUZPrV4/giphy.gif",
                category: "interpersonal",
                isSelected: false
              },
              {
                answerText: "Fundraisers. I got the award for most candy bars sold every time.",
                image: "https://media.giphy.com/media/26u4exk4zsAqPcq08/giphy.gif",
                category: "outreach",
                isSelected: false
              }
            ]
        },
        {
            questionText:
              "To help patrons answer questions, I...",
            answerOptions: [
              { answerText: "Go right into planning mode, building a list of search phrases that could  help them find answers", 
                category: "event",
                isSelected: false },
              {
                answerText: "Draw on my knowledge of the town and local resources to help them",
                category: "community",
                isSelected: false
              },
              { answerText: "Brainstorm some ideas/resources they may not have thought about yet", 
                category: "creativity",
                isSelected: false },
              {
                answerText: "Ask them more questions to help you better understand what they’re looking for and what they may need",
                category: "interpersonal",
                isSelected: false
              },
              {
                answerText: "Provide some resources that relate to their questions and let them know about other things that they may be interested in",
                category: "outreach",
                isSelected: false
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
              category: "event",
              isSelected: false },
            {
              answerText: "Whether you are just good at getting to know people, you’ve lived here for years, or you’ve run for office in this town, you know this community! This is critical to leading strong conversations. You’ve shown that you have the background to build relationships and partnerships that strengthen your library’s programs and make the offerings of the library accessible to all.",
              category: "community",
              isSelected: false
            },
            { answerText: "What’s great about you is that you see challenges as opportunities to make something new and interesting. You’re also adept at coming up with unique solutions to issues. That’s exactly what is needed to be able to facilitate a constructive conversation.", 
              category: "creativity",
              isSelected: false },
            {
              answerText: "Facilitating a conversation will necessitate communication with potential partners, stakeholders, and community members at all steps of the process. Fortunately, you’re able to draw on your significant social skills and ability to meaningfully connect with others to make sure everyone has what they need to participate in a fruitful dialogue.",
              category: "interpersonal",
              isSelected: false
            },
            {
              answerText: "From friends, to family members, to patrons, you know who needs to hear about what! You’ve got essential skills to be able to connect and engage with others, which is what will help to bring a diverse group of patrons and partners in to participate in a robust conversation.",
              category: "outreach",
              isSelected: false
            }
          ]
        },
      ]
  
      this.userChoices = [];
    }
  }
  
  const store = new Database();
  export default store;
  