import toast from "react-hot-toast";

const getAllWishData = () =>{
    const all = localStorage.getItem('wish');

    // check in localStorage have any data or not
    if(all){
        const wishes = JSON.parse(all);
        return wishes;
    }else{
        return []
    }
}


// add data to local storage

const addWishData = product =>{
    const wishes = getAllWishData();

    // check the data is already exist or not
    const isExist = wishes.find(item => item.product_id == product.product_id);

    if(isExist) return toast.error('Item is already added in WishList!');
        
    wishes.push(product);
    localStorage.setItem('wish', JSON.stringify(wishes));
    toast.success('Successfully Added in WishList!');
}


// remove data from local storage 

const removeWish = id =>{
    // get all previously saved data
    const wishes = getAllWishData();

    const remaining = wishes.filter(product => product.product_id != id);

    // Now set the new list of item to local storage.
    localStorage.setItem('wish', JSON.stringify(remaining));
    toast.error('Item Removed from WishList');
}

export{addWishData, getAllWishData, removeWish}
