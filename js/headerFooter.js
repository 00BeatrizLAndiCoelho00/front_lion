'use stric'

// alert("js works")

//Makes the button works

const pageBack =  () =>  {
  history.back()
}


//RIGTH SIDE 
const baseHeader = function(){

   //this part creates the base of the header
   let contentHeader = document.createElement("div");
   contentHeader.id = "heather_content"
   contentHeader.className = "heather_content"
   header.appendChild(contentHeader) 

}

 const divsHeader = function(){

  //this one is responsable for the contents and another divs inside it
  let contentHeaderrLeft = document.createElement("div");
  contentHeaderrLeft.id = "left_header"
  heather_content.appendChild(contentHeaderrLeft) 

 } 

 const logoHeader = function(){

    // image of header left
    var logoSite = document.createElement("img")
    logoSite.src = "img/logoLion.png" 
    logoSite.alt = "Logo lion school";
    logoSite.type = 'image/webp'
    document.getElementById("left_header").appendChild(logoSite)

    
    //text of header left
    var p = document.createElement("p");
    var output = document.getElementById('left_header');
    p.appendChild(document.createTextNode("Lion"));
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode("School"));
    output.appendChild(p);

 }
//Creater Header

//LEFT SIDE 

const sairHeader = function(){

    let leftHeader = document.createElement("div");
    leftHeader.id = "rigth_header"
    heather_content.appendChild(leftHeader)

}

const buttonHeader = function(){

   let buttonHeaderRIgth = document.createElement("button");
    buttonHeaderRIgth.setAttribute('aria-label', 'slide-dot')
    buttonHeaderRIgth.id = "button_exit"

}

 const createHeader = function(){

   baseHeader()
   divsHeader()
   logoHeader()
   sairHeader()
   buttonHeader()

}

//_______________________________________________________________________________________________________//

/*                            FOOTER                                                                     */

const baseFooter = function(){

    let contentFooter = document.createElement("div");
    contentFooter.id = "footer_content"
    contentFooter.className = "footer_content"
    footer.appendChild(contentFooter) 

}

const leftFooter = function(){

  //the left
    let contentFooterLeft = document.createElement("div");
    contentFooterLeft.className = "footer_content_left"
    contentFooterLeft.id = "footer_content_left"
    footer_content.appendChild(contentFooterLeft) 

}

const contactPhone = function(){

  let contentFooterLeftPhone = document.createElement("div");
  let contentFooterImagePhone = document.createElement("img")
  contentFooterImagePhone.src = "img/phone-icon.png"
  contentFooterImagePhone.alt = "Icon phone";
  contentFooterImagePhone.className = "imageIcon"
  let contentFooterTextPhone = document.createElement("p")
  contentFooterTextPhone.textContent = "(11) 4774-4700"
  contentFooterLeftPhone.appendChild(contentFooterImagePhone)
  contentFooterLeftPhone.appendChild(contentFooterTextPhone)
  contentFooterLeftPhone.className = "footer_content_left_content"
  footer_content_left.appendChild(contentFooterLeftPhone) 

}

const contactEmail = function(){

    let contentFooterLeftEmail = document.createElement("div");
    let contentFooterImageEmail = document.createElement("img")
    contentFooterImageEmail.src = "img/email_icon.png"
    contentFooterImageEmail.alt = "Icon email";
    contentFooterImageEmail.className = "imageIcon"
    let contentFooterTextEmail = document.createElement("p")
    contentFooterTextEmail.textContent = "lionschool@gmail.com"
    contentFooterLeftEmail.appendChild(contentFooterImageEmail)
    contentFooterLeftEmail.appendChild(contentFooterTextEmail)
    contentFooterLeftEmail.className = "footer_content_left_content"
    footer_content_left.appendChild(contentFooterLeftEmail)

}

const contactAdress = function(){

    let contentFooterLeftAdress = document.createElement("div");
    let contentFooterImageAdress = document.createElement("img")
    contentFooterImageAdress.src = "img/location.png"
    contentFooterImageAdress.alt = "Icon location";
    contentFooterImageAdress.className = "imageIcon"
    let contentFooterTextAdress = document.createElement("p")
    contentFooterTextAdress.textContent = "Rua tcc, 211,  Centro, Jandira"
    contentFooterLeftAdress.appendChild(contentFooterImageAdress)
    contentFooterLeftAdress.appendChild(contentFooterTextAdress)
    contentFooterLeftAdress.className = "footer_content_left_content"
    footer_content_left.appendChild(contentFooterLeftAdress) 

}

const cophyRIgth = function(){

    //the center
    let contentFooterCenter = document.createElement("div");
    contentFooterCenter.textContent = "Copyright © 2022 | Layla Giovanna | A. Beatriz Landi"
    contentFooterCenter.className = "footer_content_center"
    footer_content.appendChild(contentFooterCenter) 
}

const boxIcons = function(){

    let contentFooterRight = document.createElement("div");
    contentFooterRight.className = "footer_content_rigth"
    contentFooterRight.id = "footer_content_rigth"
    footer_content.appendChild(contentFooterRight) 
}

const icons = function(){

    //link youtube
    var link=document.createElement("a");
    var image = document.createElement("img")
    image.src = "img/youtube_icon.png"
    image.alt = "Icon youtube";
    link.appendChild(image)
    link.href = 'https://www.youtube.com/channel/UCzqd0VpWU_w4BKwmSvFdieQ';
    link.target = "_blank"
    link.onclick = 'loadScript()';
    footer_content_rigth.appendChild(link);

     //link twitter
     var link=document.createElement("a");
     var image = document.createElement("img")
     image.src = "img/twitter_logo.png"
     image.alt = "Icon twitter"
     link.appendChild(image)
     link.href = 'https://twitter.com/SENAInacional?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';
     link.target = "_blank"
     link.onclick = 'loadScript()';
     footer_content_rigth.appendChild(link);

     //instagram
     var link=document.createElement("a");
     var image = document.createElement("img")
     image.src = "img/instagram_icon.png"
     image.alt = "Icon instagram"
     link.appendChild(image)
     link.href = 'https://www.instagram.com/senai.sp/';
     link.target = "_blank"
     link.onclick = 'loadScript()';
     footer_content_rigth.appendChild(link);
 
    //link facebook 
    var link=document.createElement("a");
    var image = document.createElement("img")
    image.src = "img/fb_icon.png"
    image.alt = "Icon facebook"
    link.appendChild(image)
    link.href = 'https://www.facebook.com/senainacional/?locale=pt_BR';
    link.target = "_blank"
    link.onclick = 'loadScript()';
    footer_content_rigth.appendChild(link);

}
//creates the footer
const createFooter = function(){

    baseFooter()
    leftFooter()
    contactPhone()
    contactEmail()
    contactAdress()
    cophyRIgth()
    boxIcons()
    icons()

}

export{createHeader, createFooter}