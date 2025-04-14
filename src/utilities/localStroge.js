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

    if(isExist) return alert('This is already added!');
        
    carts.push(product);
    localStorage.setItem('cart', JSON.stringify(carts));
    alert('Successfully Added!');
}


// remove data from local storage 

const removeCarts = id =>{
    // get all previously saved data
    const carts = getAllCartData();

    const remaining = carts.filter(product => product.product_id != id);

    // Now set the new list of item to local storage.
    localStorage.setItem('cart', JSON.stringify(remaining));
    alert('Successfully Removed');
}

export{addCartData, getAllCartData, removeCarts}
