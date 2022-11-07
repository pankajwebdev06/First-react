import React from 'react'
import vg from "../assets/2.webp"
import{AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
    <>
    <div className = "home" id='home'>
        <main>
            <h1>Pankaj WebDev</h1>
            <p>Get All your Web development Solution ( MERN ) Here</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat dolore cum pariatur ipsum officiis quasi nesciunt, iste maxime esse quidem? Atque maiores perspiciatis, fugit id, assumenda, ipsa fugiat sapiente est cumque repudiandae voluptas.</p>
        </div>

    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who We are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur pariatur veritatis libero aut ratione laboriosam fugiat voluptates debitis illum earum, ut non dolores voluptatum alias hic beatae sint explicabo sequi cumque laudantium, minima autem culpa! Quis beatae rem molestiae, magnam recusandae fugit maxime! Quod aliquid ab voluptates hic perspiciatis qui, itaque dolorem quasi pariatur et.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay: "0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay: "0.1s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
    );
};

export default Home;