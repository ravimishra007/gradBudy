import { Course, CourseCardProps, FAQ, TeamMember } from "./types";

export const faqs: FAQ[] = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "How does it work?",
    answer: "It uses React context and hooks to manage the accordion state.",
  },
  {
    id: "item-3",
    question: "Can I customize it?",
    answer: "Absolutely! You can customize it with CSS or styled-components.",
  },
  {
    id: "item-4",
    question:
      "What are the key benefits of using this component in my project?",
    answer:
      "This component is designed to be highly accessible, customizable, and easy to integrate into your existing projects. By adhering to WAI-ARIA design patterns, it ensures that users with disabilities can interact with the content effectively. Additionally, it uses modern React hooks and context to manage state, which makes it both efficient and easy to understand.",
  },
  {
    id: "item-5",
    question:
      "Can I integrate this component with other UI libraries and frameworks?",
    answer:
      "Yes, you can integrate this accordion component with other UI libraries and frameworks. It is designed to be flexible and compatible with various styles and systems. Whether you are using Bootstrap, Tailwind CSS, or any other styling solution, you can customize the component to match your design requirements seamlessly.",
  },
  {
    id: "item-6",
    question: "How do I handle state management for the accordion items?",
    answer:
      "State management for the accordion items is handled internally using React's context and hooks. This allows for a clean and efficient way to manage the state without the need for additional libraries or complex configurations. You can also extend the state management logic if needed by leveraging the provided hooks and context.",
  },
  {
    id: "item-7",
    question:
      "How can I contribute to the development of this accordion component?",
    answer:
      "We welcome contributions to the development of this accordion component. You can contribute by submitting pull requests, reporting issues, or suggesting new features. Please refer to our contribution guidelines on GitHub for more information on how to get started. Your contributions help us improve the component and provide better functionality and usability for all users.",
  },
  {
    id: "item-9",
    question: "Are there any known issues or limitations with this component?",
    answer:
      "Currently, there are no major known issues with this accordion component. However, like any software, there may be minor bugs or limitations that we are continuously working to address. We encourage users to report any issues they encounter so that we can address them promptly. Our goal is to ensure the component is as robust and reliable as possible.",
  },
  {
    id: "item-10",
    question:
      "What kind of support is available if I encounter problems while using this component?",
    answer:
      "If you encounter any problems while using this component, we offer several support channels. You can check our documentation for common issues and solutions, reach out to the community through our forums or GitHub discussions, or contact our support team directly. We are committed to helping you resolve any issues and ensuring you have a smooth experience with our component.",
  },
];

export const teamMembers: TeamMember[] = [
  {
      imgSrc: "/icons/profile.svg",
      name: "John Deo",
      position: "Founder & CEO",
      overview: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.“Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      socialMedia: [
          { platform: 'LinkedIn', icon: "/icons/LinkedIn.svg", url: 'https://www.linkedin.com/in/johndeo' },
          { platform: 'Twitter', icon: "/icons/Twitter.svg", url: 'https://twitter.com/johndeo' },
          { platform: 'Instagram', icon: "/icons/Instagram.svg", url: 'https://www.instagram.com/johndeo' },
          { platform: 'Youtube', icon: "/icons/Youtube.svg", url: 'https://youtube.com/johndeo' }
      ]
  },
  {
      imgSrc: "/icons/profile.svg",
      name: "Jane Smith",
      position: "Chief Operating Officer",
      overview: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      socialMedia: [
          { platform: 'LinkedIn', icon: "/icons/LinkedIn.svg", url: 'https://www.linkedin.com/in/janesmith' },
          { platform: 'Twitter', icon: "/icons/Twitter.svg", url: 'https://twitter.com/janesmith' },
          { platform: 'Instagram', icon: "/icons/Instagram.svg", url: 'https://www.instagram.com/janesmith' },
          { platform: 'Youtube', icon: "/icons/Youtube.svg", url: 'https://youtube.com/janesmith' }
      ]
  },
  {
      imgSrc: "/icons/profile.svg",
      name: "Alex Johnson",
      position: "Chief Technology Officer",
      overview: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in urna eu enim aliquet placerat.",
      socialMedia: [
          { platform: 'LinkedIn', icon: "/icons/LinkedIn.svg", url: 'https://www.linkedin.com/in/alexjohnson' },
          { platform: 'Twitter', icon: "/icons/Twitter.svg", url: 'https://twitter.com/alexjohnson' },
      ]
  }
];

