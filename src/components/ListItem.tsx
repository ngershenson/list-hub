import React, { MouseEventHandler } from "react";

interface ListItemProps {
  deleteListItem: (itemId: string, listId: string) => void;
  listId: string;
  name: string;
}

const ListItem = ({ name, deleteListItem, listId }: ListItemProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    deleteListItem(name, listId);
  };
  return (
    <li>
      <span>{name}</span>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={handleClick}
      >
        Remove Item
      </button>
    </li>
  );
};

export default ListItem;
