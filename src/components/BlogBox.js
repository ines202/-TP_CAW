import React from "react";

function BlogBox({ subject, description, date ,interaction}) {
  return (
    <div>
    <table>
   
         < tr > < td >{subject}</td>
          <td> {description}</td> 
        <td>  {date}</td>
        <td>{interaction}</td> </tr > 
        
        </table>
       </div>
  );
}
export default BlogBox;
