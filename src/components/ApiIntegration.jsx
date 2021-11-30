import React, {useState, useEffect} from 'react'

function ApiIntegration() {

  const [title, setTitle] = useState();
  const [pic, setPic] = useState();
  const [des, setDes] = useState();
  const [fav, setFav] = useState(false);
  const [com, setCom] = useState();

  console.log(com);
  return (
    <div>
     <form>
        <label for="title" >Title:</label>
        <input 
          type="text" 
          placeholder="Title" 
          id="title" 
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
          <br/>
        <label for="select" >Select Image</label>
        <input 
          type="file" 
          id="select" 
        />
        <br/>
        <textarea
          rows="10" 
          cols="20" 
          name="description" 
          value={des}
          onChange={(e)=> setDes(e.target.value)}
          placeholder="  Enter Your Description Here..."
        >
       
        </textarea>
        <input 
          type="radio"
          
        /><br/>
        <input 
          type="checkbox"
          value={fav}
          onClick={()=>setFav(!fav)}
        /><br/>
        <label for="comment" >Comment:</label>
        <input 
          type="text" 
          placeholder="comment" 
          id="comment"
          value={com}
          onChange={(e) => setCom(e.target.value)}
        />
        <br/>
        <input type="submit" />
     </form>
    </div>
  )
}

export default ApiIntegration
