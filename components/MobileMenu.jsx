import { useState, useEffect, useRef } from "react";

import Dropdown from "./Dropdown1";
import Link from "next/link";

const MobileMenu =({items,depthLevel}) => {
  
  
  const [dropdown, setDropdown] = useState(false);
  const [_document, setDoc] = useState(false);
  
  let ref = useRef();

  useEffect(() => {
    setDoc(document)
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    if (typeof window!=='undefined') {
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    }
    return () => {
      // Cleanup the event listener
    
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    
  }
  }, [dropdown]);
  
   const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
   };
  
 const onMouseLeave = () => {
   window.innerWidth > 960 && setDropdown(false);
   };
  return (

    

  <li
  style={{listStyle:'none',marginTop:'8px'}}
  className="menu-items"
   ref={ref}
  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
>
  {items.submenu ? (
    <>
    <Link href={`/${items.title.toLowerCase()}`} as={`/${items.title.toLowerCase()}`}>
      {items.title}
    </Link>
      {/* <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
      >
        {items.title}{" "}
        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
      </button>
      </Link>
      <Dropdown
        depthLevel={depthLevel}
        submenus={items.submenu}
        dropdown={dropdown}
      /> */}
    
    </>
  ) : (
      items.title=='Home'?
      <Link href='/' as={`/`}>{items.title}</Link>:
      <>
      {
           items.title=='Home'||items.title=='HOME'?
           <Link href='/'>{items.title.toLowerCase()}</Link>:
           <Link href={`/${items.title.toLowerCase()}`} as={`/${items.title.toLowerCase()}`}>{items.title}</Link>
      }
    
    </>
  )}
</li>
  );
};

export default MobileMenu;

 