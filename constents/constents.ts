import {
  Course,
  CourseCardProps,
  FAQ,
  FooterLink,
  FormData,
  Section,
  TeamMember,
  Testimonial,
  courseDetailDataProp,
} from "./types";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

export const ensureProperUrl = (url: string) => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return url.startsWith('/') ? url : `/${url}`;
};

export const faqs: FAQ[] = [
  {
    _id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    _id: "item-2",
    question: "How does it work?",
    answer: "It uses React context and hooks to manage the accordion state.",
  },
  {
    _id: "item-3",
    question: "Can I customize it?",
    answer: "Absolutely! You can customize it with CSS or styled-components.",
  },
  {
    _id: "item-4",
    question:
      "What are the key benefits of using this component in my project?",
    answer:
      "This component is designed to be highly accessible, customizable, and easy to integrate into your existing projects. By adhering to WAI-ARIA design patterns, it ensures that users with disabilities can interact with the content effectively. Additionally, it uses modern React hooks and context to manage state, which makes it both efficient and easy to understand.",
  },
  {
    _id: "item-5",
    question:
      "Can I integrate this component with other UI libraries and frameworks?",
    answer:
      "Yes, you can integrate this accordion component with other UI libraries and frameworks. It is designed to be flexible and compatible with various styles and systems. Whether you are using Bootstrap, Tailwind CSS, or any other styling solution, you can customize the component to match your design requirements seamlessly.",
  },
  {
    _id: "item-6",
    question: "How do I handle state management for the accordion items?",
    answer:
      "State management for the accordion items is handled internally using React's context and hooks. This allows for a clean and efficient way to manage the state without the need for additional libraries or complex configurations. You can also extend the state management logic if needed by leveraging the provided hooks and context.",
  },
  {
    _id: "item-7",
    question:
      "How can I contribute to the development of this accordion component?",
    answer:
      "We welcome contributions to the development of this accordion component. You can contribute by submitting pull requests, reporting issues, or suggesting new features. Please refer to our contribution guidelines on GitHub for more information on how to get started. Your contributions help us improve the component and provide better functionality and usability for all users.",
  },
  {
    _id: "item-9",
    question: "Are there any known issues or limitations with this component?",
    answer:
      "Currently, there are no major known issues with this accordion component. However, like any software, there may be minor bugs or limitations that we are continuously working to address. We encourage users to report any issues they encounter so that we can address them promptly. Our goal is to ensure the component is as robust and reliable as possible.",
  },
  {
    _id: "item-10",
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
    overview:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.“Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    socialMedia: [
      {
        platform: "LinkedIn",
        icon: "/icons/LinkedIn.svg",
        url: "https://www.linkedin.com/in/johndeo",
      },
      {
        platform: "Twitter",
        icon: "/icons/Twitter.svg",
        url: "https://twitter.com/johndeo",
      },
      {
        platform: "Instagram",
        icon: "/icons/Instagram.svg",
        url: "https://www.instagram.com/johndeo",
      },
      {
        platform: "Youtube",
        icon: "/icons/Youtube.svg",
        url: "https://youtube.com/johndeo",
      },
    ],
  },
  {
    imgSrc: "/icons/profile.svg",
    name: "Jane Smith",
    position: "Chief Operating Officer",
    overview:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    socialMedia: [
      {
        platform: "LinkedIn",
        icon: "/icons/LinkedIn.svg",
        url: "https://www.linkedin.com/in/janesmith",
      },
      {
        platform: "Twitter",
        icon: "/icons/Twitter.svg",
        url: "https://twitter.com/janesmith",
      },
      {
        platform: "Instagram",
        icon: "/icons/Instagram.svg",
        url: "https://www.instagram.com/janesmith",
      },
      {
        platform: "Youtube",
        icon: "/icons/Youtube.svg",
        url: "https://youtube.com/janesmith",
      },
    ],
  },
  {
    imgSrc: "/icons/profile.svg",
    name: "Alex Johnson",
    position: "Chief Technology Officer",
    overview:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in urna eu enim aliquet placerat.",
    socialMedia: [
      {
        platform: "LinkedIn",
        icon: "/icons/LinkedIn.svg",
        url: "https://www.linkedin.com/in/alexjohnson",
      },
      {
        platform: "Twitter",
        icon: "/icons/Twitter.svg",
        url: "https://twitter.com/alexjohnson",
      },
    ],
  },
];

