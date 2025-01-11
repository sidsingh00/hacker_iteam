import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-gray-800 p-4 rounded-t-lg flex items-center gap-3">
          <div className="bg-green-500 w-8 h-8 flex items-center justify-center rounded">
            <span className="text-white font-bold">H</span>
          </div>
          <h1 className="text-green-500 text-xl font-semibold">Item List Manager</h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Item List</h2>
          
          {/* Input Section */}
          <div className="space-y-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter item"
              className="w-full p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleAddItem}
              className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Add Item
            </button>
          </div>

          {/* Items List */}
          <div className="mt-6">
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-50 rounded"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;