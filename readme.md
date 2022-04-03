#diplomas{
    display: flex;
    flex-wrap:wrap;
}

body{
    line-height: 1.5;
    font-family: sans-serif;
}
*{
    margin:0;
    box-sizing: border-box;
}

.row{
    display: flex;
    flex-wrap: wrap;
}

#diplomas{
    display: flex;
    flex-wrap:wrap;
}
.resize {
    width: 1350px;
    height:250px;
}

img{
    max-width: 100%;
    vertical-align: middle;
}

.gallery{
   width: 100%;
   display: block;
   min-height: 100vh;
   background-color: #2a2932;
   padding: 100px 0;
}

.container{
    max-width: 1170px;
    margin:auto;
}
.gallery .gallery-filter{
   padding: 0 15px;
   width: 100%;
   text-align: center;
   margin-bottom: 40px;
}
.gallery .gallery-filter .filter-item{
   color: #ffffff;
   font-size: 17px;
   border: 2px solid white;
   text-transform: uppercase;
   display: inline-block;
   border-radius: 20px;
   margin-right: 8px;
   cursor: pointer;
   padding: 8px 20px 8px 20px;
   line-height: 1.2;
   transition: all 0.3s ease;
}

.gallery .gallery-filter .filter-item.active{
  color: white;
  border-color : #16b5ef;
  background: #16b5ef;
}

.gallery .gallery-item{
    width: calc(150% / 3);
    padding: 15px;

}
.gallery .gallery-item-inner img{
    width: 100%;
    border: 3px solid #d4dad9;
}

.gallery .gallery-item.show{
    animation: fadeIn 0.5s ease;
}
@keyframes fadeIn{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

.gallery .gallery-item.hide{
    display: none;
}

@media(max-width: 491px){
    .gallery .gallery-item{
        width: 50%;
    }
}
@media(max-width: 667px){
    .gallery .gallery-item{
        width: 100%;
    }
    .gallery .gallery-filter .filter-item{
        margin-bottom: 10px;
    }
}