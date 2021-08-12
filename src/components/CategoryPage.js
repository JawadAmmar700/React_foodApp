import React, { useState as State, useEffect } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShopIcon from '@material-ui/icons/Shop';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectCategory } from '../features/CategorySlice'
import { selectCart, Add_To_Basket } from '../features/CartSlice'
import { useParams } from 'react-router-dom'
import useFetchData from './useFetchData'
import ReactPlayer from 'react-player'


import '../CSS folder/category-page.css'


const CategoryPage = () => {
    const categories = useSelector(selectCategory)
    const Cart = useSelector(selectCart)
    const { id } = useParams();
    const one_category = useFetchData(categories[id]?.strCategory)
    const [detials, setDetials] = State([]);
    const [height, setHeight] = State(false)
    const [Id, setId] = State('0')
    const [videoOnOff, setVideoOmOff] = State(false)
    const dispatch = useDispatch();



    useEffect(() => {

        one_category.meals?.map(item => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`)
                .then(res => res.json())
                .then(data => {
                    setDetials(detials => [...detials, data.meals[0]])

                })
                .catch(err => console.log(err))
        })

    }, [one_category])


    const extend = (e, id) => {
        e.preventDefault();
        setHeight(false)
        setId(id)
        document.getElementById(id).style.height = '400px'
    }
    const shrink = (e, id) => {
        e.preventDefault();
        setHeight(true)
        setId(id)
        document.getElementById(id).style.height = 'auto'
    }

    const handleVideo = (e, id) => {
        e.preventDefault();
        setId(id)
        setVideoOmOff(!videoOnOff)
    }


    const addBasket = (e, id) => {
        e.preventDefault();
        dispatch(Add_To_Basket(detials[id]))

    }


    return (
        <>
            <div className='catergory_page'>
                {
                    detials?.map((item, id) => (
                        <div className="item" key={id} id={item.idMeal}>

                            {(Id === item.idMeal && videoOnOff) ? <ReactPlayer
                                url={item.strYoutube}
                                autoplay={true}
                                playing={true}
                                muted={false}
                                width='305px'
                                height='205px'
                            /> : <img src={item.strMealThumb} />}

                            <div className="item_icon1">
                                <PlayArrowIcon style={{ color: 'lightblue' }} onClick={e => handleVideo(e, item.idMeal)} />
                            </div>
                            <div className="item_name">{item.strMeal}</div>
                            <div className="item_icon2" >
                                <ShopIcon className="shop_icon" onClick={e => addBasket(e, id)} />

                                {(Id === item.idMeal && height) ? <KeyboardArrowUpIcon className="arrow" onClick={e => extend(e, item.idMeal)} />
                                    : <KeyboardArrowDownIcon className="arrow" onClick={e => shrink(e, item.idMeal)} />
                                }
                            </div>

                            { (Id === item.idMeal && height) && <div className="instructions">
                                <h3>instruction:</h3>
                                {

                                    item.strInstructions.split('.').slice(0, item.strInstructions.split('.').length - 1).map((inst, id) => (
                                        <p key={id}>{id + 1}-{inst}.</p>
                                    ))


                                }
                            </div>
                            }



                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default CategoryPage
