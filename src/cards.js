import React from "react";
//   const names=["bob","charlie","jdkh"]
//   const uppercase=names.map((item)=>{
//     return item[0].toUpperCase()+item.slice(1);
//   })
//   console.log(uppercase);

  function Cards({img,star,title,person}) {
    return(
        <main>
               <div className="cards">
                <div className="div">
                    <img  className="div-photo" src={img} alt="cover" />
                    <div  className="div-info">
                    <p><i class="fa-regular fa-star"></i>{star} </p>
                    <p>{title}</p>
                    <p>{person}</p>

                    </div>
                </div>
                
                </div>
            
        </main>
    )
    
  }
  export default Cards