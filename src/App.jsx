// import Data from "./Data";
// import Object from "./Object";
// import Vari from "./Variable";

//====================================Array of=Object========================================================================
// const data={
//   name:"shivani",
//   number:1234567654,
//   email:'abcdgmail.com',
//   pass:12345
// }

//=====================================Variable Data===============================================================================
// const name="shivani";
// const city="bhopal";
// const institute="cybrom";

//const Work=()=>{
  // return(
    // <>
    // <h1>Welcome To React Classes!! This Is Our Work Time!!! </h1>
    // <Data nme="Shivani" city="Betul" sub="Mern" fee="57000"/>  
    // <Object nm={data.name} num={data.number} email={data.email} pass={data.pass}/>
    // <Vari naam={name} ct={city} ins={institute}/>
    // </>

   //)

//}
//export default Work;
//=================================================ARRAY.MAP=========================================================================

const array=()=>{
  const arr=["PHp", "oracle" ,"Java","React"]
  const ans2=arr.map((key)=>{
    return(
      <>
         {/* <h1>{key}</h1> */}
         {/* <option>{key}</option> */}
         <li>{key}</li>
      </>
    )
  })
  return(
    <>
    <h1 align="center">Welcome Array Topic!!!</h1>
    <hr />
    
    {/* {ans2} */}
    {/* <select>{ans2}</select> */}
    <ul>{ans2}</ul>
    </>

  )
}
export default array;
//=========================================array of object with map method==============================================================================


//  const table=()=>{

//      const Record=[
//       {
//          name:"shivani",
//          number:1234567654,
//          email:'abcdgmail.com',
//          pass:123456
//       },
//       {
//         name:"prinshu",
//         number:1234567654,
//         email:'bcdgmail.com',
//         pass:123457
//      },
  //    {
  //     name:"ruchi",
  //     number:1234567654,
  //     email:'dabcdgmail.com',
  //     pass:123458
  //  },
  //  {
  //   name:"rani",
  //   number:1234567654,
  //   email:'gabcdgmail.com',
  //   pass:123459
  // }
  
  // ]
    
//     const ans=Record.map((key)=>{
//       return(
//         <>
//         <tr>
//           <td>{key.name}</td>
//           <td>{key.number}</td>
//           <td>{key.email}</td>
//           <td>{key.pass}</td>
//         </tr>
//         </>
//       )
//     })
//     return(
//       <> 
//            <h1>Welcome To react classes!! this our work time!!!</h1>
//             <hr />
//           <table border="1" width="400">
//             <tr>
//                 <th>Name</th>
//                 <th>Number</th>
//                 <th>Email</th>
//                  <th>Password</th>
//             </tr>
//                {ans}
//           </table>
  
//       </>
//     )
// }
// export default table;
//========================================array of object with map &component file==========================================================================================
// import Data from "./EmpData"
// import Design from "./EmpDesign"

//   const table2=()=>{
//   const info=Data.map((key)=> <Design 
//   nm={key.name} 
//   no={key.empno}
//    ps={key.post}  
//    sal={key.sal}/>)

//   return(
//     <>
//     <h1 align="center">Employ Records!!!</h1>
//     <hr />
//     <table border="1" width="600">
//       <tr>
//         <th>Name</th>
//         <th>Empno</th>
//         <th>Post</th>
//         <th>Salary</th>
//       </tr>
//       {info}
//     </table>
//     </>
//   )
// }
// export default table2;
