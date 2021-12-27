import React from 'react'

function Profile() {
    return (
        <div className="prof" >
            <div className='prof_header'>
                <img className='prof_header_image' src='https://images-ext-2.discordapp.net/external/uBTgW5IvHFskkuxkjChJAp3_5XYa8jhnlq_g4VvvZA4/https/i.postimg.cc/bJGynZpg/Pics-Art-10-17-10-24-02.png?width=120&height=70' ></img>

            </div>

            <header>

                <div class="container" style={{ marginTop: "50px" }}>

                    <div class="profile" style={{ marginLeft: "100px" }}>

                        <div class="profile-image" style={{ marginLeft: "450px" }}>

                            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""></img>

                        </div>

                        <div class="profile-user-settings">

                            <h1 class="profile-user-name" style={{ marginLeft: "450px" }}>janedoe_</h1>
                        </div>

                        <div style={{marginLeft: "300px", marginTop: "100px"}}>
                            <button class="btn profile-edit-btn" >Edit Profile</button>
                        </div>




                        <div class="profile-stats" style={{ marginLeft:"450px", marginBottom: "70px" }}>

                            <ul>
                                <li><span class="profile-stat-count">164</span> posts</li>
                                <li><span class="profile-stat-count">188</span> matches</li>

                            </ul>

                        </div>

                        <div class="profile-bio" style={{ marginLeft:"450px" }}>

                            <p><span class="profile-real-name">username</span> bio </p>

                        </div>

                    </div>


                </div>


            </header>
        </div>
    );



}
export default Profile