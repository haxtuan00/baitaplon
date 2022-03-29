  let grid_row=document.getElementById('grid__row')
  let five=document.querySelectorAll('.panel-item')
  let nav_product_h2=document.querySelector('.nav__product h2')
  let select_arrange=document.getElementById('select__arrange')
  let options=document.querySelectorAll('option')
 
var product=[
    {   
        id:0,
        img:'https://b-f10-zpc.zdn.vn/3026811516964648862/42e0812b98af57f10ebe.jpg',
        name:'Bó 5 bông',
        price:'150,000đ'
    },
    {   
        id:0,
        img:'https://b-f11-zpc.zdn.vn/4120781172168678807/97a747525ed69188c8c7.jpg',
        name:'Bó 5 bông',
        price:'150,000đ'
    },
    {   
        id:0,
        img:'https://b.f6.photo.talk.zdn.vn/599348425292044631/98bffc48e5cc2a9273dd.jpg',
        name:'Bó 5 bông',
        price:'150,000đ'
    },
    {   
        id:0,
        img:'https://b.f1.photo.talk.zdn.vn/1796583762042893203/b6636f957611b94fe000.jpg',
        name:'Bó 5 bông',
        price:'150,000đ'
    },
    {   
        id:1, 
        img:'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/274180797_689070515462245_2352085593470515709_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=wDGDTrPcFv0AX-WRopK&_nc_oc=AQnK80QXalWL3OekAd9ka-iCwIfhq3EZSAofeq7Ze5q_-KjB4JStor_61YLGMwulGg67E_vlnGgAzb2CZycGZQf4&_nc_ht=scontent.fhan15-1.fna&oh=03_AVJjt5OR7AIf0wF-rk1Qu-3_NbG_KrnNFbsvUZV-9p7e6Q&oe=626388B4',
        name:'Bó 11 bông',
        price:'250,000đ'
    },
    {   
        id:1, 
        img:'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/274460462_720548095978185_8934147988938634021_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=vzs5FJqVw_UAX8n6u5f&_nc_oc=AQktZWZ_5A4woC7vfaEYxLE-DyPRx1J1KRaHa6ujEANmc_eX5hKJp0QD4QM7iJ5LAxuSqkZncTTM1oWAMo5vyNOL&_nc_ht=scontent.fhan15-1.fna&oh=03_AVIX0rIO2gBVMM2t2WB5F4tuhjtQE6ZkJPsKkDNySHRqSQ&oe=626074CB',
        name:'Bó 11 bông',
        price:'250,000đ'
    },
    {   
        id:1, 
        img:'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/275039007_370117051638440_6684600310960649980_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6v6dWz9Wk8EAX_y4PWn&_nc_ht=scontent.fhan15-2.fna&oh=03_AVJ-9a1WYV-1vjJPr7XJkbrv87xEyrUdHZRilM933EIodg&oe=62626747',
        name:'Bó 11 bông',
        price:'250,000đ'
    },
    {   
        id:1, 
        img:'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/274514422_3044410089157709_1817434038380259245_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=NOu3mq7x0zEAX8ptAp-&tn=JFs5w7wpG2J1sXpq&_nc_ht=scontent.fhan15-2.fna&oh=03_AVIV1N6nJ2uDXXbxe_ABxR_vxOQ_EGidc8Ntck7iAa7OMw&oe=6263F301',
        name:'Bó 11 bông',
        price:'250,000đ'
    },
    {   
        id:2, 
        img:'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/274822511_507074404360356_696534919049753316_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=E-ZDfLYS47sAX_O2ZuI&_nc_ht=scontent.fhan15-2.fna&oh=03_AVLYljfEH6Pu31QQbJQVmuADuFTsxbR0wY-4TNCduOrP3g&oe=6261FE4B',
        name:'Bó 19 bông',
        price:'330,000đ'
    },
    {   
        id:2, 
        img:'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/275489701_795991168026248_7010598102959507399_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=r1Ynbnfi92EAX9y4yRB&_nc_ht=scontent.fhan15-1.fna&oh=03_AVL9dS2tRhI3eMsyzpBSYNOEZ4Z1lz_uVrI0p_WnXCsXNA&oe=626247F8',
        name:'Bó 19 bông',
        price:'330,000đ'
    },
    {   
        id:2, 
        img:'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/276319044_717931355872344_1583923840650886467_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=yOwdnxXsvyoAX8VJP-k&tn=JFs5w7wpG2J1sXpq&_nc_ht=scontent.fhan15-2.fna&oh=03_AVLyRUEnNhfNExnZDqJbtGDSBOchBbxLdgDR1ad-vCIOpg&oe=62634948',
        name:'Bó 19 bông',
        price:'330,000đ'
    },
    {   
        id:2, 
        img:'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/272733367_503453957945563_8401128796119315698_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=-G2hk64Y4wMAX-LAFFJ&_nc_ht=scontent.fhan15-1.fna&oh=03_AVJ1GUOPbBSETck82RLhAaNeR-FlKub17bWGPkIikpzO4A&oe=62622190',
        name:'Bó 19 bông',
        price:'330,000đ'
    },
    {   
        id:2,
        img:'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/275862064_443174920916590_2233692784768690079_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ofZxFRIKH7gAX8IRbtK&_nc_ht=scontent.fhan15-2.fna&oh=03_AVLDS1pIdae4dIwfqFZSuDZDj5yKZOuT_3PDv5TJovEDmw&oe=62641C4D',
        name:'Bó 19 bông',
        price:'330,000đ'
    },
    {   
        id:2,
        img:'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/275045012_693012455451636_7504752844507452549_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=JBWb1k7LgK8AX-8xz07&tn=JFs5w7wpG2J1sXpq&_nc_ht=scontent.fhan15-1.fna&oh=03_AVIhxGdVTj1B713tEJpR88IQVg1U1JVwPHxgAOMK9zNrrg&oe=6261D03C',
        name:'Bó 19 bông',
        price:'330,000đ'
    },
    {   
        id:2,
        img:'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/275144043_311539214403128_3068398425099233232_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=WQk-uAcEqUYAX8Zge7s&_nc_ht=scontent.fhan15-1.fna&oh=03_AVIXGyKdXpBrVHgjNmK69FOELvNYp9E9BdZyUBpebTR1bw&oe=626171DC',
        name:'Bó 19 bông mix cẩm chướng',
        price:'340,000đ'
    },
    {   
        id:2,
        img:'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/273550423_664549131520997_8167616742389982700_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=suuH9zX1ZXcAX-5YOUM&_nc_ht=scontent.fhan15-2.fna&oh=03_AVLuqJPBOe6acp6fRBpDB1xBUnEbpMjMsQiF1ybk1X3JXg&oe=626424B0',
        name:'Bó 19 bông mix cẩm chướng',
        price:'340,000đ'
    },
    {   
        id:3,
        img:'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/273250123_389054916553943_4776737286737260144_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=CL_Gt6rj-QsAX_iG3sq&_nc_oc=AQl7W4LITGSloXTOWaa3ocySACGMJPuBELRJpgZ7k57EXELBPxcq8q7jfQJxgYmWOsspJCfsG1RZBuzkuwrplSVE&_nc_ht=scontent.fhan15-1.fna&oh=03_AVJ-HppLv4tBKdZiyfdbJAnRYHV56iHeKpTicv0sZkwRIA&oe=6263B1D2',
        name:'Bó 21 bông mix cẩm chướng',
        price:'350,000đ'
    },
    
]    
 function lowtohigh(objProduct){
   let htmls= objProduct.sort((a,b)=>(a.price>b.price)?1:-1)
   render(htmls)
}
 function hightolow(objProduct){
    let htmls= objProduct.sort((a,b)=>(a.price<b.price)?1:-1)
   render(htmls)
}
 function selects(obj_select){
    select_arrange.onchange=function(){
        let giaTri = select_arrange.options[select_arrange.selectedIndex].value;
        console.log(giaTri)
        if(giaTri==1) hightolow(obj_select)
        if(giaTri==2) lowtohigh(obj_select)
    }
}

 function render(productss){
    let html= productss.map(function(pr){
        return `<div class="item-product">
        <div class="detail__product">
            <div class="detail__img">
               <img src="${pr.img}" alt="" class="img-product">
            </div>
            <div class="Information">
                <div class="name">${pr.name}</div>
                <div class="price">${pr.price}</div>
            </div>
        </div>
        </div>`
    })
    grid_row.innerHTML=html.join('')
}
five.forEach(function(five_element,index){
    five_element.addEventListener('click',function(e){
        switch(index){
            case 0: nav_product_h2.innerText='Bó 5 bông'
            break;
            case 1: nav_product_h2.innerText='Bó 11 bông'
            break;
            case 2: nav_product_h2.innerText='Bó 19 bông'
            break;
            case 3: nav_product_h2.innerText='Bó 21 bông'
            break;
        }
         e.preventDefault()
         window.scrollTo(0,0);
        let products= product.filter(function(pr){
            return pr.id==index
        })
        render(products)
       selects(products)    
    })
})
render(product)
selects(product)


