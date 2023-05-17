import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className = { s.headerPhoto }
                     src = 'https://www.happybrainscience.com/wp-content/uploads/2017/07/derwent-morning-Cropped.jpg' />
            </div>
            <div className={s.descriptionBlock}>
            ava + descr
            </div>
        </div>
    );

};
export default ProfileInfo;