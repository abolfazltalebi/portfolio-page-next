import { AppWindow, Layers, MousePointerClick, TabletSmartphone, Users } from "lucide-react";

export const SkillItems = [
  {
    id: 1,
    name: "Web Design Principles",
    caption:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
      icon:<Layers/>
  },
  {
    id: 2,
    name: "User Interface - UI Design",
    caption:
      "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
      icons:<MousePointerClick />
  },
  {
    id: 3,
    name: "User Experience - UX Design",
    caption:
      "Understanding of user behavior and psychology to design seamless and enjoyable user experiences that meet user needs and goals.",
      icons:<Users/>
  },
  {
    id: 4,
    name: "Responsive Web Design",
    caption:
      "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
      icons:<AppWindow/>
  },
  {
    id: 5,
    name: "Wireframing and Prototyping",
    caption:
      "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
      icons:<MousePointerClick/>
  },
  {
    id: 6,
    name: "Mobile-Friendly Optimization",
    caption:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
      icons:<TabletSmartphone/>
  },
];
