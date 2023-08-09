import Input from './InputForm';
import Button from './Button';

function ProjectsForm(props) {
  const { handleDelete } = props;

  return (
    <>
      <label htmlFor="title">Title</label>
      <Input type="text" name="title" />
      <label htmlFor="description">Description</label>
      <textarea name="description"></textarea>
      <Button text="delete" handler={handleDelete} />
    </>
  );
}

export default ProjectsForm;
