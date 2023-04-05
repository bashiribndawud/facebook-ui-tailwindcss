import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import NewMessage from './components/NewMessage';
import Index from './components/Create/Index';
import Sidebar from "./components/Sidebar"
import HeaderCard from './components/HeaderCard';
import Post from './components/Post';
import CreateRoom from './components/CreateRoom';
import CreatePost from "./components/CreatePost"
import Sponsored from './components/Sponsored';
import Contact from './components/Contact';
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
        {/* sidebar */}
        <div className="w-[22%] hidden xl:flex">
          <Sidebar />
        </div>
        {/* Main */}
        <div className="w-[55%] flex-1 flex flex-col pt-[31rem] sm:pt-[33rem] md:pt-[35rem]  justify-center items-center overflow-y-auto">
          <div className="flex flex-row gap-2 hover:bg-gray-100 hover:cursor-pointer">
            <div className="w-[7rem] h-[10rem] sm:w-[8rem] sm:h-[11rem] bg-white rounded-lg shadow-lg border flex flex-col">
              <div className="w-full h-[70%] bg-gradient-to-r from-sky-500 to-fuchsia-500 rounded-t-lg"></div>
              <div className="bg-white flex flex-col justify-center items-center">
                <div className="bg-blue-500 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center -mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-white "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold">Create story</span>
              </div>
            </div>
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
          </div>

          <CreatePost />
          <CreateRoom />
          <Post />
        </div>
        {/* Widgets */}
        <div className="w-[23%] hidden lg:flex pt-5 pl-3 flex flex-col overflow-y-auto">
          <h3 className="text-gray-500 font-semibold text-lg">Sponsored</h3>
          <Sponsored />
          <Sponsored />
          <hr className="border-t-2" />
          <div className='my-3'>
            <h4 className="font-bold text-gray-500">Birthdays</h4>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-orange-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              <p className='font-semibold'>
                Aminu Zaki's <span className='font-thin'>birthday is today</span>
              </p>
            </div>
          </div>
          <hr className="border-t-2" />

          <div className='flex items-center justify-between mt-2'>
              <h5 className='text-gray-500 font-semibold'>Contacts</h5>
              <div className='flex items-center gap-2'>
                  <div className='hover:bg-gray-300 p-2 rounded-full hover:cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-gray-500">
                        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                      </svg>
                  </div>
                  <div className='hover:bg-gray-300 p-2 rounded-full hover:cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-gray-500">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                      </svg>
                  </div>
                  <div className='hover:bg-gray-300 p-2 rounded-full hover:cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-gray-500">
                        <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                      </svg>
                  </div>
              </div>
          </div>

          <Contact name="Umar Muhammed" url="https://t4.ftcdn.net/jpg/00/67/20/79/240_F_67207980_5jNk6I3KFlJjOXY73c3FlfvssaxY5N51.jpg" />       
          <Contact name="Bashirah Dawud" url="https://t3.ftcdn.net/jpg/02/08/85/82/240_F_208858271_VIIx4aZdsxMyBBUVJ69xBO2DP0d7FHLb.jpg" />
          <Contact name="Ismail Idris" url="https://t4.ftcdn.net/jpg/02/44/00/23/240_F_244002364_LQELgqH8utkxb0NdpUrcxPjtJ7bNt6J4.jpg" />
          <Contact name="Umar Abdullahi" url="https://t4.ftcdn.net/jpg/00/67/20/79/240_F_67207980_5jNk6I3KFlJjOXY73c3FlfvssaxY5N51.jpg" />
          <Contact name="Isah Adamu" url="https://t3.ftcdn.net/jpg/01/35/58/88/240_F_135588893_1XydLiD2dGmy8o5RqPi7HnTl3SQmZrmQ.jpg" />
          <Contact name="Godwin Honourable" url="https://t3.ftcdn.net/jpg/03/28/26/86/240_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg" />
          <Contact name="Angela Raymond" url="https://t4.ftcdn.net/jpg/01/73/65/95/240_F_173659527_qBTHfG4HkO6nqXamFvcYK2dDiQyYTagA.jpg" />

          <hr className='border-t-2 ' />
        </div>
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
