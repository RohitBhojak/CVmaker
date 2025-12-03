import InputField from "./InputField";
import Dropdown from "./Dropdown";
export default function Personal({ resume, setResume, isActive, onClick }) {
  return (
    <Dropdown>
      <h1>Personal Details</h1>
      <InputField label="Name" type="text" id="name" />
      <InputField label="Email" type="email" id="email" />
      <InputField label="Phone" type="tel" id="phone" />
    </Dropdown>
  );
}