export const courses: CourseCardProps[] = [
  {
    id: 1,
    imgSrc: "/images/course-img.png",
    courseTitle: "Management Skills",
    teacherName: "Dr. John Smith",
    tags: ["Leadership", "Management"],
    details: ["22 Lessons", "5 Hours"],
    amount: "$499.99",
    buttonText: "Register",
    institute: "Indian Institute of Technology Kanpur",
    instituteLogo: "/icons/collage.svg",
  },
  {
    id: 2,
    imgSrc: "/images/course-img.png",
    courseTitle: "Advanced Techniques",
    teacherName: "Prof. Jane Doe",
    tags: ["Innovation", "Strategy"],
    details: ["15 Lessons", "4 Hours"],
    amount: "$399.99",
    buttonText: "Register",
    institute: "Indian Institute of Technology Bombay",
    instituteLogo: "/icons/collage.svg",
  },
  {
    id: 3,
    imgSrc: "/images/course-img.png",
    courseTitle: "Project Management",
    teacherName: "Dr. Michael Brown",
    tags: ["Planning", "Execution"],
    details: ["18 Lessons", "6 Hours"],
    amount: "$450.00",
    buttonText: "Register",
    institute: "Indian Institute of Technology Delhi",
    instituteLogo: "/icons/collage.svg",
  },
  {
    id: 4,
    imgSrc: "/images/course-img.png",
    courseTitle: "Business Analytics",
    teacherName: "Prof. Susan Clark",
    tags: ["Data Analysis", "Decision Making"],
    details: ["20 Lessons", "7 Hours"],
    amount: "$499.99",
    buttonText: "Register",
    institute: "Indian Institute of Technology Madras",
    instituteLogo: "/icons/collage.svg",
  },
  {
    id: 5,
    imgSrc: "/images/course-img.png",
    courseTitle: "Entrepreneurship",
    teacherName: "Dr. William Johnson",
    tags: ["Startup", "Innovation"],
    details: ["25 Lessons", "8 Hours"],
    amount: "$550.00",
    buttonText: "Register",
    institute: "Indian Institute of Management Bangalore",
    instituteLogo: "/icons/collage.svg",
  },
  {
    id: 6,
    imgSrc: "/images/course-img.png",
    courseTitle: "Financial Management",
    teacherName: "Prof. Emily Davis",
    tags: ["Finance", "Investment"],
    details: ["19 Lessons", "5.5 Hours"],
    amount: "$470.00",
    buttonText: "Register",
    institute: "Indian Institute of Management Ahmedabad",
    instituteLogo: "/icons/collage.svg",
  },
  {
    id: 7,
    imgSrc: "/images/course-img.png",
    courseTitle: "Marketing Strategies",
    teacherName: "Dr. Robert Lee",
    tags: ["Marketing", "Branding"],
    details: ["22 Lessons", "6.5 Hours"],
    amount: "$480.00",
    buttonText: "Register",
    institute: "Indian Institute of Technology Kharagpur",
    instituteLogo: "/icons/collage.svg",
  },
  {
    id: 8,
    imgSrc: "/images/course-img.png",
    courseTitle: "Human Resource Management",
    teacherName: "Prof. Linda Harris",
    tags: ["HR", "Team Management"],
    details: ["17 Lessons", "4 Hours"],
    amount: "$420.00",
    buttonText: "Register",
    institute: "Indian Institute of Technology Roorkee",
    instituteLogo: "/icons/collage.svg",
  },
  {
    id: 9,
    imgSrc: "/images/course-img.png",
    courseTitle: "Operations Management",
    teacherName: "Dr. Thomas Clark",
    tags: ["Operations", "Efficiency"],
    details: ["20 Lessons", "5 Hours"],
    amount: "$490.00",
    buttonText: "Register",
    institute: "Indian Institute of Technology Guwahati",
    instituteLogo: "/icons/collage.svg",
  },
];

