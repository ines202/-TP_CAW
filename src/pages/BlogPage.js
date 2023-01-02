import {React , useState,useEffect } from "react";
import BlogBox from "../components/BlogBox.js";
import { AiFillHome,AiFillPlusCircle ,AiFillLike} from "react-icons/ai";
import { RiContactsFill} from "react-icons/ri";
import {useNavigate} from 'react-router-dom';

 import post from "./post.json"


function BlogPage() 
{ 
  const getData=()=>{
    fetch('post.json'
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
    getData()
  },[])
   // State to store count value
   const [count, setCount] = useState(0);

   // Function to increment count by 1
   const incrementCount = () => {
     // Update state with incremented value
     setCount(count + 1);}
    
     
  const navigate = useNavigate();
  const [blogs, SetBlogs] = useState([]);

  let [subjectform, SetSubjectform] = useState("");

  let [descriptionform, SetDescriptionform] = useState("");

  let [dateform, SetDateform] = useState("");
  //function handler

  function subm(e) {
    e.preventDefault();
    SetBlogs([
      ...blogs,
      { subjectname: subjectform, description: descriptionform, date: dateform },
    ]);

    console.log(blogs);

    SetSubjectform("");

    SetDescriptionform("");

    SetDateform("");
  }

  function subjectinput(e) {
    SetSubjectform(e.target.value);
  }

  function descriptioninput(e) {
    SetDescriptionform(e.target.value);
  }
  
  function dateinput(e) {
    SetDateform(e.target.value);
  }
  

  return (
    <div className="Page">
      <center>
        <h2>BLOG PAGE </h2>

        <h2>blog list</h2>
        <table class="styled-table">
         <thead>
         <tr>

<th>Subject</th>

<th>Description</th>

<th>Date</th>
<th>Interaction</th>

</tr>
         </thead>
          </table>
            
            <BlogBox
               
               subject={post.Subject}
               description={post.Description}
               date={post.Date}
               interaction={ <button onClick={incrementCount}><AiFillLike /> {count}</button> }
             />

       
     
          {blogs.map((blog) =>  (
            
             <div>   
               <BlogBox  

                 subject={blog.subjectname} 
                  description={blog.description}
                 date={blog.date}
                 interaction={ <button onClick={incrementCount}><AiFillLike size={20} color="#256a98" /> {count}</button> }
                 
            />  
             </div>    
            
           
          ))}</center>
          <dir className="contacts-container"> 
        </dir>  
     <center>
      <h2> create blog  </h2>
      <fieldset>
        <div className="form">
          <form onSubmit={subm}>
            
            <label htmlFor=""> Subject <em>*</em> : </label>
            <input type="text" autofocus=""  placeholder="Subject" required value={subjectform} onChange={subjectinput} />
            <br />
            <br />
            <label htmlFor=""> Description <em>*</em> : </label>
            <input
              type="text"   placeholder="Description"
              required value={descriptionform} onChange={descriptioninput} />
            <br />
            <br />
            <label htmlFor=""> Date <em>*</em> : </label>
            <input
              type="date" required value={dateform} onChange={dateinput}    />
            <br />
            <br />
            <button type="submit"> <AiFillPlusCircle size={20}color="#256a98" /> </button>
          </form>
          </div>
          </fieldset>
        <div className="butt">
          <button onClick={() => navigate("/")}><AiFillHome size={20} color="#256a98" /></button>&nbsp;&nbsp;&nbsp;
          <button onClick={() => navigate("/contact")}><RiContactsFill size={20} color="#256a98" /></button>
         
          
        </div>          
       
        
        
      </center>
    </div>
  );
}
export default BlogPage;