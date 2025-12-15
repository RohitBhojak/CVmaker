import InputField from "./common/InputField";
import Dropdown from "./common/Dropdown";
import { useState } from "react";
import Button from "../common/Button";
import DeleteButton from "./common/DeleteButton";
import AddButton from "./common/AddButton";
import { useImmer } from "use-immer";
import { Trash2, SquarePen } from "lucide-react";
import { v4 } from "uuid";

const Personal = ({ setResume, isActive, onClick, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [links, setLinks] = useImmer([{ id: v4(), value: "" }]);
  const [isEdit, setIsEdit] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    setResume((draft) => {
      draft.personal = {
        name,
        email,
        phone,
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
          isEdit={isEdit}
          value={name}
          setValue={setName}
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          isRequired={true}
          isEdit={isEdit}
          value={email}
          setValue={setEmail}
        />
        <InputField
          label="Phone"
          type="tel"
          id="phone"
          isRequired={true}
          isEdit={isEdit}
          value={phone}
          setValue={setPhone}
        />

        {links.map((link, index) => {
          return (
            <div key={link.id} className="flex items-end gap-2">
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

        {isEdit ? (
          <Button onClick={submit}>Submit</Button>
        ) : (
          <Button onClick={edit}>
            <SquarePen /> Edit
          </Button>
        )}
      </form>
    </Dropdown>
  );
};

export default Personal;
