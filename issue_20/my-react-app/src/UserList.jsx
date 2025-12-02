import { useState } from "react";

function UserList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (input.trim() === "") return; // prevent empty items
    setItems([...items, input]); // add to list
    setInput(""); // clear input box
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center mt-6">
      <h2 className="text-xl font-bold mb-3">Add Items to List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border w-full px-3 py-2 rounded mb-3"
        placeholder="Type something..."
      />

      <button
        onClick={handleAdd}
        className="bg-slate-900 text-white px-4 py-2 rounded w-full"
      >
        Add
      </button>

      <div className="mt-4 text-left">
        <h3 className="font-semibold mb-2">Your List:</h3>
        {items.length === 0 && <p className="text-slate-500">No items yet.</p>}

        <ul className="list-disc ml-5">
          {items.map((item, index) => (
            <li key={index} className="text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
