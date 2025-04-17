import toast from "react-hot-toast";

const getAllCartData = () =>{
    const all = localStorage.getItem('cart');

    // check in localStorage have any data or not
    if(all){
        const carts = JSON.parse(all);
        return carts;
    }else{
        return []
    }
}


// add data to local storage

const addCartData = product =>{
    const carts = getAllCartData();

    // check the data is already exist or not
    const isExist = carts.find(item => item.product_id == product.product_id);

    if(isExist) return toast.error('Item is Already Added in Cart!');
        
    carts.push(product);
    localStorage.setItem('cart', JSON.stringify(carts));
    toast.success('Successfully Item Added in Cart!');
}


// remove data from local storage 

const removeCarts = id =>{
    // get all previously saved data
    const carts = getAllCartData();

    const remaining = carts.filter(product => product.product_id != id);

    // Now set the new list of item to local storage.
    localStorage.setItem('cart', JSON.stringify(remaining));
    toast.error('Item Removed From Cart');
}

// Remove all item from local Storage
const removeAll = () =>{
    localStorage.clear();
}

export{addCartData, getAllCartData, removeCarts, removeAll}
