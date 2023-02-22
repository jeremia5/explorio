import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({isAuth}) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createpost = async() => {
        await addDoc(postsCollectionRef, {title, postText, author: {name:auth.currentUser.displayName , id: auth.currentUser.uid}});
        navigate("/");
    };


    useEffect(() =>{
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return(
        <div className="createPostpage"> 
            <div className="cpContainer"> 
                <h1>Where did you go to?</h1>
                <div className="inputGp">
                    <label> Places:</label>
                    <input placeholder="Stockholm, Helsinki, Oslo ..." onChange={(event) => {setTitle(event.target.value);
                    }}/>
                </div>
                <div className="inputGp">
                    <label> Tell us something about the journey!</label>
                    <textarea placeholder="..." onChange={(event) => {setPostText(event.target.value);
                    }}
                    />
                </div>
                <button onClick = {createpost}> Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;