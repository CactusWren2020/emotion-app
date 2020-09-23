import React from "react";

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
            </div>
        </>
    )

}


export default LikesAndDislikes;