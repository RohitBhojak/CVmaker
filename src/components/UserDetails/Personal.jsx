import { useState } from "react";
import { useImmer } from "use-immer";
import Dropdown from "./common/Dropdown";
import SubmitEditButton from "./common/SubmitEditButton";
import DeleteButton from "./common/DeleteButton";
import AddButton from "./common/AddButton";
import validate from "../utils/validate";
import { personalSchema } from "./schema";
import {
  createFromTemplate,
  dynamicFieldHelper,
  renderFieldFactory,
} from "../utils/formHelper";

const Personal = ({ setResume, isActive, onClick, onClose }) => {
  // personal info template
  const personalTemplate = {
    name: "",
    email: "",
    phone: "",
  };
  // link template
  const linkTemplate = { value: "" };

  // states
  const [personal, setPersonal] = useImmer({ ...personalTemplate });
  // initialize with link template
  const [links, setLinks] = useImmer([createFromTemplate(linkTemplate)]);
  const [isEdit, setIsEdit] = useState(true);
  const [errors, setErrors] = useState({});

  // submit handler
  const handleSubmit = () => {
    // validate data and set errors
    const newErrors = validate(personal, personalSchema);
    setErrors(newErrors);
    // early return if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // update resume if no errors
    setResume((draft) => {
      draft.personal = {
        ...personal,
        links: links.map((link) => link.value),
      };
    });

    // set isEdit to false
    setIsEdit(false);
  };

  // instantiate helper functions
  const { add: addLink, delete: deleteLink } = dynamicFieldHelper(setLinks);
  const renderField = renderFieldFactory(errors, isEdit, personal, setPersonal);
  const renderLink = renderFieldFactory(errors, isEdit, links, setLinks);

  // render
  return (
    <Dropdown
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
      heading={"Personal Details"}
    >
      <form>
        {renderField("name", "Name")}
        {renderField("email", "Email", "email")}
        {renderField("phone", "Phone", "tel")}
        {links.map((link, index) => {
          return (
            <div key={link.id} className="flex gap-2">
              <div className="grow">
                {renderLink("value", `Link ${index + 1}`, "url", index, false)}
              </div>

              {isEdit && <DeleteButton onClick={() => deleteLink(index)} />}
            </div>
          );
        })}
        {isEdit && (
          <AddButton onClick={() => addLink(linkTemplate)}>
            + Add Link
          </AddButton>
        )}
        <SubmitEditButton
          isEdit={isEdit}
          onSubmit={handleSubmit}
          onEdit={() => setIsEdit(true)}
        />
      </form>
    </Dropdown>
  );
};

export default Personal;
