
import {React , useState,useEffect } from "react";
import ContactBox from "../components/ContactBox";
import { AiFillHome , AiFillPlusCircle } from "react-icons/ai";
import {useNavigate} from 'react-router-dom';
import { BsFillFileTextFill } from "react-icons/bs";
import data from "./data"


function ContactPage() {
  const getPost=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  useEffect(()=>{
    getPost()
  },[])
  const navigate = useNavigate();

  const [contacts, SetContacts] = useState([]);
  let [userform, SetUserform] = useState("");
  let [phoneform, SetPhoneform] = useState("");
  let [emailform, SetEmailform] = useState("");
  //function handler

  function subm(e) {
    e.preventDefault();
    SetContacts([
      ...contacts,
      { username: userform, phone: phoneform, email: emailform },
    ]);
    console.log(contacts);
    SetUserform("");
    SetPhoneform("");
    SetEmailform("");
  }
  function userinput(e) {
    SetUserform(e.target.value);
  }
  function phoneinput(e) {
    SetPhoneform(e.target.value);
  }
  function emailinput(e) {
    SetEmailform(e.target.value);
  }

  return (
    <div className="Page">
     <center>
   
 
        <h2>CONTACT PAGE</h2>
    
            <h2> Contact list </h2>

            <table><tr>
            <td>Name</td>
            <td>E-mail</td>
            <td>Phone number</td>
            </tr></table>
            
            <ContactBox
               
               name={data.Name}
               email={data.mail}
               phone={data.Phone}
             />
               {contacts.map((contact) => (
            <div> 
              <ContactBox
               
                name={contact.username}
                email={contact.email}
                phone={contact.phone}
              />
            </div>
          ))}
          </center>
      <dir className="contacts-container">
        </dir>        <center>
       
        <h2> Create contact  </h2>
        <fieldset>
        <div className="form">
          <form onSubmit={subm}>
            <label htmlFor=""> Name <em>*</em> :</label>
            <input type="text" required value={userform} onChange={userinput} />
            <br />
            <br />
            <label htmlFor=""> Phone number  <em>*</em> :</label>
            <input
              type="number" required  value={phoneform}  onChange={phoneinput}
            />
            <br />
            <br />
            <label htmlFor=""> E-mail <em>*</em> :</label>
            <input
              type="email" requiredvalue={emailform} onChange={emailinput}
            />
            <br />
            <br />
            <button type="submit"  > <AiFillPlusCircle size={20} color="#9bbed6"/></button>
          {" "}
        < br />
       
          </form>
          </div>
        </fieldset>
        <div className="butt">
<button onClick={() => navigate("/")}><AiFillHome size={20} color="#9bbed6" /></button>&nbsp;&nbsp;&nbsp;
<button onClick={() => navigate("/blog")}><BsFillFileTextFill size={20} color="#9bbed6"/></button>
        </div>

    
      </center>
    </div>
  );
}
  
  export default ContactPage ;
