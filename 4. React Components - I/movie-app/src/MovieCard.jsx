import { Component } from "react";

class MovieCard extends Component {

    render() {
        return (<div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src="https://i.ebayimg.com/images/g/dW4AAOSwZ9VfbDEs/s-l1600.jpg" alt="poster" />
                </div>
                <div className="right">
                    <div className="title">
                        The Avengers
                    </div>
                    <div className="plot">
                        Super hero movie
                    </div>
                    <div className="price">
                        Rs. 199
                    </div>

                    <div className="footer">
                        <div className="rating">8.9</div>
                        <div className="star-dis">
                          
                          <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="decrease" />
                        <img className="stars"
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="increase" />
                        <span className="str-cnt">0</span>
                        </div>
                        <div className="favourite-btn"> Favorite</div>
                        <div className="cart-btn">Add to cart</div>
                    </div>

                </div>

            </div>

        </div>);
    }

}

export default MovieCard;