/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import user3 from '../../../../assets/img/user-3.jpg'
import user4 from '../../../../assets/img/user-4.jpg'
import user5 from '../../../../assets/img/user-5.jpg'
import user6 from '../../../../assets/img/user-6.jpg'

const Recommend = () => {
    return (
        <div className="recommend">
            <p className="recommend__count">
                Lucy and 3 other friends recommend this hotel.
            </p>
            <div className="recommend__friends">
                <img src={user3} alt="Friend 1" className="recommend__photo" />
                <img src={user4} alt="Friend 2" className="recommend__photo" />
                <img src={user5} alt="Friend 3" className="recommend__photo" />
                <img src={user6} alt="Friend 4" className="recommend__photo" />
            </div>
        </div>
    )
}

export default Recommend