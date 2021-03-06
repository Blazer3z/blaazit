import { BiMoon } from "react-icons/bi"
import { AiOutlineFire, AiOutlineRise, AiOutlineSetting } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 fixed mr-auto ">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-64 h-screen sm:mt-0 ml-8">
          <div className="mt-32">
            <h1 className="text-gray-100 font-medium text-left">Filter by</h1>
          </div>

          <nav className="mt-10">
            <a
              className="flex items-center mt-5 py-2 px-8 mr-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100 transition ease-in-out duration-400 "
              href="#hot"
            >
              <AiOutlineFire size="23" />
              <span className="mx-4 font-medium">Hot</span>
            </a>

            <a
              className="flex items-center mt-5 py-2 px-8 mr-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100  transition ease-in-out duration-400"
              href="#new"
            >
              <BiMoon size="23" />
              <span className="mx-4 font-medium">New</span>
            </a>

            <a
              className="flex items-center mt-5 py-2 px-8 mr-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100 transition ease-in-out duration-400"
              href="#rising"
            >
              <AiOutlineRise size="23" />
              <span className="mx-4 font-medium">Rising</span>
            </a>

            <a
              className="flex items-center mt-5 py-2 px-8 mr-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100 transition ease-in-out duration-400"
              href="#setting"
            >
              <AiOutlineSetting size="23" />
              <span className="mx-4 font-medium">Settings</span>
            </a>
          </nav>
          <div className="mt-10">
            <h1 className="text-gray-100 font-medium text-left">Communities</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
