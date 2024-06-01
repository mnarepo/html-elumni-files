export default function TabButton(props) {
  return (
    <>
      <li>
        <button>
            {/* {props.name} */}
            {props.children}   {/* .childern is a reserved value */}
            
        </button>
      </li>
    </>
  );
}
