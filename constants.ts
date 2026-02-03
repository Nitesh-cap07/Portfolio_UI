
import { Project, Skill } from './types';

export const STUDENT_INFO = {
  name: "Nitesh",
  role: "CS Freshman & Aspiring Software Engineer",
  university: "Global Tech University",
  bio: "Passionate first-year Computer Science student with a strong foundation in core algorithms, data structures, and a curiosity for modern software architectures. Building the future, one line of code at a time.",
  email: "nitesh@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

export const SKILLS: Skill[] = [
  { name: "Python", category: "Language", level: 85 },
  { name: "Java", category: "Language", level: 80 },
  { name: "C++", category: "Language", level: 70 },
  { name: "JavaScript", category: "Web", level: 75 },
  { name: "React", category: "Web", level: 65 },
  { name: "Tailwind CSS", category: "Web", level: 90 },
  { name: "Data Structures", category: "Core", level: 85 },
  { name: "Algorithms", category: "Core", level: 80 },
  { name: "Git", category: "Tool", level: 85 },
  { name: "Linux CLI", category: "Tool", level: 75 },
  { name: "VS Code", category: "Tool", level: 95 }
];

export const PROJECTS: Project[] = [
  {
    title: "Sorting Visualizer",
    description: "An interactive web application built with React to visualize classic sorting algorithms like QuickSort, MergeSort, and BubbleSort.",
    tags: ["React", "Algorithms", "CSS"],
    link: "#",
    image: "https://picsum.photos/seed/sort/600/400"
  },
  {
    title: "CLI Task Manager",
    description: "A Python-based command-line tool for managing daily tasks with persistent storage using JSON.",
    tags: ["Python", "System Design"],
    link: "#",
    image: "https://picsum.photos/seed/cli/600/400"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive dashboard that fetches real-time weather data from OpenWeatherMap API.",
    tags: ["JavaScript", "API", "UI/UX"],
    link: "#",
    image: "https://picsum.photos/seed/weather/600/400"
  }
];
