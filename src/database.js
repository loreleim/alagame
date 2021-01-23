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
              answerText: "Building partnerships in the community",
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
                image: "https://media.giphy.com/media/XABTVorVODddu/giphy.gif", 
                category: "outreach",
                isSelected: false
              }
            ]
        },
        {
          questionText: "The aspect of  my job that I enjoy the most is..?",
            answerOptions: [
              { answerText: "Planning! I never met a list I didn’t love", 
                image: "https://media.giphy.com/media/B7o99rIuystY4/giphy.gif",
                category: "event",
                isSelected: false },
              {
                answerText: "Hearing about all that's happening in our community",
                image: "https://media.giphy.com/media/xT8qAXAERiWiL17OYU/giphy.gif",
                category: "community",
                isSelected: false
              },
              { answerText: "Figuring out creative new ways to find information or solve problems", 
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
              { answerText: "Stick to a schedule. Errands, social events, I get it all done", 
                category: "event",
                isSelected: false },
              {
                answerText: "Explore a part of my community that I’ve never been to before – or visit old favorites",
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
              { answerText: "School supplies! Trapper keepers, post-it notes, highlighters, oh my", 
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
                image: "https://media.giphy.com/media/xT1Ra4pzewEzZmUUGQ/giphy.gif",
                category: "interpersonal",
                isSelected: false
              },
              {
                answerText: "Fundraisers. I got the award for most candy bars sold every time",
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
            { answerText: "You don’t have to be a celebrity wedding planner to plan a successful conversation. One of your strengths is that you are drawn to order and organization — great skills for a library worker, especially when it comes to facilitation. Even if your most formal event-planning experience has been hosting a child’s birthday party or planning a trip, you have the basic skills needed to handle the logistics of a discussion.", 
              category: "event",
              isSelected: false },
            {
              answerText: "Maybe you are naturally a “people person.” Or maybe you’ve lived in your community for years. Whatever the case, one thing is for certain — you know your community! Community knowledge is one of the strongest skills you can bring to the table when leading a conversation. Your ability to build relationships and partnerships — and knowing “who’s who” — will make it so much easier for you to bring people together.",
              category: "community",
              isSelected: false
            },
            { answerText: "You’re prone to thinking outside of the box, and that’s a great strength when it comes to leading a conversation. Every situation comes with challenges; what’s great about you is that you see challenges as opportunities to do something new and interesting. So color outside the lines and use your creativity to find new ways to spark people’s interests in a topic — it will make your conversation stronger!", 
              category: "creativity",
              isSelected: false },
            {
              answerText: "Not everyone is drawn to working with people, but you are. This is a massive strength in conversation planning and one that shouldn’t be discounted. Your solid interpersonal and conversational skills will make your job as a facilitator easier — maybe even fun!",
              category: "interpersonal",
              isSelected: false
            },
            {
              answerText: "Are you a Twitter junkie? Do you have a way with words? Maybe you the kid that was always setting up a lemonade stand? However you gained your marketing skills, they will serve you well when it comes to planning a conversation — from getting people in the door to telling your community what you learned.",
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
  