// export const courses: CourseCardProps[] = [
//   {
//     id: 1,
//     imgSrc: "/images/course-img.png",
//     courseTitle: "Management Skills",
//     teacherName: "Dr. John Smith",
//     tags: ["Leadership", "Management"],
//     details: ["22 Lessons", "5 Hours"],
//     amount: "$499.99",
//     buttonText: "Register",
//     institute: "Indian Institute of Technology Kanpur",
//     instituteLogo: "/icons/collage.svg",
//   },
// ];

export const socialMedia = [
  {
    platform: "LinkedIn",
    icon: "/icons/LinkedIn.svg",
    url: "https://www.linkedin.com/in/johndeo",
  },
  {
    platform: "Twitter",
    icon: "/icons/Twitter.svg",
    url: "https://twitter.com/johndeo",
  },
  {
    platform: "Instagram",
    icon: "/icons/Instagram.svg",
    url: "https://www.instagram.com/johndeo",
  },
  {
    platform: "Youtube",
    icon: "/icons/Youtube.svg",
    url: "https://youtube.com/johndeo",
  },
  {
    platform: "Facebook",
    icon: "/icons/Facebook.svg",
    url: "https://facebook.com/in/",
  },
];

export const quickLinks: FooterLink[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about-us" },
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Terms & Condition", url: "/terms-of-use" },
  { title: "Contact Us", url: "/contact-us" },
  { title: "Login", url: "/login" },
];

