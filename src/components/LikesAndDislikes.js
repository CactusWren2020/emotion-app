import React from "react";

const LikesAndDislikes = ({ updateDate, updateLikeOrDislike, updateText, addLikeOrDislike }) => {
    return (
        <>
            <form className="card">
                <h2>Record Your Likes and Dislikes</h2>
                <p>
                    <input type="date" 
                        name="date"
                        onChange={(e) => updateDate(e.target.value)}
                    ></input>
                    <label htmlFor="date">Date</label>
                </p>
                <p>
                    <select name="likeOrDislike"
                            onChange={(e) => updateLikeOrDislike(e.target.selectedIndex)}>
                        <option disabled selected>Like or dislike</option>
                        <option value="like">Like</option>
                        <option value="dislike">Dislike</option>
                    </select>
                </p>
                <p>
                    <textarea name="text"
                            onChange={(e) => updateText(e.target.value)}></textarea>
                    <label htmlFor="text">Write Your Like or Dislike</label>
                </p>
                <button type="submit"
                        onClick={addLikeOrDislike}>Submit</button>
            </form>
        </>
    )
}

export default LikesAndDislikes;