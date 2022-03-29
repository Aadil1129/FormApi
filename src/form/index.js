let formComponent = [
  {
    id: "1",
    label: "Name",
    required: true,
    placeholder: "Enter your name",
    type: "text",
  },
  {
    id: "2",
    label: "Age",
    required: true,
    placeholder: "Enter your age",
    type: "text",
  },
  {
    id: "3",
    label: "Email",
    required: true,
    placeholder: "Enter your email",
    type: "text",
  },
  {
    id: "4",
    label: "Phone",
    required: false,
    placeholder: "Enter your phone",
    type: "text",
  },
  {
    id: "5",
    label: "Gender",
    required: true,
    placeholder: "",
    type: "radio",
    options: ["Male", "Female", "Other"],
  },
  {
    id: "6",
    label: "Address",
    required: true,
    placeholder: "Enter your Address",
    type: "text",
  },
  {
    id: "7",
    label: "Skills",
    required: true,
    placeholder: "",
    type: "checkbox",
    options: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
  },
];
export default formComponent;
