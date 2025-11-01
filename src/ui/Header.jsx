import useUser from "../features/authentication/useUser";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ onNavOpen }) {
  const { data } = useUser();
  console.log(data);
  return (
    <div className="flex font-bold items-center gap-x-4 px-3 py-5">
      <button
        onClick={onNavOpen}
        className="flex justify-center items-center rounded-md size-8 hover:bg-orange-500/10 p-2"
      >
        <GiHamburgerMenu />
      </button>
      <p className="text-xl font-bold radial-text">FreelanceHub</p>
    </div>
  );
}

export default Header;
