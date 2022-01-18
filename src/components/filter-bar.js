import React, { useRef, useState } from 'react';
import '../css/filterbar.css';
import './display';
import Display from './display';







function Filterbar(){

    const [min,setMin] = useState(0);
    const [max,setMax] = useState(2000);
    const [category,setCategory] = useState("All");
    // const [size,setSize]= useState("34");

    const [size35,setSize35] = useState(false);
    const [size36,setSize36] = useState(false);
    const [size37,setSize37] = useState(false);
    const [size38,setSize38] = useState(false);
    const [size39,setSize39] = useState(false);
    const [size40,setSize40] = useState(false);
    const [size41,setSize41] = useState(false);
    const [size42,setSize42] = useState(false);
    

    
    
    const [size,setSize] = useState({
        size35: "false",
        size36: "false",
        size37: "false",
        size38: "false",
        size39: "false",
        size40: "false",
        size41: "false",
        size42: "false",
    });
    const check35 = useRef(null);
    const check36 = useRef(null);
    const check37 = useRef(null);
    const check38 = useRef(null);
    const check39 = useRef(null);
    const check40 = useRef(null);
    const check41 = useRef(null);
    const check42 = useRef(null);


    

    const handleCategory = (e) => {
        const rates = document.getElementsByName("category");

        rates.forEach((rate) => {
            if (rate.checked) {
                setCategory(rate.value);
            }
        });

        
        
    }

    const handleMinChange = (e) =>{

        setMin(e.target.value);
         
    }

    const handleMaxChange = (e) =>{
        // alert("working");
        setMax(e.target.value);
    }

    const handleSizeChange = (e) =>{


        if(check35.current.checked){
            setSize35(true);
        }
        else{
            setSize35(false);
        }

        if(check36.current.checked){
            setSize36(true);
        }
        else{
            setSize36(false);
        }

        if(check37.current.checked){
            setSize37(true);
        }
        else{
            setSize37(false);
        }

        if(check38.current.checked){
            setSize38(true);
        }
        else{
            setSize38(false);
        }

        if(check39.current.checked){
            setSize39(true);
        }
        else{
            setSize39(false);
        }

        if(check40.current.checked){
            setSize40(true);
        }
        else{
            setSize40(false);
        }

        if(check41.current.checked){
            setSize41(true);
        }
        else{
            setSize41(false);
        }
        
        if(check42.current.checked){
            setSize42(true);
        }
        else{
            setSize42(false);
        }
    }

    return (

    <div>
        <div className='filter-bar'>
        

            <div className='categories'>
                <label for="touch"><span>Catergories</span></label>               
                <input type="checkbox" id="touch" /> 
                <div class="slide">
                    
                    <div className='category-list'>
                    <input type='radio' name='category' className='input' value="All" onChange={handleCategory}/>
                    <label className='category-name'>All</label>
                    </div>

                    <div className='category-list'>
                    <input type='radio' name='category' className='input' value="Lace up" onChange={handleCategory}/>
                    <label className='category-name'>Lace up</label>
                    </div>

                    <div className='category-list'>
                    <input type='radio' name='category' className='input' value="Sneakers" onChange={handleCategory}/>
                    <label className='category-name'>Sneakers</label>
                    </div>

                    <div className='category-list'>
                    <input type='radio' name='category' className='input' value="Flip Flops" onChange={handleCategory}/>
                    <label className='category-name'>Flip Flops</label>
                    </div>

                    

                </div>

            </div>

            <div className='pricerange'>

                <p className='price-heading'>Price Range</p>
            
                <div className="range-slider">
                
                    <input  value={min} min="0" max="2000" type="range" onChange={handleMinChange}/>
                    <input  value={max} min="0" max="2000"  type="range" onChange={handleMaxChange}/>
                </div>

                <div className='price-display'>
                    <p className='price-min'>${min}</p>
                    <p className='price-max'>${max}</p>
                </div>
                
            </div>
            
            <div className='size-filter'>
                <p className='size-heading'>Size</p>

                <div className='size-available'>
                    

                <article>
                    <input type="checkbox" ref={check35} value='35' onChange={handleSizeChange}/>
                    <div>
                        <p className='size-text'>35</p>
                    </div>
                </article>

                <article>
                    <input type="checkbox" ref={check36} value='36' onChange={handleSizeChange}/>
                    <div>
                        <p className='size-text'>36</p>
                    </div>
                </article>

                <article>
                    <input type="checkbox" ref={check37} value='37' onChange={handleSizeChange}/>
                    <div>
                        <p className='size-text'>37</p>
                    </div>
                </article>

                <article>
                    <input type="checkbox" ref={check38} value='38' onChange={handleSizeChange}/>
                    <div>
                        <p className='size-text'>38</p>
                    </div>
                </article>

                <article>
                    <input type="checkbox" ref={check39} value='39' onChange={handleSizeChange}/>
                    <div>
                        <p className='size-text'>39</p>
                    </div>
                </article>

                <article>
                    <input type="checkbox" ref={check40} value='40' onChange={handleSizeChange}/>
                    <div>
                        <p className='size-text'>40</p>
                    </div>
                </article>

                <article>
                    <input type="checkbox" ref={check41} value='41' onChange={handleSizeChange}/>
                    <div>
                        <p className='size-text'>41</p>
                    </div>
                </article>

                <article>
                    <input type="checkbox" ref={check42} value='42' onChange={handleSizeChange}/>
                    <div>
                        <p className='size-text'>42</p>
                    </div>
                </article>
  
                
                    
                    
                    
                </div>

            </div>

        

        </div>

        <Display size35={size35} size36={size36} size37={size37} size38={size38} size39={size39} size40={size40}
        size41={size41} size42={size42} min={min} max={max} category={category}/>
    </div>

    );

}


export default Filterbar;