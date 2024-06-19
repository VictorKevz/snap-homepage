import iconTodo from "./assets/images/icon-todo.svg";
import iconCalendar from "./assets/images/icon-calendar.svg";
import iconReminders from "./assets/images/icon-reminders.svg";
import iconPlanning from "./assets/images/icon-planning.svg";

const data = [
  {
    id: 1,
    name: "Features",
    items: [
      { name: "ToDo List", icon: iconTodo },
      { name: "Calendar", icon: iconCalendar },
      { name: "Reminders", icon: iconReminders },
      { name: "Planning", icon: iconPlanning }
    ]
  },
  {
    id: 2,
    name: "Company",
    items: [
      { name: "History" },
      { name: "Our Team" },
      { name: "Blog" }
    ]
  },
  {
    id: 3,
    name: "Careers",
    items: []
  },
  {
    id: 4,
    name: "About",
    items: []
  }
];

export default data;
