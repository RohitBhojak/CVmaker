export default function validate(data, rules) {
  const errors = {};
  Object.keys(rules).forEach((key) => {
    const value = data[key];
    const rule = rules[key];

    if (rule.required) {
      if (!value || (typeof value === "string" && !value.trim())) {
        errors[key] = `${rule.label} is required`;
      }
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      errors[key] = `Invalid ${rule.label} format`;
    }
  });
  return errors;
}
