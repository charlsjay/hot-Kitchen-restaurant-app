import { api } from "../config";

function MenuItem({item ,onClick}) {
    return (
          <div className="menu_item_container" onClick={onClick}>
                <img src={`${api}${item.image}`}  alt="" />

                <h3 className="menu_item_title">{item.name} </h3>

                <h5 className="menu_item_price"> {item.price} </h5>
          </div>
    );
}

export default MenuItem;