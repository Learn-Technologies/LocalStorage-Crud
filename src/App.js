// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//       <p>This is a simple React app.</p>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Utils from "./utils/Utils";

// function App() {
//   const lsKey = "LsItem";
//   const [inpValue, setInpValue] = React.useState("");
//   const getLsItem = () => Utils.lsGet(lsKey);
//   const [editIndex, setEditIndex] = React.useState(-1);
//   async function handleAdd() {
//     if (editIndex >= 0) return await handleEdit();
//     await Utils.lsSet(lsKey, [...getLsItem(), inpValue]);
//     return setInpValue("");
//   }
//   async function handleEdit() {
//     const lst = getLsItem();
//     lst[editIndex] = inpValue;
//     await Utils.lsSet(lsKey, lst);
//     setEditIndex(-1);
//   }
//   async function handleDel(index) {
//     const filterLst = getLsItem().filter((item, i) => i !== index);
//     console.log(filterLst, "filterLst");
//     await Utils.lsSet(lsKey, filterLst);
//     setInpValue("");
//     await getLsItem();
//   }
//   console.log(getLsItem(), "getLsItem");
//   console.log(editIndex, "editIndex");
//   return (
//     <div>
//       <h1>Crud LocalStorage</h1>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div style={{ width: 200 }}>
//           <h5>Lists</h5>
//           {getLsItem() &&
//             getLsItem().map((item, index) => (
//               <React.Fragment key={index}>
//                 <div
//                   style={{ display: "flex", justifyContent: "space-between" }}
//                 >
//                   <p> {item}</p>
//                   <p
//                     onClick={() => {
//                       setEditIndex(index);
//                       setInpValue(item);
//                     }}
//                   >
//                     Edit
//                   </p>
//                   <p
//                     onClick={async () => {
//                       await handleDel(index);
//                     }}
//                   >
//                     Delete
//                   </p>
//                 </div>
//               </React.Fragment>
//             ))}
//         </div>
//         <div>
//           <input
//             type="text"
//             value={inpValue}
//             onChange={(e) => setInpValue(e.target.value)}
//           />
//           <button onClick={async () => await handleAdd()}>Add </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";

function App() {
  return <div>App</div>;
}

export default App;
