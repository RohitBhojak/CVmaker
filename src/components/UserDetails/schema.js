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
