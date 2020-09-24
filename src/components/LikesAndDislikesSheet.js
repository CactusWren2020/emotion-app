import React from "react";
import { Link } from 'react-router-dom';

const LikesAndDislikes = ({ likesAndDislikes }) => {
    return (
        <>
            <div className="card">
                <h2>Your likes and dislikes</h2>
                    <ul>
                        {likesAndDislikes.map( item => {
                            return <li key={item.index}>{item.date}, {item.likeOrDislike}, {item.text}</li>
                        })}    
                    </ul>
            <Link to="/saying-no-sheet" className="card-link">Next</Link>
            </div>
        </>
    )

}


export default LikesAndDislikes;