export const courseData: Course = {
  title: "Advanced Management Skills",
  modules: [
    {
      title: "Module 1: Introduction to Management",
      lessons: [
        {
          title: "Lesson 1.1: Course Overview",
          duration: "10 minutes",
          link: "#lesson1-1",
          topics: [
            {
              title: "Topic 1.1.1: Introduction",
              duration: "5 minutes",
              materials: [
                {
                  title: "Introduction PDF",
                  url: "/materials/intro.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 1.1.2: Course Structure",
              duration: "5 minutes",
            },
          ],
        },
        {
          title: "Lesson 1.2: The Role of a Manager",
          duration: "15 minutes",
          link: "#lesson1-2",
          topics: [
            {
              title: "Topic 1.2.1: Responsibilities",
              duration: "7 minutes",
              materials: [
                {
                  title: "Responsibilities Overview",
                  url: "/materials/responsibilities.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 1.2.2: Key Skills",
              duration: "8 minutes",
            },
          ],
        },
      ],
    },
    {
      title: "Module 2: Essential Management Skills",
      lessons: [
        {
          title: "Lesson 2.1: Communication Skills",
          duration: "20 minutes",
          link: "#lesson2-1",
          topics: [
            {
              title: "Topic 2.1.1: Effective Communication",
              duration: "10 minutes",
              materials: [
                {
                  title: "Effective Communication PDF",
                  url: "/materials/communication.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 2.1.2: Active Listening",
              duration: "10 minutes",
            },
          ],
        },
        {
          title: "Lesson 2.2: Time Management",
          duration: "25 minutes",
          link: "#lesson2-2",
          topics: [
            {
              title: "Topic 2.2.1: Prioritization",
              duration: "15 minutes",
              materials: [
                {
                  title: "Prioritization Techniques",
                  url: "/materials/prioritization.pdf",
                  type: "pdf",
                },
                {
                  title: "Prioritization Example",
                  url: "/materials/prioritization.txt",
                  type: "txt",
                },
              ],
            },
            {
              title: "Topic 2.2.2: Scheduling",
              duration: "10 minutes",
            },
          ],
        },
      ],
    },
    {
      title: "Module 3: Advanced Leadership",
      lessons: [
        {
          title: "Lesson 3.1: Leadership Styles",
          duration: "30 minutes",
          link: "#lesson3-1",
          topics: [
            {
              title: "Topic 3.1.1: Transformational Leadership",
              duration: "15 minutes",
              materials: [
                {
                  title: "Transformational Leadership PDF",
                  url: "/materials/transformational-leadership.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 3.1.2: Situational Leadership",
              duration: "15 minutes",
            },
          ],
        },
        {
          title: "Lesson 3.2: Motivating Your Team",
          duration: "25 minutes",
          link: "#lesson3-2",
          topics: [
            {
              title: "Topic 3.2.1: Intrinsic Motivation",
              duration: "12 minutes",
              materials: [
                {
                  title: "Intrinsic Motivation PDF",
                  url: "/materials/intrinsic-motivation.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 3.2.2: Extrinsic Motivation",
              duration: "13 minutes",
            },
          ],
        },
      ],
    },
    {
      title: "Module 4: Conflict Resolution",
      lessons: [
        {
          title: "Lesson 4.1: Identifying Conflicts",
          duration: "20 minutes",
          link: "#lesson4-1",
          topics: [
            {
              title: "Topic 4.1.1: Types of Conflicts",
              duration: "10 minutes",
              materials: [
                {
                  title: "Types of Conflicts PDF",
                  url: "/materials/types-of-conflicts.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 4.1.2: Early Signs of Conflict",
              duration: "10 minutes",
            },
          ],
        },
        {
          title: "Lesson 4.2: Strategies for Resolution",
          duration: "30 minutes",
          link: "#lesson4-2",
          topics: [
            {
              title: "Topic 4.2.1: Mediation Techniques",
              duration: "15 minutes",
              materials: [
                {
                  title: "Mediation Techniques PDF",
                  url: "/materials/mediation-techniques.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 4.2.2: Negotiation Skills",
              duration: "15 minutes",
            },
          ],
        },
      ],
    },
    {
      title: "Module 5: Performance Management",
      lessons: [
        {
          title: "Lesson 5.1: Setting Goals",
          duration: "25 minutes",
          link: "#lesson5-1",
          topics: [
            {
              title: "Topic 5.1.1: SMART Goals",
              duration: "10 minutes",
              materials: [
                {
                  title: "SMART Goals PDF",
                  url: "/materials/smart-goals.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 5.1.2: Monitoring Progress",
              duration: "15 minutes",
            },
          ],
        },
        {
          title: "Lesson 5.2: Providing Feedback",
          duration: "20 minutes",
          link: "#lesson5-2",
          topics: [
            {
              title: "Topic 5.2.1: Constructive Feedback",
              duration: "10 minutes",
              materials: [
                {
                  title: "Constructive Feedback PDF",
                  url: "/materials/constructive-feedback.pdf",
                  type: "pdf",
                },
              ],
            },
            {
              title: "Topic 5.2.2: Performance Reviews",
              duration: "10 minutes",
            },
          ],
        },
      ],
    },
  ],
};
