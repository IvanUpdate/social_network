import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src = 'https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;