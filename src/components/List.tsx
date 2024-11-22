import { MouseEventHandler } from "react";
import NewListItemForm from "./NewListItemForm";
import ListItem from "./ListItem";

interface ListProps {
  addListItem: (listId: string, name: string) => void;
  deleteListItem: (itemId: string, listId: string) => void;
  deleteList: (listId: string) => void;
  heading: string;
  items: string[];
  listId: string;
}
const List = ({
  heading,
  items,
  listId,
  addListItem,
  deleteListItem,
  deleteList,
}: ListProps) => {
  const handleDeleteList: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    deleteList(listId);
  };
  return (
    <>
      <div className="list-header">
        <span className="display-6">{heading}</span>
        <button className="btn btn-outline-danger" onClick={handleDeleteList}>
          Delete List
        </button>
      </div>

      {items.length === 0 && <p>No items in this list</p>}
      <ul className="list-group">
        {items.map((item: string, index: number) => (
          <ListItem
            key={`${item}+${index}`}
            listId={listId}
            name={item}
            deleteListItem={deleteListItem}
          />
        ))}
        <li>
          <NewListItemForm listId={listId} addListItem={addListItem} />
        </li>
      </ul>
    </>
  );
};

export default List;