export const filters: Section[] = [
  {
      id: 'reviews',
      name: 'Review',
      options: [
          { id: 1, value: '5', label: '5 Star', checked: false },
          { id: 2, value: '4', label: '4 Star', checked: false },
          { id: 3, value: '3', label: '3 Star', checked: false },
      ],
  },
  {
      id: 'mentor.name',
      name: 'Professor',
      options: [
          { id: 4, value: 'John Doe', label: 'John Doe', checked: false },
          { id: 5, value: 'Jane Smith', label: 'Jane Smith', checked: false },
          { id: 6, value: 'Mark Johnson', label: 'Mark Johnson', checked: false },
      ],
  },
  {
      id: 'institute',
      name: 'Colleges',
      options: [
          { id: 7, value: 'Indian Institute of Technology Madras', label: 'Indian Institute of Technology Madras', checked: false },
          { id: 8, value: 'SAGE University', label: 'SAGE University', checked: false },
          { id: 9, value: 'IIT Delhi', label: 'IIT Delhi', checked: false },
      ],
  },
  {
      id: 'title',
      name: 'Courses',
      options: [
          { id: 10, value: 'Advanced Management Skills', label: 'Advanced Management Skills', checked: false },
      ],
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

export const cities = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "Delhi", label: "Delhi" },
  { value: "Bengaluru", label: "Bengaluru" },
  { value: "Chennai", label: "Chennai" },
  { value: "Kolkata", label: "Kolkata" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Ahmedabad", label: "Ahmedabad" },
  { value: "Pune", label: "Pune" },
  { value: "Jaipur", label: "Jaipur" },
  { value: "Lucknow", label: "Lucknow" },
  { value: "Kanpur", label: "Kanpur" },
  { value: "Nagpur", label: "Nagpur" },
  { value: "Indore", label: "Indore" },
  { value: "Thane", label: "Thane" },
  { value: "Bhopal", label: "Bhopal" },
  { value: "Visakhapatnam", label: "Visakhapatnam" },
  { value: "Patna", label: "Patna" },
  { value: "Vadodara", label: "Vadodara" },
  { value: "Ghaziabad", label: "Ghaziabad" },
  { value: "Ludhiana", label: "Ludhiana" },
  { value: "Agra", label: "Agra" },
  { value: "Nashik", label: "Nashik" },
  { value: "Faridabad", label: "Faridabad" },
  { value: "Meerut", label: "Meerut" },
  { value: "Rajkot", label: "Rajkot" },
  { value: "Srinagar", label: "Srinagar" },
  { value: "Amritsar", label: "Amritsar" },
];

export const districts = [
  { value: "Mumbai Suburban", label: "Mumbai Suburban" },
  { value: "South Delhi", label: "South Delhi" },
  { value: "Bengaluru Urban", label: "Bengaluru Urban" },
  { value: "Chennai Central", label: "Chennai Central" },
  { value: "North 24 Parganas", label: "North 24 Parganas" },
  { value: "Hyderabad District", label: "Hyderabad District" },
  { value: "Ahmedabad District", label: "Ahmedabad District" },
  { value: "Pune District", label: "Pune District" },
  { value: "Jaipur District", label: "Jaipur District" },
  { value: "Lucknow District", label: "Lucknow District" },
  { value: "Kanpur Nagar", label: "Kanpur Nagar" },
  { value: "Nagpur District", label: "Nagpur District" },
  { value: "Indore District", label: "Indore District" },
  { value: "Thane District", label: "Thane District" },
  { value: "Bhopal District", label: "Bhopal District" },
  { value: "Visakhapatnam District", label: "Visakhapatnam District" },
  { value: "Patna District", label: "Patna District" },
  { value: "Vadodara District", label: "Vadodara District" },
  { value: "Ghaziabad District", label: "Ghaziabad District" },
  { value: "Ludhiana District", label: "Ludhiana District" },
  { value: "Agra District", label: "Agra District" },
  { value: "Nashik District", label: "Nashik District" },
  { value: "Faridabad District", label: "Faridabad District" },
  { value: "Meerut District", label: "Meerut District" },
  { value: "Rajkot District", label: "Rajkot District" },
  { value: "Srinagar District", label: "Srinagar District" },
  { value: "Amritsar District", label: "Amritsar District" },
];

export const states = [
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Delhi", label: "Delhi" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "West Bengal", label: "West Bengal" },
  { value: "Telangana", label: "Telangana" },
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
  {
    value: "Andaman and Nicobar Islands",
    label: "Andaman and Nicobar Islands",
  },
  { value: "Chandigarh", label: "Chandigarh" },
  {
    value: "Dadra and Nagar Haveli and Daman and Diu",
    label: "Dadra and Nagar Haveli and Daman and Diu",
  },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Puducherry", label: "Puducherry" },
];

export const initialData: FormData = {
  personalInfo: {
    fname: "",
    mname: "",
    lname: "",
    email: "",
    description: "",
    url: "",
    gender: "",
    dob: null,
    address: "",
    pincode: "",
    number1: "",
    number2: "",
    number3: "",
  },
  educationalInfo: {
    school: "",
    stream: "",
    schoolPassingYear: null,
    seniorSchool: "",
    seniorStream: "",
    senoirSchoolPassingYear: null,
    marks: "",
    diploma: "",
    diplomaMarks: "",
    diplomaPassingYear: "",
    degree: "",
    college: "",
    branch: "",
    collageStartingYear: null,
    collageEndingYear: null,
  },
  skillsInfo: {
    intro: "",
    skills: "",
    skillList: [{ skill: "", description: "" }],
  },
  experience: [
    {
      designation: "",
      organization: "",
      startingYear: null,
      endingYear: null,
      description: "",
    },
  ],
};

export const coursesTableData = [
  {
    courseName: "Course 1",
    duration: "4 Years",
    specialisation: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Turpis donec amet proin auctor nec in diam aenean viverra.",
    ],
    criteria: "Takes multiple projects",
    acceptedExams: "Lorem ipsum dolor",
    fees: "INR 4.10 Lakhs",
    details: "Keeps shifting developers from one project to another",
  },
  {
    courseName: "Course 2",
    duration: "3 Years",
    specialisation: [
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    criteria: "Requires advanced coding skills",
    acceptedExams: "Consectetur adipiscing elit",
    fees: "INR 3.50 Lakhs",
    details: "Provides hands-on experience with real-world projects",
  },
  {
    courseName: "Course 3",
    duration: "5 Years",
    specialisation: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    criteria: "Strong analytical skills",
    acceptedExams: "Sed do eiusmod tempor",
    fees: "INR 5.50 Lakhs",
    details: "Includes industry internships and placements",
  },
  {
    courseName: "Course 4",
    duration: "5 Years",
    specialisation: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    criteria: "Strong analytical skills",
    acceptedExams: "Sed do eiusmod tempor",
    fees: "INR 5.50 Lakhs",
    details: "Includes industry internships and placements",
  },
  {
    courseName: "Course 5",
    duration: "5 Years",
    specialisation: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    criteria: "Strong analytical skills",
    acceptedExams: "Sed do eiusmod tempor",
    fees: "INR 5.50 Lakhs",
    details: "Includes industry internships and placements",
  },
  {
    courseName: "Course 6",
    duration: "5 Years",
    specialisation: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    criteria: "Strong analytical skills",
    acceptedExams: "Sed do eiusmod tempor",
    fees: "INR 5.50 Lakhs",
    details: "Includes industry internships and placements",
  },
];

export const facilities: string[] = [
  "Playground",
  "Playground",
  "Start-up Incubation Centre",
  "Seminar Hall",
  "Seminar Hall",
  "Playground",
  "Hostels (separate boys and girls)",
  "Playground",
];

export const images: string[] = [
  "https://via.placeholder.com/150/0000FF",
  "https://via.placeholder.com/150/FF0000",
  "https://via.placeholder.com/150/00FF00",
  "https://via.placeholder.com/150/FFFF00",
  "https://via.placeholder.com/150/FF00FF",
  "https://via.placeholder.com/150/00FFFF",
  "https://via.placeholder.com/150/000000",
  "https://via.placeholder.com/150/FFFFFF",
  "https://via.placeholder.com/150/808080",
  "https://via.placeholder.com/150/800000",
  "https://via.placeholder.com/150/008000",
  "https://via.placeholder.com/150/000080",
];

export const recruiterCompanies: string[] = [
  "/recruiters/myntra.svg",
  "/recruiters/flipkart.svg",
  "/recruiters/amazon.svg",
  "/recruiters/myntra.svg",
  "/recruiters/flipkart.svg",
  "/recruiters/amazon.svg",
  "/recruiters/myntra.svg",
];

export const affiliatedColleges = [
  {
    name: "City University of Science and Technology",
    link: "https://www.city.edu.pk",
  },
  {
    name: "Greenwood Institute of Technology and Management",
    link: "https://www.greenwood.edu",
  },
  {
    name: "National Institute of Engineering and Technology",
    link: "https://www.niet.co.in",
  },
  {
    name: "Oceanic College of Arts and Sciences",
    link: "https://www.oceaniccollege.edu.au",
  },
  {
    name: "Pacific University of Management and Technology",
    link: "https://www.pacific.edu",
  },
  {
    name: "Sunshine Academy of Medical Sciences",
    link: "https://www.sunshine.edu",
  },
  {
    name: "Vanguard University of Research and Development",
    link: "https://www.vanguard.edu",
  },
  {
    name: "Western Academy of Business Administration",
    link: "https://www.westernacademy.edu",
  },
  {
    name: "Zenith Institute of Information Technology",
    link: "https://www.zenith.edu",
  },
  {
    name: "Paramount College of Engineering and Technology",
    link: "https://www.paramountcollege.edu",
  },
];

export const courseDetailData: courseDetailDataProp[] = [
  {
    id: 1,
    title: "Advanced Management Skills",
    courseImg: "/images/course-img.png",
    institute: "Indian Institute of Technology Madras",
    mentor: {
      id: "1234",
      name: "John Doe",
      profileImg: "/icons/profile.svg",
      university: "University of Texas",
      linkedin: "https://www.linkedin.com/in/",
      email: "john.doe@example.com",
      stats: ["10 Years Experience", "1000+ Students", "5 Courses"],
      bio: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      profile: "/",
      education: [
        {
          university: "University of Texas",
          degree: "B.Tech in Computer Science Engineering",
          year: "April 2003",
        },
        {
          university: "University of Texas",
          degree: "B.Tech in Computer Science Engineering",
          year: "April 2006",
          description:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
        {
          university: "University of Texas",
          degree: "B.Tech in Computer Science Engineering",
          year: "April 2009",
          description:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
      ],
      totalStudents: "49K+",
      totalCourses: 89,
      experience: [
        {
          university: "University of Texas",
          position: "Associate Professor",
          duration: "March 2009 - April 2012",
          description:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
        {
          university: "University of Texas",
          position: "Professor",
          duration: "April 2012 - Present",
          description:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
      ],
    },
    majorSkills: ["Leadership", "Management"],
    description:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in",
    detailedDescription:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    tags: ["Beginner", "Web Development", "ReactJS"],
    price: "$199.99",
    reviews: {
      rating: 4,
      count: 1200,
      alreadyRegistered: 3000,
    },
    skillLevel: "Beginner",
    views: 15000,
    lessons: 12,
    duration: "24 Hours",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    ],
    courseOutlineData: {
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
    },
    labels: [
      { iconSrc: "/icons/stats.svg", label: "Skill Level", name: "Beginner" },
      { iconSrc: "/icons/eye.svg", label: "Views", name: 15000 },
      { iconSrc: "/icons/video.svg", label: "Lessons", name: 12 },
      { iconSrc: "/icons/timer.svg", label: "Duration", name: "24 Hours" },
    ],
  },
  {
    id: 2,
    title: "Advanced Project Management",
    courseImg: "/images/course-img.png",
    institute: "Indian Institute of Technology Delhi",
    mentor: {
      id: "5678",
      name: "Jane Smith",
      profileImg: "/icons/profile.svg",
      university: "Stanford University",
      linkedin: "https://www.linkedin.com/in/",
      email: "jane.smith@example.com",
      stats: ["15 Years Experience", "5000+ Students", "10 Courses"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
      profile: "/",
      education: [
        {
          university: "Stanford University",
          degree: "Ph.D. in Computer Science",
          year: "May 2005",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
        {
          university: "Stanford University",
          degree: "M.S. in Computer Science",
          year: "May 2002",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
      ],
      totalStudents: "100K+",
      totalCourses: 150,
      experience: [
        {
          university: "Stanford University",
          position: "Assistant Professor",
          duration: "June 2005 - May 2008",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
        {
          university: "Stanford University",
          position: "Associate Professor",
          duration: "June 2008 - Present",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
      ],
    },
    majorSkills: ["Project Management", "Leadership"],
    description:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in",
    detailedDescription:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    tags: ["Advanced", "Project Management", "Business"],
    price: "$299.99",
    reviews: {
      rating: 5.0,
      count: 1800,
      alreadyRegistered: 4000,
    },
    skillLevel: "Intermediate",
    views: 20000,
    lessons: 15,
    duration: "30 Hours",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    ],
    courseOutlineData: {
      title: "Advanced Project Management",
      modules: [
        {
          title: "Module 1: Introduction to Project Management",
          lessons: [
            {
              title: "Lesson 1.1: Project Lifecycle Overview",
              duration: "15 minutes",
              link: "#lesson1-1",
              topics: [
                {
                  title: "Topic 1.1.1: Project Initiation",
                  duration: "5 minutes",
                  materials: [
                    {
                      title: "Project Initiation PDF",
                      url: "/materials/initiation.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 1.1.2: Project Planning",
                  duration: "10 minutes",
                },
              ],
            },
            {
              title: "Lesson 1.2: Stakeholder Management",
              duration: "20 minutes",
              link: "#lesson1-2",
              topics: [
                {
                  title: "Topic 1.2.1: Stakeholder Analysis",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Stakeholder Analysis PDF",
                      url: "/materials/stakeholder.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 1.2.2: Communication Planning",
                  duration: "10 minutes",
                },
              ],
            },
          ],
        },
        {
          title: "Module 2: Project Execution and Monitoring",
          lessons: [
            {
              title: "Lesson 2.1: Execution Strategies",
              duration: "25 minutes",
              link: "#lesson2-1",
              topics: [
                {
                  title: "Topic 2.1.1: Agile Methodology",
                  duration: "15 minutes",
                  materials: [
                    {
                      title: "Agile Methodology PDF",
                      url: "/materials/agile.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 2.1.2: Scrum Framework",
                  duration: "10 minutes",
                },
              ],
            },
            {
              title: "Lesson 2.2: Monitoring Progress",
              duration: "20 minutes",
              link: "#lesson2-2",
              topics: [
                {
                  title: "Topic 2.2.1: Metrics and KPIs",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Metrics and KPIs PDF",
                      url: "/materials/metrics.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 2.2.2: Risk Management",
                  duration: "10 minutes",
                },
              ],
            },
          ],
        },
        {
          title: "Module 3: Leadership in Project Management",
          lessons: [
            {
              title: "Lesson 3.1: Leadership Strategies",
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
              title: "Lesson 3.2: Team Motivation",
              duration: "25 minutes",
              link: "#lesson3-2",
              topics: [
                {
                  title: "Topic 3.2.1: Motivational Techniques",
                  duration: "12 minutes",
                  materials: [
                    {
                      title: "Motivational Techniques PDF",
                      url: "/materials/motivation.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 3.2.2: Team Building",
                  duration: "13 minutes",
                },
              ],
            },
          ],
        },
        {
          title: "Module 4: Risk Management in Projects",
          lessons: [
            {
              title: "Lesson 4.1: Risk Identification",
              duration: "20 minutes",
              link: "#lesson4-1",
              topics: [
                {
                  title: "Topic 4.1.1: Risk Assessment",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Risk Assessment PDF",
                      url: "/materials/risk-assessment.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 4.1.2: Risk Mitigation",
                  duration: "10 minutes",
                },
              ],
            },
            {
              title: "Lesson 4.2: Contingency Planning",
              duration: "30 minutes",
              link: "#lesson4-2",
              topics: [
                {
                  title: "Topic 4.2.1: Contingency Strategies",
                  duration: "15 minutes",
                  materials: [
                    {
                      title: "Contingency Strategies PDF",
                      url: "/materials/contingency.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 4.2.2: Crisis Management",
                  duration: "15 minutes",
                },
              ],
            },
          ],
        },
        {
          title: "Module 5: Project Closure and Evaluation",
          lessons: [
            {
              title: "Lesson 5.1: Closing Processes",
              duration: "25 minutes",
              link: "#lesson5-1",
              topics: [
                {
                  title: "Topic 5.1.1: Formal Acceptance",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Formal Acceptance PDF",
                      url: "/materials/acceptance.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 5.1.2: Lessons Learned",
                  duration: "15 minutes",
                },
              ],
            },
            {
              title: "Lesson 5.2: Project Evaluation",
              duration: "20 minutes",
              link: "#lesson5-2",
              topics: [
                {
                  title: "Topic 5.2.1: Performance Review",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Performance Review PDF",
                      url: "/materials/review.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 5.2.2: Continuous Improvement",
                  duration: "10 minutes",
                },
              ],
            },
          ],
        },
      ],
    },
    labels: [
      {
        iconSrc: "/icons/stats.svg",
        label: "Skill Level",
        name: "Intermediate",
      },
      { iconSrc: "/icons/eye.svg", label: "Views", name: 20000 },
      { iconSrc: "/icons/video.svg", label: "Lessons", name: 15 },
      { iconSrc: "/icons/timer.svg", label: "Duration", name: "30 Hours" },
    ],
  },
  {
    id: 3,
    title: "Advanced Data Analysis",
    courseImg: "/images/course-img.png",
    institute: "Indian Institute of Technology Bombay",
    mentor: {
      id: "9876",
      name: "Alice Johnson",
      profileImg: "/icons/profile.svg",
      university: "Harvard University",
      linkedin: "https://www.linkedin.com/in/",
      email: "alice.johnson@example.com",
      stats: ["20 Years Experience", "8000+ Students", "15 Courses"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
      profile: "/",
      education: [
        {
          university: "Harvard University",
          degree: "Ph.D. in Physics",
          year: "June 2000",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
        {
          university: "Harvard University",
          degree: "M.S. in Physics",
          year: "June 1996",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
      ],
      totalStudents: "200K+",
      totalCourses: 250,
      experience: [
        {
          university: "Harvard University",
          position: "Assistant Professor",
          duration: "July 2000 - June 2005",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
        {
          university: "Harvard University",
          position: "Professor",
          duration: "July 2005 - Present",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.",
        },
      ],
    },
    majorSkills: ["Data Analysis", "Statistics"],
    description:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in",
    detailedDescription:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    tags: ["Advanced", "Data Analysis", "Statistics"],
    price: "$249.99",
    reviews: {
      rating: 4.2,
      count: 1500,
      alreadyRegistered: 3500,
    },
    skillLevel: "Intermediate",
    views: 18000,
    lessons: 10,
    duration: "20 Hours",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    ],
    courseOutlineData: {
      title: "Advanced Data Analysis",
      modules: [
        {
          title: "Module 1: Introduction to Data Analysis",
          lessons: [
            {
              title: "Lesson 1.1: Data Types and Sources",
              duration: "10 minutes",
              link: "#lesson1-1",
              topics: [
                {
                  title: "Topic 1.1.1: Types of Data",
                  duration: "5 minutes",
                  materials: [
                    {
                      title: "Types of Data PDF",
                      url: "/materials/data-types.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 1.1.2: Data Collection Methods",
                  duration: "5 minutes",
                },
              ],
            },
            {
              title: "Lesson 1.2: Data Cleaning Techniques",
              duration: "15 minutes",
              link: "#lesson1-2",
              topics: [
                {
                  title: "Topic 1.2.1: Preprocessing Steps",
                  duration: "7 minutes",
                  materials: [
                    {
                      title: "Preprocessing Steps PDF",
                      url: "/materials/preprocessing.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 1.2.2: Handling Missing Data",
                  duration: "8 minutes",
                },
              ],
            },
          ],
        },
        {
          title: "Module 2: Exploratory Data Analysis (EDA)",
          lessons: [
            {
              title: "Lesson 2.1: Statistical Techniques",
              duration: "20 minutes",
              link: "#lesson2-1",
              topics: [
                {
                  title: "Topic 2.1.1: Descriptive Statistics",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Descriptive Statistics PDF",
                      url: "/materials/descriptive-stats.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 2.1.2: Data Visualization",
                  duration: "10 minutes",
                },
              ],
            },
            {
              title: "Lesson 2.2: Pattern Recognition",
              duration: "25 minutes",
              link: "#lesson2-2",
              topics: [
                {
                  title: "Topic 2.2.1: Clustering Algorithms",
                  duration: "15 minutes",
                  materials: [
                    {
                      title: "Clustering Algorithms PDF",
                      url: "/materials/clustering.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 2.2.2: Dimensionality Reduction",
                  duration: "10 minutes",
                },
              ],
            },
          ],
        },
        {
          title: "Module 3: Advanced Statistical Analysis",
          lessons: [
            {
              title: "Lesson 3.1: Hypothesis Testing",
              duration: "30 minutes",
              link: "#lesson3-1",
              topics: [
                {
                  title: "Topic 3.1.1: Parametric Tests",
                  duration: "15 minutes",
                  materials: [
                    {
                      title: "Parametric Tests PDF",
                      url: "/materials/parametric-tests.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 3.1.2: Non-parametric Tests",
                  duration: "15 minutes",
                },
              ],
            },
            {
              title: "Lesson 3.2: Regression Analysis",
              duration: "25 minutes",
              link: "#lesson3-2",
              topics: [
                {
                  title: "Topic 3.2.1: Linear Regression",
                  duration: "12 minutes",
                  materials: [
                    {
                      title: "Linear Regression PDF",
                      url: "/materials/linear-regression.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 3.2.2: Logistic Regression",
                  duration: "13 minutes",
                },
              ],
            },
          ],
        },
        {
          title: "Module 4: Data Interpretation and Reporting",
          lessons: [
            {
              title: "Lesson 4.1: Data Interpretation",
              duration: "20 minutes",
              link: "#lesson4-1",
              topics: [
                {
                  title: "Topic 4.1.1: Data Synthesis",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Data Synthesis PDF",
                      url: "/materials/data-synthesis.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 4.1.2: Drawing Conclusions",
                  duration: "10 minutes",
                },
              ],
            },
            {
              title: "Lesson 4.2: Report Writing",
              duration: "30 minutes",
              link: "#lesson4-2",
              topics: [
                {
                  title: "Topic 4.2.1: Structure and Format",
                  duration: "15 minutes",
                  materials: [
                    {
                      title: "Report Writing PDF",
                      url: "/materials/report-writing.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 4.2.2: Visual Presentation",
                  duration: "15 minutes",
                },
              ],
            },
          ],
        },
        {
          title: "Module 5: Case Studies in Data Analysis",
          lessons: [
            {
              title: "Lesson 5.1: Case Study 1",
              duration: "25 minutes",
              link: "#lesson5-1",
              topics: [
                {
                  title: "Topic 5.1.1: Problem Statement",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Problem Statement PDF",
                      url: "/materials/problem-statement.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 5.1.2: Data Analysis Approach",
                  duration: "15 minutes",
                },
              ],
            },
            {
              title: "Lesson 5.2: Case Study 2",
              duration: "20 minutes",
              link: "#lesson5-2",
              topics: [
                {
                  title: "Topic 5.2.1: Data Visualization",
                  duration: "10 minutes",
                  materials: [
                    {
                      title: "Data Visualization PDF",
                      url: "/materials/data-visualization.pdf",
                      type: "pdf",
                    },
                  ],
                },
                {
                  title: "Topic 5.2.2: Insights and Recommendations",
                  duration: "10 minutes",
                },
              ],
            },
          ],
        },
      ],
    },
    labels: [
      {
        iconSrc: "/icons/stats.svg",
        label: "Skill Level",
        name: "Intermediate",
      },
      { iconSrc: "/icons/eye.svg", label: "Views", name: 18000 },
      { iconSrc: "/icons/video.svg", label: "Lessons", name: 10 },
      { iconSrc: "/icons/timer.svg", label: "Duration", name: "20 Hours" },
    ],
  },
];


export const testimonials: Testimonial[] = [
  {
      name: "Amit",
      role: "Student",
      says: "“Participating in the Minds Meetup cohort was a game-changer for me. The skills I acquired and the connections I made have opened up numerous opportunities in the tech industry. I highly recommend it to anyone serious about a career in tech. The mentors were incredibly supportive and knowledgeable, providing invaluable insights into the industry. The cohort community was also very collaborative and encouraging.”"
  },
  {
      name: "John",
      role: "Developer",
      says: "“The experience was amazing and transformative. It pushed me to grow and develop in ways I hadn't anticipated. The hands-on projects and real-world scenarios were particularly beneficial in honing my skills. The support from peers and instructors was fantastic, and I felt a true sense of camaraderie. This program is a must for anyone looking to make a significant impact in their career.”"
  },
  {
      name: "Jane",
      role: "Engineer",
      says: "“I learned so much and met incredible people who have become invaluable resources and friends. The structured curriculum and the variety of topics covered were exceptional. The practical exercises helped solidify my understanding, and the networking opportunities were unparalleled. I would highly recommend this program to anyone looking to advance their technical skills and professional network.”"
  },
  {
      name: "Sara",
      role: "Designer",
      says: "“A fantastic experience that has greatly impacted my career. Highly recommended! The design challenges were both fun and educational, and the feedback from mentors was constructive and encouraging. The collaborative environment fostered creativity and innovation, and I left the program with a portfolio of work I am truly proud of. This experience has been a cornerstone in my professional development.”"
  },
  {
      name: "Michael",
      role: "Product Manager",
      says: "“The knowledge and network I gained here have been instrumental in my professional journey. The program's emphasis on practical application of skills was incredibly beneficial. I appreciated the focus on both technical and soft skills, preparing me to tackle complex projects with confidence. The connections I've made have opened doors to new opportunities, and I feel well-prepared for future challenges.”"
  },
  {
      name: "Emma",
      role: "Data Scientist",
      says: "“An unforgettable experience that has significantly boosted my career prospects. The curriculum was rigorous and relevant, and the mentorship was outstanding. The community of learners was diverse and supportive, making for a rich learning environment. The projects I completed during the program have directly contributed to my professional success, and I am grateful for the experience.”"
  }
];