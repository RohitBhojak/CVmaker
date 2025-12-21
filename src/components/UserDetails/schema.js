export const personalSchema = {
  name: { required: true, label: "Name" },
  email: { required: true, label: "Email", pattern: /\S+@\S+\.\S+/ },
  phone: { required: true, label: "Phone", pattern: /^\d{10}$/ },
};

export const educationSchema = {
  school: { required: true, label: "School" },
  degree: { required: true, label: "Degree" },
  startDate: { required: true, label: "Start Date" },
  endDate: { required: true, label: "End Date" },
  marks: { required: true, label: "Marks", pattern: /^\d+(\.\d+)?$/ },
};

export const projectsSchema = {
  name: { required: true, label: "Name" },
  link: { required: true, label: "Link" },
  description: { required: true, label: "Description" },
};

export const skillsSchema = {
  title: { required: true, label: "Title" },
  description: { required: true, label: "Description" },
};

export const experienceSchema = {
  title: { required: true, label: "Title" },
  company: { required: true, label: "Company" },
  startDate: { required: true, label: "Start Date" },
  endDate: { required: true, label: "End Date" },
  description: { required: true, label: "Description" },
};

export const achievementsSchema = {
  description: { required: true, label: "Description" },
};
