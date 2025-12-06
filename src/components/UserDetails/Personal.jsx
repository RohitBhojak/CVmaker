import InputField from "./InputField";
import Dropdown from "./Dropdown";
import { useState } from "react";
import FormHeading from "./FormHeading";
import Button from "../Button";
export default function Personal({ resume, setResume, isActive, onClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [links, setLinks] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setResume({
      ...resume,
      personal: {
        name,
        email,
        phone,
        links,
      },
    });
  };
  return (
    <Dropdown>
      <FormHeading>Personal Details</FormHeading>
      <form>
        <InputField
          label="Name"
          type="text"
          id="name"
          isRequired={true}
          value={name}
          setValue={setName}
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          value={email}
          setValue={setEmail}
        />
        <InputField
          label="Phone"
          type="tel"
          id="phone"
          value={phone}
          setValue={setPhone}
        />
        <Button onClick={submit}> Submit </Button>
      </form>
    </Dropdown>
  );
}
