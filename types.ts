
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Tool' | 'Core' | 'Web';
  level: number; // 0 to 100
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}
