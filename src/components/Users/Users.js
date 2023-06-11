import React from 'react';
import styles from './users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: 'https://asset.museum-digital.org/sachsen/images/202003/tafel-1653-bild-4-magdalena-seebe-als-evchen-16428-2.jpg',
                followed: true,
                fullName: 'Evchen',
                status: 'I am cool',
                location: { city: 'Cologne', country: "Germany" }
            },
                {
                    id: 2,
                    photoUrl: 'https://asset.museum-digital.org/sachsen/images/202003/tafel-1653-bild-4-magdalena-seebe-als-evchen-16428-2.jpg',
                    followed: true,
                    fullName: 'Ardo',
                    status: 'I am more cool',
                    location: { city: 'Paris', country: "France" }
                },
                {
                    id: 3,
                    photoUrl: 'https://asset.museum-digital.org/sachsen/images/202003/tafel-1653-bild-4-magdalena-seebe-als-evchen-16428-2.jpg',
                    followed: false,
                    fullName: 'Ilona',
                    status: 'I am even more  cool',
                    location: { city: 'Barcelona', country: "Spain" }
                },]
        );
    }


    return <div>
        {
            props.users.map(u => <div key = { u.id }>
               <span>
                   <div>
                       <img src = { u.photoUrl } alt = '' className = { styles.userPhoto } />
                   </div>
                   <div>
                       { u.followed
                           ? <button onClick = { () => {
                               props.unfollow(u.id);
                           } }>Unfollow</button>
                           : <button onClick = { () => {
                               props.follow(u.id);
                           } }>Follow</button> }
                    </div>
               </span>
                <span>
                   <span>
                       <div>{ u.fullName }</div>
                      <div>{ u.status }</div>
                   </span>
                   <span>
                       <div>{ u.location.country }</div>
                       <div>{ u.location.city }</div>
                   </span>
               </span>

            </div>)

        }

    </div>;

};

export default Users;
