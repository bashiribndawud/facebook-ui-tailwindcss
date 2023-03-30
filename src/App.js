import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import NewMessage from './components/NewMessage';
import Index from './components/Create/Index';

function App() {
  const [showMessage, setShowMessage] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [create, setCreate] = useState(false);
  function handleShowMessage() {
    setShowMessage(!showMessage)
    setShowOptions(!showOptions);
  }
  function handleCreate() {
    setCreate(!create)
  }
  console.log(window.innerHeight);
  return (
    <div className="relative">
      <Header setCreate={setCreate} create={create} />
      <div className="pt-16 w-screen h-screen bg-gray-100 flex flex-row relative">
        <div className="w-[22%] ">Sidebar</div>
        <div className="w-[55%] ">Main</div>
        <div className="w-[23%] ">widgets</div>
      </div>
      {showOptions && (
        <div
          data-tooltip-target="more_options"
          data-tooltip-placement="right"
          className="absolute hover:cursor-pointer transition-all w-14 h-14 rounded-full bg-white shadow-lg right-8 bottom-24 z-10 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div
            id="more_options"
            role="tooltip"
            class="absolute z-10 invisible w-fit inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-600 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Options
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      )}
      <div
        onClick={handleShowMessage}
        data-tooltip-target="new_message"
        data-tooltip-placement="left"
        className="absolute hover:cursor-pointer w-14 h-14 rounded-full bg-white shadow-lg right-8 bottom-8 z-10 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        <div
          id="new_message"
          role="tooltip"
          class="absolute z-10 invisible w-24 inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-300 bg-gray-600 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          New Messages
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      {showMessage && (
        <NewMessage
          setShowMessage={setShowMessage}
          setShowOptions={setShowOptions}
        />
      )}
      {create && <Index />}
    </div>
  );
}

export default App;
