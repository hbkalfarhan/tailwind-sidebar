import { BsArrowLeftShort, BsSearch  } from "react-icons/bs";
import { IoIosFootball } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";

import { useState } from "react";
const App = () => {

  const [open, setOpen] = useState(true);
  const Menus = [
    {
      name: "Dashboard",
      price: 12.99,
      description: "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper."
    },
    {
      name: "Pages",
      price: 16.50,
      description: "Fresh salmon fillet grilled to perfection, served with roasted vegetables."
    },
    {
      name: "Media",
      price: 8.99,
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing."
    },
    {
      name: "Projects",
      price: 10.99,
      description: "Traditional Italian pizza topped with tomatoes, mozzarella, and fresh basil."
    },
    {
      name: "Analytics",
      price: 9.99,
      description: "Juicy beef patty served on a toasted bun with lettuce, tomato, and onion."
    },
    {
      name: "inbox",
      price: 9.99,
      description: "Juicy beef patty served on a toasted bun with lettuce, tomato, and onion."
    },
    {
      name: "Profile",
      price: 9.99,
      description: "Juicy beef patty served on a toasted bun with lettuce, tomato, and onion."
    },
    {
      name: "Settinngs",
      price: 9.99,
      description: "Juicy beef patty served on a toasted bun with lettuce, tomato, and onion."
    },
    {
      name: "Log out",
      price: 9.99,
      description: "Juicy beef patty served on a toasted bun with lettuce, tomato, and onion."
    }
  ];

  return (
    <>
      <div className="flex">
        <div className={`bg-dark-purple p-4 h-screen ${open ? "w-72" : "w-20"} relative duration-300`}>
        <BsArrowLeftShort className={`text-2xl bg-white text-dark-purple rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-[180deg]"} `} onClick={() => setOpen(!open)} />

        <div className="inline-flex my-5">
          <IoIosFootball className={`text-4xl bg-red-500 text-dark-purple rounded cursor-pointer duration-500 ${open && "rotate-[360deg]"} `}/>
          <h1 className={`text-3xl font-semibold duration-500 mx-10 text-white ${!open && "scale-0"}`}>Logo</h1>
        </div>

        <div className="flex items-center rounded-md bg-light-white mt-6 px-3 py-3">
        <BsSearch className=" text-white text-lg block float-left cursor-pointer mr-2" />

        <input type={"search"} placeholder="Search" id=""  className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"} `}/>
        </div>

        <ul className="pt-2">

        </ul>
            {Menus.map((menu, index) => (
              <li key={index} className="text-gray-300 text-base my-3 flex items-center cursor-pointer hover:bg-light-white p-1 hover:text-dark-purple hover:rounded-md">
                <span className="float-left text-2xl block">
                <RiDashboardLine className={`duration-500 ${open && "rotate-[360deg]"}`} />
                </span>
                <span className={`mx-4 text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.name}</span>
              </li>
            ))}
        </div>

        <div className="p-10">
          <h1 className="font-semibold text-3xl">
            Home page
          </h1>
        </div>
      </div>
    </>
  )
}
export default App
