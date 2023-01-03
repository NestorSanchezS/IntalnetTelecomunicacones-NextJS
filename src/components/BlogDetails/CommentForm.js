import React from 'react';

const CommentForm = () => {

    return (
        <div className="comment-from">
            <h4 className="title">Comments Reply</h4>
            <form action="#">
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="col-md-6">
                        <input type="email" placeholder="Email"/>
                    </div>
                </div>
                <textarea placeholder="Comment...."></textarea>
                <p className="comment-form-cookies-consent form-check">
                    <input type="checkbox" className="form-check-input" id="wp-comment-cookies-consent"/>
                    <label htmlFor="wp-comment-cookies-consent" className="form-check-label">Save my info for the next comment</label>
                </p>
                <button type="submit" className="btn">Comment</button>
            </form>
        </div>
    );
    
}

export default CommentForm;