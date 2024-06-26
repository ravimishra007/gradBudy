export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

export interface TeamCardProps {
  imgSrc: string;
  name: string;
  position: string;
  overview: string;
  socialMedia: SocialMedia[];
}

export interface SocialMediaAccount {
  platform: string;
  icon: string;
  url: string;
}

export interface TeamMember {
  imgSrc: string;
  name: string;
  position: string;
  overview: string;
  socialMedia: SocialMediaAccount[];
}

export interface CourseCardProps {
  id: string | number;
  imgSrc: string;
  courseTitle: string;
  teacherName: string;
  institute: string;
  instituteLogo: string;
  tags: string[];
  details: string[];
  amount: string;
  buttonText: string;
}

export interface LableCardProps {
  iconSrc: string;
  name: string | number;
  lable: string;
}

export interface Topic {
  title: string;
  duration: string;
}

export interface Material {
  title: string;
  url: string;
  type: "pdf" | "txt"; // Add more types if necessary
}

export interface Topic {
  title: string;
  duration: string;
  materials?: Material[];
}

export interface Lesson {
  title: string;
  duration: string;
  link: string;
  topics: Topic[];
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  title: string;
  modules: Module[];
}