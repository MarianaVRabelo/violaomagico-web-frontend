import { useState } from "react";

function AuthorChange(){

    const [author, setAuthor] = useState(""); 

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
      };


    return(
        <div>
            <p>
                Autor: {author}
            </p>
            <input className="inputAuthor" type="text" value={author} onChange={handleAuthorChange} />
        </div>
    )
}

export default AuthorChange;