import { useState } from "react";

interface NewListFormProps {
  addList: (name: string) => void;
}

const NewListForm = ({ addList }: NewListFormProps) => {
  const [newList, setNewList] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newList.trim() === "") return;
    addList(newList);
    setNewList("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-list-form">
      <div className="form-row">
        <label htmlFor="item" className="form-label">
          <div className="text-center">
            <h1 className="display-2">Welcome to ListHub!</h1>
            <h1 className="display-6">Add New List</h1>
          </div>
        </label>
        <input
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
          type="text"
          id="item"
          className="form-control"
        />
      </div>
      <br />
      <button className="btn btn-primary">Add List</button>
    </form>
  );
};

export default NewListForm;
