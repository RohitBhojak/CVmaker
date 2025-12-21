import Button from "../../common/Button";
import { PencilIcon } from "lucide-react";
export default function SubmitEditButton({ isEdit, onSubmit, onEdit }) {
  return (
    <>
      {isEdit ? (
        <Button onClick={onSubmit}>Submit</Button>
      ) : (
        <Button onClick={onEdit}>
          <PencilIcon />
          Edit
        </Button>
      )}
    </>
  );
}
