import React from "react";
import { useState } from "react";

interface NewListItemFormProps {
  addListItem: (listId: string, name: string) => void;
  listId: string;
}

const NewListItemForm = ({ addListItem, listId }: NewListItemFormProps) => {
  const [newListItem, setNewListItem] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newListItem.trim() === "") return;
    addListItem(listId, newListItem);
    setNewListItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-list-form">
      <div className="form-row">
        <input
          value={newListItem}
          onChange={(e) => setNewListItem(e.target.value)}
          type="text"
          id="item"
          className="form-control"
        />
      </div>
      <br />
      <button className="btn btn-primary">Add Item</button>
    </form>
  );
};

export default NewListItemForm;
