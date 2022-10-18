
  
  

import { useState, useEffect, useRef } from "react";

import Dropdown from "./Dropdown1";
import Link from "next/link";

const DrpMenu=({items,depthLevel}) => {
  
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
      
    };
  
  }, [dropdown]);
  
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  return (

    

  <li
  className="menu-items"
   ref={ref}
  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
>
  {items.submenu ? (
    <>
    {/* <Link href={`/${items.title}`} as={`/ ${items.title}`}> */}
    <Link href='/category/[id]' as={`/category/${items.id}`}>
      <button
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
      />
    </>
  ) : (
  
      <>
      
      <Link href='/category/[id]' as={`/category/${items.id}`}>{items.title}</Link>
      
    
    </>
  )}
</li>
  );
};

export default DrpMenu;

//  import {NavDropdown} from 'react-bootstrap'
//  import { Person } from '@material-ui/icons';
//  import Link from 'next/link';
// const CNav=() => {

//   return 
//   (
//     <>
//     <div>Login</div>
//     <div>Register</div>
//   <NavDropdown
                
//   id="nav-dropdown-dark-example"
//   title={<Person/>}
//   menuVariant="dark"
//   >
    
//     <Link href="/account/login" >
//       <NavDropdown.Item href="#">
//         Login
//       </NavDropdown.Item>
//     </Link>
//     <Link href="/account/register" >
//       <NavDropdown.Item href="#">
//         Register
//       </NavDropdown.Item>
//     </Link>
  
//   <NavDropdown.Divider />
  
//   </NavDropdown>
//   </>
//   )
// }

// export default CNav;