import Input from './InputForm';
import Button from './Button';

function ProjectsForm(props) {
  const { handleDelete } = props;

  return (
    <div className="flex flex-col gap-3 w-6/12">
      <label htmlFor="title">Title</label>
      <Input type="text" name="title" />
      <label htmlFor="description">Description</label>
      <textarea name="description"></textarea>
      <Button text="delete" handler={handleDelete} className="w-6/12" />
    </div>
  );
}

export default ProjectsForm;
