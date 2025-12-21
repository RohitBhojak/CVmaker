import InputField from "./common/InputField";
import Dropdown from "./common/Dropdown";
import { useState } from "react";
import SubmitEditButton from "./common/SubmitEditButton";
import DeleteButton from "./common/DeleteButton";
import AddButton from "./common/AddButton";
import { useImmer } from "use-immer";
import { v4 } from "uuid";
import validate from "../utils/validate";
import { personalSchema } from "./schema";

const Personal = ({ setResume, isActive, onClick, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [links, setLinks] = useImmer([{ id: v4(), value: "" }]);
  const [isEdit, setIsEdit] = useState(true);
  const [errors, setErrors] = useState({});

  const submit = (e) => {
    e.preventDefault();

    const data = { name, email, phone };
    const newErrors = validate(data, personalSchema);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setResume((draft) => {
      draft.personal = {
        ...data,
        links: links.map((link) => link.value),
      };
    });

    setIsEdit(false);
  };

  const edit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const addLink = () => {
    setLinks((draft) => {
      draft.push({ id: v4(), value: "" });
    });
  };

  const deleteLink = (index) => {
    setLinks((draft) => {
      draft.splice(index, 1);
    });
  };

  return (
    <Dropdown
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
      heading={"Personal Details"}
    >
      <form>
        <InputField
          label="Name"
          type="text"
          id="name"
          isRequired={true}
          error={errors.name}
          isEdit={isEdit}
          value={name}
          setValue={setName}
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          isRequired={true}
          error={errors.email}
          isEdit={isEdit}
          value={email}
          setValue={setEmail}
        />
        <InputField
          label="Phone"
          type="tel"
          id="phone"
          isRequired={true}
          error={errors.phone}
          isEdit={isEdit}
          value={phone}
          setValue={setPhone}
        />

        {links.map((link, index) => {
          return (
            <div key={link.id} className="flex gap-2">
              <div className="grow">
                <InputField
                  label={`Link ${index + 1}`}
                  type="url"
                  id={link.id}
                  isRequired={false}
                  isEdit={isEdit}
                  value={link.value}
                  setValue={(value) => {
                    setLinks((draft) => {
                      draft.find((l) => l.id === link.id).value = value;
                    });
                  }}
                />
              </div>

              {isEdit && <DeleteButton onClick={() => deleteLink(index)} />}
            </div>
          );
        })}

        {isEdit && <AddButton onClick={addLink}>+ Add Link</AddButton>}

        <SubmitEditButton isEdit={isEdit} onSubmit={submit} onEdit={edit} />
      </form>
    </Dropdown>
  );
};

export default Personal;
