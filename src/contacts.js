import React from "react"

function Page ({img,name,phone,email}) { 
    return(
   <div className="contacts">
    <div className="contact-card">
        <img src={img} />
        <h3>{name}</h3>
        <div className="info-group">
            <i class="fa-solid fa-envelope"></i>
             <p>{email}</p>

            </div>
            <div className="info-group">
            <i class="fa-solid fa-phone"></i>
            <p>{phone}</p>
                  
            </div>        
        </div>
    </div>
   
 


    )}
export default Page;
      
   

