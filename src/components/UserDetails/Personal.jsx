import InputField from "./InputField";
import Dropdown from "./Dropdown";
import { useState } from "react";
import FormHeading from "./FormHeading";
import Button from "../Button";
import { useImmer } from "use-immer";
import { Trash2, SquarePen } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function Personal({ resume, setResume, isActive, onClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [links, setLinks] = useImmer([{ id: uuidv4(), value: "" }]);
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
      draft.push({ id: uuidv4(), value: "" });
    });
  };

  const deleteLink = (index) => {
    setLinks((draft) => {
      draft.splice(index, 1);
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
              <div className="flex-grow">
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

              {isEdit && (
                <Button
                  type="button"
                  onClick={() => deleteLink(index)}
                  className="bg-transparent hover:bg-red-100 text-slate-400 hover:!text-red-600 dark:hover:bg-red-900/30 dark:hover:!text-red-400 !p-2 !w-auto mb-3 self-end shadow-none"
                >
                  <Trash2 size={20} />
                </Button>
              )}
            </div>
          );
        })}

        {isEdit && (
          <Button
            type="button"
            onClick={addLink}
            className="bg-transparent border border-purple-600 !text-purple-600 hover:bg-purple-100 dark:border-purple-400 dark:!text-purple-400 dark:hover:bg-slate-900"
          >
            + Add Link
          </Button>
        )}

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
}
