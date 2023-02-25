import { Link } from "react-router-dom";

const ShopCards = (props) => {

    const {arr} = props;
//<NavLink style={({ isActive }) =>({color: isActive ? '#9f0013' : 'black' })} to="/">Characters</NavLink>

    let cards = arr.map((item, index) => {
        const nameCoffee = `${item.kind} ${item.weight} kg`;
        const img = `./img/${item.urlimg}`;
            return (
                    <Link className="shop_card_link" to={`/details/${index}`} key={index}>
                        <div className="shop_card">
                            <img src={img} alt={item.kind} className="coffee_pic"/>
                            <div className="coffee_name">{nameCoffee}</div>
                            <div className="coffee_country">{item.country}</div>
                            <div className="coffee_price">{item.price}$</div>
                        </div>
                    </Link>
                )
    });

    return cards;
                                 
}

export default ShopCards;