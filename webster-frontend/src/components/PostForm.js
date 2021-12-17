import React from 'react'

function PostForm() {
    return (
        <div className='form'>
            <div className='content'>
                <div class="row">
                    <div class="col-25">
                        <label for="profile">Upload Profile Image</label>
                    </div>
                    <div class="col-75">
                        <input type="file" id="img" name="img" accept="image/*"></input>

                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label for="bio">Bio</label>
                    </div>
                    <div class="col-75">
                        <textarea id="bio" name="bio" placeholder="Tell us something about yourself..." style={{ height: "100px" }} ></textarea>
                    </div>
                </div>
            </div></div>
    )
}

export default PostForm
