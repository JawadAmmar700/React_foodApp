import ImageSlider from './ImageSlider'
import Navbar from './Navbar'
import Category from './Category'
import Footer from './footer'
import Video from './video'

const home = () => {

    return (
        <div>
            <Navbar />
            <ImageSlider />
            <Video />
            <Category />
            <Footer />
        </div>
    )
}

export default home
