const jobOptions = [
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Backend Developer", label: "Backend Developer" },
  { value: "Full Stack Developer", label: "Full Stack Developer" },
  { value: "Data Scientist", label: "Data Scientist" },
  { value: "Machine Learning Engineer", label: "Machine Learning Engineer" },
  { value: "DevOps Engineer", label: "DevOps Engineer" },
  { value: "Product Manager", label: "Product Manager" },
  { value: "UI/UX Designer", label: "UI/UX Designer" },
  { value: "Quality Assurance Engineer", label: "Quality Assurance Engineer" },
  { value: "Business Analyst", label: "Business Analyst" },
  { value: "System Administrator", label: "System Administrator" }
];
const resumeSuggestions = [
  { title: "Education", body: "Mention your graduation year and major clearly." },
  { title: "Skills", body: "List relevant skills with proper keywords for ATS." },
  { title: "Work Experience", body: "Include company names, roles, and achievements." },
  { title: "Projects", body: "Highlight key projects with technologies used." },
  { title: "Contact Information", body: "Ensure your email and phone number are correct." }
];
const resumeQnA = [
  {
    question: "What are React hooks and why are they used?",
    answer: "React hooks are special functions that let you use state and lifecycle features in functional components. They help in managing state, side effects, and context without class components."
  },
  {
    question: "Explain the event loop in Node.js.",
    answer: "The event loop in Node.js handles asynchronous operations. It allows Node.js to perform non-blocking I/O by offloading tasks to the system kernel."
  },
  {
    question: "What challenges did you face in your E-commerce MERN project?",
    answer: "One challenge was optimizing product search and filtering. I solved it by using MongoDB indexing and server-side pagination which improved performance."
  },
  {
    question: "How did you optimize performance in your previous company project?",
    answer: "I improved API speed by adding Redis caching and restructuring queries, reducing response time from 1.5s to 400ms."
  },
  {
    question: "Tell me about a time when you solved a tough problem.",
    answer: "During a project deadline, payment gateway integration failed. I debugged API logs, fixed incorrect headers, and delivered the project on time."
  }
];

export {jobOptions,resumeSuggestions,resumeQnA};