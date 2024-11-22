import List from "./components/List";
import { SetStateAction, useState } from "react";
import NewListForm from "./components/NewListForm";
import "./App.css";

type List = {
  id: string;
  name: string;
  items: string[];
};
const App = () => {
  const [lists, setLists] = useState<List[]>([]);

  const addList = (name: string) => {
    setLists((currentLists: List[]) => {
      return [
        ...currentLists,
        {
          id: `${name}+${Date.now()}`,
          name,
          items: [],
        },
      ];
    });
  };

  const addListItem = (listId: string, name: string) => {
    setLists((currentLists: List[]) => {
      return currentLists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            items: [...list.items, name],
          };
        }
        return list;
      });
    });
  };

  const deleteList = (listId: string) => {
    setLists((currentLists: List[]) => {
      return currentLists.filter((list) => list.id !== listId);
    });
  };

  const deleteListItem = (name: string, listId: string) => {
    setLists((currentLists: List[]) => {
      return currentLists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            items: list.items.filter((item) => item !== name),
          };
        }
        return list;
      });
    });
  };

  return (
    <>
      <div className="container text-center">
        <NewListForm addList={addList} />
      </div>
      <br />
      {lists.length === 0 && (
        <h1 className="display-6 text-center">No Lists to Show</h1>
      )}
      <div className="container text-center">
        <div className="row">
          {lists.map((list) => (
            <div className="col" key={list.id}>
              <List
                key={list.id}
                heading={list.name}
                items={list.items}
                listId={list.id}
                addListItem={addListItem}
                deleteListItem={deleteListItem}
                deleteList={deleteList}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
