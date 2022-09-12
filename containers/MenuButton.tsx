import { useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeDrawer = (e: React.MouseEvent) => {
    if (!ref.current?.contains(e.target as Node)) {
      setMenuOpen(false);
    }
    e.stopPropagation();
  };

  return (
    <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
      <AiOutlineMenu />
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames="background"
        unmountOnExit
      >
        <div
          className={
            "fixed w-full min-h-full top-0 left-0 transition-all duration-500"
          }
          onClick={closeDrawer}
        ></div>
      </CSSTransition>
      <CSSTransition in={menuOpen} timeout={300} classNames="box" unmountOnExit>
        <div
          className={
            "fixed h-full w-64 top-0 bg-white border-l transition-all duration-500"
          }
          ref={ref}
        ></div>
      </CSSTransition>
    </button>
  );
};

export default MenuButton;
