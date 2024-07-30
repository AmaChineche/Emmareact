import React from 'react'

const List = (props) => {
    const category= props.category;
    const itemList = props.items;

    const listItems=itemList.map(item=> <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b></li>)
    // const fruits = [{ id : 1, name :"orange", calories : 95},
    //     {id : 2, name :"apple",calories : 65},
    //     {id : 3, name:"banana",calories : 955},
    //     {id : 4, name:"stawberry",calories : 105},
    //     {id : 5, name:"alnold",calories : 70},
    //     {id : 6, name:"pinchas",calories : 90}];

        // fruits.sort((a,b)=>a.name.localeCompare(b.name)) //Aphabetical
        // fruits.sort((a,b)=>b.name.localeCompare(a.name)) //reverse alphabetical
        // fruits.sort((a,b)=> a.calories - b.calories); //numeric
        // fruits.sort((a,b)=> b.calories-a.calories); //reverse numerical
        
        // **************high calories fruit code**************
        // const lowCalfruits= fruits.filter(fruit=>fruit.calories>95);


        // const lowCalfruits= fruits.filter(fruit=>fruit.calories<85);
// to check for low calfruits we use filter
//   const listItems=lowCalfruits.map(lowCalfruit=> <li key={lowCalfruit.id}>
//                                             {lowCalfruit.name}: &nbsp;
//                                             <b>{lowCalfruit.calories}</b></li>)
//   const listItems=fruits.map(fruit=> <li key={fruit.id}>
//                                             {fruit.name}: &nbsp;
//                                             <b>{fruit.calories}</b></li>)
    return ( 
    <>
    <h3 className='list-category'>{category}</h3>
    <ol className='list-items'>{listItems}</ol>
    </>);
}


export default List
