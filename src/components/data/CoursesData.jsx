import htmlcss from "../../assets/html-css.jpg";
import js from "../../assets/js.png";
import python from "../../assets/python.png";

export const coursesData = {
  "web-development": {
    "html-css": {
      id: "html-css",
      name: "HTML & CSS",
      description: "Master the fundamentals of web structure and styling",
      longDescription:
        "In this comprehensive module, you'll learn everything about HTML5 and CSS3 to build modern, responsive websites. Starting with basic document structure and moving to advanced layout techniques like Grid and Flexbox, you'll develop the core skills every web developer needs.",
      image: htmlcss,
      duration: "3 weeks",
      topics: [
        "HTML5 Document Structure",
        "Semantic HTML Elements",
        "CSS Selectors and Properties",
        "Box Model and Layout",
        "Responsive Design Principles",
        "Flexbox and CSS Grid",
        "CSS Animations and Transitions",
        "Web Accessibility Basics",
      ],
      lessons: [
        {
          title: "Introduction to HTML",
          duration: "45 minutes",
          description: "Learn the basics of HTML structure and elements",
        },
        {
          title: "Working with Text and Lists",
          duration: "60 minutes",
          description: "Format text and create ordered and unordered lists",
        },
        {
          title: "Introduction to CSS",
          duration: "45 minutes",
          description: "Learn how to style HTML elements with CSS",
        },
        {
          title: "CSS Box Model",
          duration: "60 minutes",
          description:
            "Understand padding, borders, margin and content areas",
        },
        {
          title: "Flexbox Layout",
          duration: "75 minutes",
          description: "Create flexible page layouts with CSS Flexbox",
        },
      ],
    },
    javascript: {
      id: "javascript",
      name: "JavaScript",
      description: "Learn the core programming language of the web",
      longDescription:
        "This module covers JavaScript from the ground up. You'll start with basic syntax and programming concepts, then progress to DOM manipulation, event handling, asynchronous programming, and modern ES6+ features. By the end, you'll be able to create interactive, dynamic web experiences.",
      image: js,
      duration: "4 weeks",
      topics: [
        "JavaScript Syntax and Data Types",
        "Functions and Scope",
        "DOM Manipulation",
        "Event Handling",
        "Asynchronous JavaScript",
        "Promises and Async/Await",
        "ES6+ Features",
        "Error Handling",
      ],
      lessons: [
        {
          title: "JavaScript Fundamentals",
          duration: "60 minutes",
          description: "Learn variables, data types, and basic operations",
        },
        {
          title: "Functions and Control Flow",
          duration: "75 minutes",
          description: "Create functions and use conditional statements",
        },
        {
          title: "Working with Arrays and Objects",
          duration: "60 minutes",
          description: "Use JavaScript's core data structures effectively",
        },
        {
          title: "DOM Manipulation",
          duration: "90 minutes",
          description: "Select and modify HTML elements with JavaScript",
        },
        {
          title: "Event Handling",
          duration: "60 minutes",
          description: "Respond to user interactions with event listeners",
        },
      ],
    },
  },
  "data-science": {
    python: {
      id: "python",
      name: "Python",
      description:
        "Learn the primary programming language for data science",
      longDescription:
        "This module provides a comprehensive introduction to Python programming with a focus on data science applications. You'll learn syntax, data structures, functions, and libraries essential for data manipulation and analysis.",
      image: python,
      duration: "4 weeks",
      topics: [
        "Python Syntax and Data Types",
        "Control Flow and Functions",
        "Lists, Dictionaries, and Sets",
        "File Handling",
        "Object-Oriented Programming",
        "NumPy for Numerical Computing",
        "Pandas for Data Analysis",
        "Data Visualization with Matplotlib",
      ],
      lessons: [
        {
          title: "Python Basics",
          duration: "60 minutes",
          description: "Learn Python syntax, variables, and data types",
        },
        {
          title: "Control Structures",
          duration: "75 minutes",
          description: "Work with if statements, loops, and functions",
        },
        {
          title: "Data Structures",
          duration: "90 minutes",
          description: "Master lists, dictionaries, tuples, and sets",
        },
        {
          title: "NumPy Fundamentals",
          duration: "60 minutes",
          description: "Perform efficient numerical operations",
        },
        {
          title: "Pandas for Data Analysis",
          duration: "90 minutes",
          description: "Learn data manipulation with DataFrames",
        },
      ],
    },
  },
};