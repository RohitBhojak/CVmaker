import { useState } from "react";
import { useImmer } from "use-immer";
import Dropdown from "./common/Dropdown";
import AddButton from "./common/AddButton";
import DeleteButton from "./common/DeleteButton";
import SubmitEditButton from "./common/SubmitEditButton";
import FormSubHeading from "./common/FormSubHeading";
import { projectsSchema } from "./schema";
import { createFromTemplate, dynamicFieldHelper, handleSubmitFactory } from "../utils/formHelper";
import renderFieldFactory from "./common/renderFieldFactory";
import { Input, TextArea } from "./common/Inputs";
import example from "../example";
import { useFormChange } from "../customHooks/useFormChange";

const Projects = ({ loadExample, resetForm, setResume, isActive, onClick, onClose }) => {
  // template
  const projectTemplate = {
    name: "",
    link: "",
    description: "",
  };

  // states
  const [projects, setProjects] = useImmer([createFromTemplate(projectTemplate)]);
  const [isEdit, setIsEdit] = useState(true);
  const [errors, setErrors] = useState({});

  // effects to load example and reset form
  useFormChange(
    "projects",
    setResume,
    setProjects,
    setIsEdit,
    projectTemplate,
    loadExample,
    resetForm,
    example
  );
  // instantiate helper functions
  const { add: addProject, delete: deleteProject } = dynamicFieldHelper(setProjects);

  const renderField = renderFieldFactory(errors, isEdit, projects, setProjects);

  const handleSubmit = handleSubmitFactory(
    "projects",
    projects,
    projectsSchema,
    setErrors,
    setResume,
    setIsEdit
  );

  return (
    <Dropdown heading={"Project Details"} onClick={onClick} onClose={onClose} isActive={isActive}>
      <form>
        {projects.map((project, index) => {
          return (
            <div key={project.id} className="flex gap-2">
              <div className="grow">
                <div className="flex justify-between items-center mb-3">
                  <FormSubHeading>{`Project ${index + 1}`}</FormSubHeading>
                  {isEdit && <DeleteButton onClick={() => deleteProject(index)} />}
                </div>
                {renderField(Input, "name", "Name", "text", index)}
                {renderField(Input, "link", "Link", "url", index)}
                {renderField(TextArea, "description", "Description", "textArea", index)}
              </div>
            </div>
          );
        })}
        {isEdit && <AddButton onClick={() => addProject(projectTemplate)}>+ Add Project</AddButton>}

        <SubmitEditButton
          isEdit={isEdit}
          onSubmit={handleSubmit}
          onEdit={() => setIsEdit(true)}
        ></SubmitEditButton>
      </form>
    </Dropdown>
  );
};

export default Projects;
