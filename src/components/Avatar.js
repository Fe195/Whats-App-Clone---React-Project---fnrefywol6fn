import React from 'react'
// import { Avatar } from '@material-ui/core'


 const Avatar=({ user, showName })=> {
    console.log(user,showName)

    return (
        <div className="avatar-component">
            <img className="avatar" src={"https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"} alt="" />
            {showName && <h3 className="avatar-title">{user.name}</h3>}
        </div>
    )
}
export default Avatar;
