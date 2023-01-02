import React from "react";

function ContactBox({ name, email, phone }) {
  return (
    <div>
 <table>

      < tr > < td >{name}</td>
       <td> <h4>{email}</h4></td> 
     <td>  <h4>{phone}</h4> </td> </tr > 
     </table>
    </div>
  );
}
export default ContactBox;
