import Button from "../../common/Button";
export default function SubmitEditButton({ isEdit, onSubmit, onEdit }) {
  return (
    <>
      {isEdit ? (
        <Button onClick={onSubmit}>Submit</Button>
      ) : (
        <Button onClick={onEdit}>Edit</Button>
      )}
    </>
  );
}
