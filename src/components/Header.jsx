import {LOGO} from '../utils/img'

const Header = () => {

    return (
       <div className="flex justify-between bg-[#E5E4E2] pr-8 items-center shadow-sm"> 

        <div className="cursor-pointer">
          <img src={LOGO} alt="missing" className="w-32"  />
        </div>

        <ul className="flex justify-between space-x-10 pt-10 text-lg font-semibold pr-5">
            <li className="cursor-pointer hover:text-blue-800"> HOME </li>
            <li className="cursor-pointer hover:text-blue-800"> SERVICE </li>
            <li className="cursor-pointer hover:text-blue-800"> PORTFOLIO </li>
            <li className="cursor-pointer hover:text-blue-800"> ABOUT </li>
            <li className="cursor-pointer hover:text-blue-800"> CAREER </li>
            <li className="cursor-pointer hover:text-blue-800"> BLOG </li>
            <li className="cursor-pointer hover:text-blue-800"> CONTENT </li>
        </ul>

        <div className="pt-10">
        <button className="relative overflow-hidden text-lg font-semibold border border-solid px-3 py-2 rounded-md text-white bg-yellow-400 hover:text-white transition-colors duration-300 ease-in-out custom-button">
           GET FREE AUDIT
        </button>
        </div>
         
       </div>
    )
}

export default Header
