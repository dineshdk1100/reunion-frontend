import react, { useEffect, useState } from "react";
import '../css/display.css';
import Card from "./card";



function Display({size35, size36,size37,size38,size39,size40,size41,size42, min, max,category}){


    const [data,setData] = useState([1,2,3]);
    

    const dataset = 

    [
      {
        name:"Black Sneakers",
        brandname:"Adidas",
        price: 800,
        category : "Sneakers",
        image1 :"https://staticm2.paragonfootwear.com/media/catalog/product/cache/3a88550bbe8642ae5e71ba6d62fc1851/k/1/k1004g-blue_2.jpg",
        image2 : "image12.png",
        sizes : [35,36]
    },
    {
        name:"Gray Sneakers",
        brandname:"Puma",
        price: 250,
        category : "Sneakers",
        image1 : "https://i.pinimg.com/originals/1e/55/bd/1e55bdc1278d253fd677a8e2b5aa169c.jpg",
        image2 : "image12.png",
        sizes : [38,40,42]
    },
    {
        name:"Brown Flip Flops",
        brandname:"Campus",
        price: 150,
        category : "Flip Flops",
        image1 : "https://assets.ajio.com/medias/sys_master/root/20210404/V9Ad/606b1e99f997dd7b648fa028/-473Wx593H-461631533-copper-MODEL.jpg",
        image2 : "image12.png",
        sizes : [35,36,37,38,39]
    },
    {
        name:"Black Lace up",
        brandname:"Nike",
        price: 400,
        category : "Lace up",
        image1 : "https://previews.123rf.com/images/aperturesound/aperturesound1405/aperturesound140500004/27959148-black-high-top-sneakers-on-a-white-background.jpg",
        image2 : "image12.png",
        sizes : [36,39,40,41]
    },
    {
        name:"Blue Sneakers",
        brandname:"Adidas",
        price: 1200,
        category : "Sneakers",
        image1 : "https://assets.ajio.com/medias/sys_master/root/20210526/Ekrq/60ad9d95f997ddb312aa1e18/-473Wx593H-462446138-blue-MODEL.jpg",
        image2 : "image12.png",
        sizes : [35,36]
    },
    {
        name:"White Lace Up",
        brandname:"adidas",
        price: 1800,
        category : "Lace up",
        image1 : "https://assets.ajio.com/medias/sys_master/root/20210729/TBOj/6101f9f7aeb269a9e358afb8/-473Wx593H-462701031-white-MODEL.jpg",
        image2 : "image12.png",
        sizes : [35,36]
    },
      
    ]

    
    

    const fetchData = async () => {
        
        
        
        // alert("working");
        // setData(response);

        const resultfilter1 = dataset.filter(each => each.category==category || category=='All');
        // alert(result[0].name);

        const resultfilter2 = resultfilter1.filter(each => each.price >= min && each.price <=max)

        if(!size35 && !size36 && !size37 && !size38 && !size39 && !size40 && !size41 && !size42 ){
            
            
            setData(resultfilter2);
        }

        else{
            const resultfilter3 = resultfilter2.filter(each => (
                (size35 && each.sizes.includes(35)) || (size36 && each.sizes.includes(36)) ||
                (size37 && each.sizes.includes(37)) || (size38 && each.sizes.includes(38)) ||
                (size39 && each.sizes.includes(39)) || (size42 && each.sizes.includes(42)) ||
                (size40 && each.sizes.includes(40)) || (size41 && each.sizes.includes(41)) 
                ));

            setData(resultfilter3);
            
        }
        
        
    };


    useEffect(() => {

        fetchData();
    },[size35,size36,size37,size38,size39,size40,size41,size42,min,max,category]);


    return (
        <div className="display-div">
            <p className="check">{size40 ? "kfn":"jnfjk"} {size36} {min} {max} {category}</p>

            <div className="display-header">
                <p className="display-type">New Arrivals</p>
                <p className="display-sort">Sort by</p>
            </div>


            <div className="cards">
            {data.map(each => {
                return (<Card details={each} />);
            })}

            
            </div>
            

        </div>
    );
}

export default Display;