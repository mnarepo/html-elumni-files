// export default function TabButton(props) {
//   return (
//     <>
//       <li>
//         <button>
//             {/* {props.name} */}
//             {props.children}   {/* .childern is a reserved value */}
            
//         </button>
//       </li>
//     </>
//   );
// }

export default function TabButton ({ children, props, isSelected}) {
  
  
  
  return (

    <li>
    
      <button className={isSelected ? "active" : undefined} onClick={props}>{children}</button>
    
    </li>
    
  );

}