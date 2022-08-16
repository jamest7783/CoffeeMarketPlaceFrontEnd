import {Link} from 'react-router-dom'

const Member=({user})=>{

    console.log(user)

    return (
        <div className="profile-page">
            <div className='profile-links-container'>
                <Link className='profile-link' to='/shop'>browse</Link>
                <Link className='profile-link' to='/'>home</Link>
            </div>
            <div className='profile'>
                <div className='profile-info'>
                    <div className='info'>profile info</div>
                    <div className='orders'>orders</div>
                </div>
                <div className='profile-featured'>
                    <div className='featured-products'>featured products</div>
                </div>
            </div>
        </div>
    )
}

export default Member