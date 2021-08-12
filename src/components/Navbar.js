import React, { useState as State, useEffect as Effect } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { useHistory as History } from 'react-router-dom';
import { useDispatch as Dispatch } from 'react-redux'
import { useSelector as Selector } from 'react-redux'
import { selectTrack } from '../features/TrackSlice'
import { selectCart, Delete_Item } from '../features/CartSlice'
import { TRACK } from '../features/TrackSlice'
import '../CSS folder/Navbar.css'
const array = [
    {
        id: 1,
        name: "Home"
    },
    {
        id: 2,
        name: "About"
    },
    {
        id: 3,
        name: "Service"
    },
    {
        id: 4,
        name: "Contact"
    },

]
const navbar = () => {
    const [clickmeOn, setClickmeOn] = State(false)
    const [openCart, setOpencart] = State(false)
    const history = History();
    const dispatch = Dispatch();
    const Track = Selector(selectTrack)
    const cart = Selector(selectCart)







    Effect(() => {
        if (Track == 1) {
            document.getElementById(1).classList = 'border';
            document.getElementById(2).classList = 'no';
            document.getElementById(3).classList = 'no';
            document.getElementById(4).classList = 'no';
        }
        else if (Track == 2) {
            document.getElementById(1).classList = 'no';
            document.getElementById(3).classList = 'no';
            document.getElementById(4).classList = 'no';
            document.getElementById(2).classList = 'border';

        } else if (Track == 3) {
            document.getElementById(1).classList = 'no';
            document.getElementById(2).classList = 'no';
            document.getElementById(4).classList = 'no';
            document.getElementById(3).classList = 'border';
        } else {
            document.getElementById(1).classList = 'no';
            document.getElementById(2).classList = 'no';
            document.getElementById(3).classList = 'no';
            document.getElementById(4).classList = 'border';
        }

    }, [Track])




    const link = (e, id) => {
        e.preventDefault()
        dispatch(TRACK(id))
        if (id == 1) history.push('/')
    }


    const deleteItem = (e, id) => {
        e.preventDefault()
        dispatch(Delete_Item(id))
    }

    return (


        <div className='nav'>
            <div className="links">
                {array.map(item => (
                    <h4 className='par' id={item.id} key={item.id} onClick={e => link(e, item.id)}>{item.name.toUpperCase()}</h4>
                ))}
            </div>
            <div className="logo">
                <RestaurantIcon id="nav-img" />
                {/* <p>Yumy</p> */}
            </div>
            <div className="user">
                <AddShoppingCartIcon id="shopping-cart" onClick={() => setOpencart(!openCart)} />
                <span>{cart.length}</span>
                <AccountCircleIcon onClick={() => setClickmeOn(!clickmeOn)} id="account" />
            </div>
            {
                clickmeOn &&
                <div className="profile">
                    <button id="SignIn"> Sign In</button>
                </div>
            }
            {
                openCart && <div className="cart_options">
                    {
                        cart?.map((item, id) => (
                            <div className="cart_item" id={id} key={id} style={{ border: id === cart.length && 'none' }}>
                                <img src={item.strMealThumb} alt="" />
                                <p>{item.strMeal}</p>
                                <DeleteIcon id="deleteButton" onClick={e => deleteItem(e, item.idMeal)} />
                            </div>
                        ))
                    }
                </div>
            }
        </div>



    )

}

export default navbar
