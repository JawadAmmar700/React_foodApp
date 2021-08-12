import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useDispatch } from 'react-redux'
import { SaveCategory } from '../features/CategorySlice'
import { useHistory as History, Link } from 'react-router-dom';
import '../CSS folder/category.css'



const Category = () => {
    const dispatch = useDispatch();
    const [cat, setCat] = useState([]);
    const [scrollY, setScrollY] = useState(false)
    const history = History();


    useEffect(() => {

        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => {
                setCat(data?.categories)
                dispatch(SaveCategory(data?.categories))
            })

        window.addEventListener('scroll', () => {
            if (window.scrollY > 700 && window.scrollY < 1400) {
                setScrollY(true)
            }
            else {
                setScrollY(false)
            }
        })

    }, [])








    return (

        <div className="wrapper">

            <div className="h1">
                <motion.p
                    animate={{
                        opacity: scrollY ? '1' : '0',
                        transform: scrollY ? 'translateY(0px)' : 'translateY(50px)',
                    }}
                >Select Your Favorite Gatergory 👍😍 </motion.p>
                <motion.p
                    animate={{
                        opacity: scrollY ? '1' : '0',
                        transform: scrollY ? 'translateY(0px)' : 'translateY(50px)',
                        transition: '5s ease'
                    }}
                >Think less && </motion.p>
                <motion.p
                    animate={{
                        opacity: scrollY ? '1' : '0',
                        transform: scrollY ? 'translateY(0px)' : 'translateY(50px)',
                    }}
                >Eat more 👌</motion.p>
            </div>

            <div className="category">
                {
                    cat.map((item, id) => (
                        <div className="pick" key={id}>
                            <img className="pick_img" src={item.strCategoryThumb} />
                            <div id="Cat_desc">{item.strCategoryDescription.split('.')[0]}</div>
                            <Link to={`/CategoryPage/${id}`}>
                                <button id="Cat_btn">{<ArrowForwardIcon id="arrow" />}</button>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default Category
