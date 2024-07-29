import { Control, FieldValues, Path } from "react-hook-form";

export interface FAQ {
  _id: string;
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
  majorSkills: string[];
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

export type Experience = {
  designation: string;
  organization: string;
  startingYear: Date | null;
  endingYear: Date | null;
  description: string;
};

export type FormData = {
  personalInfo: {
    fname: string;
    mname: string;
    lname: string;
    email: string;
    description: string;
    url: string;
    number1: string;
    number2: string;
    number3: string;
    dob: Date | null;
    gender: string;
    address: string;
    pincode: number | string;
  };
  educationalInfo: {
    school: string;
    stream: string;
    schoolPassingYear: Date | null;
    seniorSchool: string;
    seniorStream: string;
    senoirSchoolPassingYear: Date | null;
    marks: string;
    diploma: string;
    diplomaMarks: string;
    diplomaPassingYear: string;
    degree: string;
    college: string;
    branch: string;
    collageStartingYear: Date | null;
    collageEndingYear: Date | null;
  };
  skillsInfo: {
    intro: string;
    skills: string;
    skillList: { skill: string; description: string }[];
  };
  experience: Experience[];
};

export type Option = {
  value: string;
  label: string;
};

export type ReusableComboboxProps = {
  options: Option[];
  initialValue?: string | null;
  onChange: (value: string | null) => void;
  placeholder?: string;
  label?: string;
};

export interface FooterLink {
  title: string;
  url: string;
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

export interface Mentor {
  id: string;
  name: string;
  profileImg: string;
  university: string;
  linkedin: string;
  email: string;
  stats: string[];
  bio: string;
  profile: string;
  education?: {
    university: string;
    degree: string;
    year: string;
    description?: string;
  }[];
  totalStudents?: string;
  totalCourses?: number;
  experience?: {
    university: string;
    position: string;
    duration: string;
    description?: string;
  }[];
}

export interface Review {
  rating: number;
  count: number;
  alreadyRegistered: number;
}

export interface LabelData {
  iconSrc: string;
  label: string;
  name: string | number;
}

export interface courseDetailDataProp {
  id: number;
  title: string;
  courseImg: string;
  institute: string;
  mentor: Mentor;
  majorSkills: string[];
  description: string;
  detailedDescription: string;
  tags: string[];
  price: string;
  reviews: Review;
  skillLevel: string;
  views: number;
  lessons: number;
  duration: string;
  requirements: string[];
  courseOutlineData: Course;
  labels: LabelData[];
}

export interface FilterOption {
  id: number;
  value: string;
  label: string;
  checked: boolean;
}

export interface Section {
  id: keyof courseDetailDataProp | string;
  name: string;
  options: FilterOption[];
}

export interface Testimonial {
  name: string;
  role: string;
  says: string;
}

export interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
}

export interface CourseDetail {
  name: string;
  specialization: string[];
  courseFee: number;
  admissionCriteria: string;
  acceptedExams: string[];
  hostelFee: number;
  detail: string;
  _id: string;
}

export interface CourseDataTableProps {
  courses: CourseDetail[];
}
