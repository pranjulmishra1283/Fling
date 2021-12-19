import React from 'react'

function PostForm() {
    return (
        <div>
            <div class="form" style={{width: "400px"}}>
                <form action="#">
                <div class="row">
                            <div class="col-25">
                                <label for="profile">Upload Profile Image</label>
                            </div>
                            <div class="col-75">
                            <input  type="file" id="img" name="img" accept="image/*"></input>
                            
                            </div>
                        </div>
                    
                    
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Caption</label>
                        </div>
                        <div class="col-75">
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}, {width: "200px"}}></textarea>
                        </div>
                    </div>
                    <button  type="submit" className="signup">Post!</button>
                </form>
            </div>
        </div>
    )
}

export default PostForm
