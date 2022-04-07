const imagnF="Image/NotYet.gif";
const UrlA="http://";

function dcre(atr){ //**
    return document.createElement(atr)
}
/* remove code repeat */
function Imagen(atrNam,imgUrl){
    const imag=dcre("img");
    imag.setAttribute("class",atrNam);
    imag.setAttribute("src",imgUrl);
    return imag;
}
function ele(etiqueta,atrib,atrbVlue){
    var elem=dcre(etiqueta);
    elem.setAttribute(atrib,atrbVlue);
    return elem;
 }
 function aHref(url){//create etiqueta a
    const lnk=dcre("a");
    lnk.setAttribute("href",url);
    lnk.setAttribute("target","_blank");
    lnk.setAttribute("rel","noopener noreferrer");
    return lnk;
 }

function reu(imgVdeo,nm,dcrpt,LN0,LN1,LN01){//use this how plantilla
    var di=ele("div","class","Cont");/*here target */
    di.appendChild(Imagen("contImg",imgVdeo));/*image */
    var inf=ele("div","class","info"); /* here contenedor name  and description */
    /*inf childs h2 and h3 */
    var titulo=ele("h2","class","tituloo");
    var tituloT=document.createTextNode(nm);
    titulo.appendChild(tituloT);
    var des=ele("h3","class","descr");
    var desT=document.createTextNode(dcrpt);
    des.appendChild(desT);
    /* agregar a div  info*/
    inf.appendChild(titulo);
    inf.appendChild(des);
    /* links contenedor */
    var dvA=ele("div","class","LineA");
/* here add link other page ****************/
    var lnk0=aHref(LN0);
    var lnk00=aHref(LN1);
    var lnk001=aHref(LN01);
    /* here image ico href */
    lnk0.appendChild(Imagen("IconPng","Image/pinterest.png"));//LINK0
    lnk00.appendChild(Imagen("IconPng","Image/stechfab.png"));//LINK00
    lnk001.appendChild(Imagen("IconPng","Image/youtube.png"));//LINK001
    dvA.appendChild(lnk0);
    dvA.appendChild(lnk00);
    dvA.appendChild(lnk001);
    /* here href  end */
    di.appendChild(inf);
    di.appendChild(dvA);

    return di;
}

export function Item(){
    const secti=document.getElementById("sectt");
    /*here add information to  plantilla */
    const itm0=reu(imagnF,"name : character","description",UrlA,UrlA,UrlA);
    secti.appendChild(itm0);
    const itm01=reu(imagnF,"character","vertex,material",UrlA,UrlA,UrlA);
    secti.appendChild(itm01);
    const itm02=reu(imagnF," other character","vertex 1000,not material",UrlA,UrlA,UrlA);
    secti.appendChild(itm02);
}