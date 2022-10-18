
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'

import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import { Icon } from "@material-ui/core";
import ic from '../styles/pcategories.module.css'
import axios from 'axios';
import Image from "next/image";
import { Carousel } from "@trendyol-js/react-carousel";
//import ASlide from "./ASlide";
const Brands= () => {
  const [categories,setCategories]=useState([])
  useEffect(() => {

    
    
    // axios.get(`https://api.mazglobal.co.uk/maz-api/categories`)//api url
    // .then(resp =>{//calling url by method GET
         
            
    //          setCategories(resp.data.data)
    //      }).catch(err=>console.log(err))
    // alert('Finished loading');
  }, [categories]);
  const [box, setBox] = useState([
   {
    id:1,
    did:47,
    img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXjBhP////iAADhAADjABDjAAXjAAzyqarjAAnxoKLnS0/oWFv99fX1vr/30NHmOz/lMjfreHr75+f529zkKS/0urvtgoT98vLpYGP41tbztbbqZmn2xsf87e3xpKX++vrrcXPwmZvuiozvkZPmREjoUVXqbG/rdHfkHiXui43nTFDjFB352trlNTrkJSvyr7A82KDGAAATKklEQVR4nO1diZaquhLVCiBOqDiiOODc2sr//93LgFAJ0QMqtvct9lr3rKstITupVFWSSqVSKVGiRIkSJUqUKFGiRIkSJUqUKFHivw3DhgjG3d9Yt5/Y93/zjWDUCLG3s1EQ1sJgZRBT+zsg5wP9RS0Yzbb0AUb0wzV9Ahbj1uktfLeK4G1B81vY/eIfuf6i12E8rY/XOisYu8Fo2r9Vee757RvRWZoiHKK/+bWh4y6jD/2wd/xOliYVuVG7FXVHezO7EoZNVPElST0Bt5bY81/CbhR64otxu1ch3yWxlF5jEXWXs9kxUaP/zWpxd1arKYbWMfljP9yDeKgzao9FI9W3X0PSArINRef1gy1XGJRwHbFjFU73IRlLv+gvmvRRk0n6jyO6stYhXyCuVDiDuei8kU3ArNAq7ofLqoJuujvMrfqjantFG8igTUb2bdEwgUF0SupjMIDMRHt7I6B1Y+Ia1U3C0NDq0qPmp/6K9iQtmBbkiy8m5IFBLRZUd264pLXqR1YLync7TVV5HE7uyRrtrFkk31JP7jgn2mQ/fGzP13/D0QKrJrpvzxlQM79x1cqOFx3WJXfB+qqRJjkPgDkJtMlOoiPrjxyjYmCAHQoB7PKBAuQyTHXGdJdFHVLJbqaf9RtRuZUF/7z4MEcA0X+1CqdA6+ipVfQOD3tPKY6MftUC+nvOkYpysIz6sUBGSoUiQ14z+QCjSiElnrVrPh1IBbIbpoS1xwuhfwvYx+X6Q3rVIhOuX6ZCbjT85qNn7JgN5GeulDQWHOlL6rzgJvmAfYQztw/OgDB+Ftn1lVr9Pq3eaWft1dLmM2LzPwEfq75VdDfa5CdqTPHeq6PUyGm8JEqaEd3vRG3Z4exHxXYjXPlbgpvsLJTaeNs7U8EcryANtR+nQsfYpMdl5FxcNxpkxBv1COLTRDFk7u5lfgwmmagj+yA6DoCbxx4pyHAAcJFc396m+Fyt1dtUHZCe4tk6VtSqez4a39KS6ddu2Vvdq6BBmkod6m9V5TeDm2AvOk408/hSgKQKCa1xDUOHvVKB3+ubXQ4DuspwHIqOM4SuO6SnYy++kHCfeiLKhbMyUIpQcDZZyy+ZD0THwbbF2/qtTWoDc6rmx+gVO/nV/YK0G1yVhpxFDcxr47yzVeE85+NbuNFCXvEILMpC2epgCARFi0uUC2/TNzBYIrFQ39p894jAIDN1MEaVYIOxVXmT7ECHEfyJiBDZSMwLtL/85QPZ6Do3isxsLAdveTl0WMmR7jKI7Kb9kqLXwwD6yhsFRWiyT++gCANW0kSUpBL0i/IuECzlnf0bxRP7dH2ZonlEBCvE/zjBdLM60XjhFFuVF4XIAjYMDjeCU+2rioZB5AUA/0aRWa35a66GQZhFGt2UTCC9yP1ID4pqyFPjxY3inkvtK0VzqYzLkzX38oPr0fZZenUkVJYwGsMXKPJOo4ONz8/sgfwW7Y5ZURCaM8GFGntrAML0r5+uCS92TixwapCSlOCzq+1EXqca0xFC3DnYhNmSxpN1sQxW1tGk43wGqpbRbLUUCyJb/japwISqGRP4gHlOIxC2YrIHOhap8lLF5PTpDRNFCzADRhu9T3jF/KfaG9a8qdg6HhgGkSe8nzIUCIrJoP1mwJKqGe4n955ocL6D2QIqCuxxdcq9LWQZ4SFUKQoJtxY94ArCyq/YuYxOALjBUfWo9/kupDVSZotdm1fyDI2n5BRW/DFmEGl/KX7TU0LxMuAn1cz2hbnihC0WN/NWiauuMxveTM0ok/rq3+znVZRa7IDP5UZM0KhVy1casL2XOjCeTBiUjaHXHKWnoVhkVg2uLQCCKiOapyyDh4IA1PVdOPybvXXwlXo0RSfWgGl6TUDLo7LYVk8AFv23Y6dGYXXxRwzVPXRHjEQ6mpjI5XHehPUDCPlwthRFyhqtOBoPAKmt4oHF1emUEPqhlaMTubGv8QG8StvCP7H3DETdsmFNzZX+Gdge0SF7w3PLc+VPkZRHyPA3utRK1WPMqkflLQQ2vcquAE1mQj3e81Oo2OnInnjK+FGQdChL9WKL0QlcV2jikvTgz/T4wi/VVrBJFxwv3HwQZKWpB9Uu3Jtb873FzPpB6Bkm9UwDp8d3lTfAZz1TUHcxBEIQ1XW5xI0zihZvFId06b9tVoBqKwS8LXnfqvo/YEI6XECAjiJhJju8mttsYsp155rvYI9AtbO1Vax33KAhIhEBTNt6t+4xLNsUhRPSqMdO93wvTfZZHwIbTgvex/VsYso1aZe7SFc6JwFU5JC9MUBhk32/FoxWk+3lymoiAFqYKrS/Ikkh10tjthoFIQ6onm9YGBJqctYFNpO2OZe530xiyj22FmG+AneEzFNc3oTtMhlAGoGTiq9kGI9d1/Mc359Ow8Visdls1r3e6DBjaKjg3x5Gvd6a/o7+ejqd+r7jea47HusKXzpBh8exWGKrm4ObLTYEqZiyKmViyOa81BsNqrdpYLzQ3WdNy4qk44IcZ5upo0b4FAPXmW5mRyKC5FiwXzxTFLM4PjEI+EBsZFEN3FGv89+HUXhAHOLib3aAxJBJ06V5WNfDoe/13bG2Y59Aq+X2PX9YC9ar5gWI9EbYbWLVFy1Vc+vmccWRyTflMRYH3vM/t/2YNap7q++HwWi/uxhEi/P5ut1udxOGWe9w6MWYTW6Y9TDE9zv61PF81hdqdE+z0Sb0+8i/GkZb0qJPqtwihlkYcu+vw7fUVrffs9Bf3eBYzmljO357GIb1IPhZr0criiZDo3uh6HYviUqxEyDl0uU/vHRP7KkJffywXq+DIAjDabvtOH13rhGN/nSVHFkAHkl0YZ5YJo+ZR5iLnexd0iJUQKBJNdu07TuO1+/TF1M8LYd5QN9D3+c47TZrx3Vvf6rcFEJUN77Q2GMaMtMyLpdPEc/VkQyooWp0BfEPBx2Epg6zlcBE+X4rnumyUlLymhgexfZyP5paxGrGGZRwf/he9iDDEp0Rw+Jg/2Pr5TEnFPtpR6WnqyDs2TCruTBEZzsphqa+/+7a7Oy4PTq4oXNKWc/G6cL+YkUvACylgqEvhte/GfK1HVdMNhOGtNzTqD6lFrlPLXKrlZ4y6tGK4UoQ3z1pXVpzzw/QCQAhpV5WhhUhzpzCzX7aZKV3v/8UibVgPgqtM/s3s6YRc7FoFgiDVBz3dyBatohOwfFOyMxQQDhF3LP9TuxFJG8yR8+mSxMrJ3ZB1YXYb4IIpk9mP5mWahIvVKz8wl5X9JeAL3RDoiT8TH5psuDDW0S/ivElYIsQWMgyrdTgLR7GUN20+Cqw+Z0ByedMmxcm2qVgbpu6bfdVYJN6YSwELpkWapAyZdMtkjrSpMF47v56vj+c1hb1zWbUG9H5+67R2F4Hg+M9V4d/T39w3TYau9lsT5/abOqL2nTo+96vO8/iVbC5BKAzEdkW2xAltrOqxuRLLwhH+8YAFO8rcSxvvqR+mermzNrpRZuoRLt72q/DB03MVxOTZTgn20qUmFDGbaJdEeal8yPNYL59mQ21gWVyuk3NcjcHtdiGmXz8ycbQ7iSPUK8Gf0QIsh++ex2Upno8R6BiiW2kCMeM8QpI+/IlYc3svtX98OaMQTq6qT6RBlXmMCa+PxqBGJrdNdpYn9+3gNQ2JpdKfK5/k7VW+CFqYNI7pH8Ui5FWCFSQsPiqk//7QFsVLtHYi3xb5u+CQZRq8F0LFKyVI6YGx5DtIBWNlM37ez9Se0QDW2xaJFXNXlaia5hNVd2aL4lUYH2G1GCucEncMnSij/2iL2LIurCXfNRkiHkA1IlcI8ved/srpHQoxxjkjHjFk0I6kTZlq//x8FkBJWTCsiT3K29gG3L2WiziWBaQ818kVeHBQQmo8cORbrkjYHCv1Yg0B6vmMK3vhOy4cTOGxPaa+2QJDh3fghKEnDcQ8C2QhfRiimChCBn3tzEMVOCcyak0idr/gdfWwxUIZBl9qsmxnZ8SifGf6BppAsBWL3AQ2HOHP7CcsvA2SZ/mi+Z8AySvdGlaFZzu4AkZ5cCuTBeSBGscH549yQHCTDEge/Z0RK+N5hgtkFvtySMOT0Py/g+KRD0RqB8Be2vspJp0/PCjcirJaEAqdgXNh/N43CrweTxHnUd98GiXFIcdkooFSO281tTYRvhMoSL9tTx/Kq5Nmt5PGUGkIcIXhwt2G3xiGLgXxx9K+2cay/sEX9YHBnEViojy/CMUwUAiST1IGxP0Xj/IahGpPMvAgtsqPKkRyx2BXI0NqUAFEX7LSV2JogsgqZ9lEWlUJAAOwt6TKP/BOwkqFFvU9BO8ozgr1i4S5GYsOyCnkfDelZHDkowEpQRdtC1cXOIP9mbkOXoABkFLuXEGiTdAGnt0sFsm/sKzi5JUOCPjFLAT13gdI3zraXmp7fpn2pjYSd0XcjLfwu8YU/+CnPDC/ubNw0M+C9AjVIki0fUL2KUBC/mIUwKmnDvt/eMfOnh+6ABYBE9Je29OcmLiPD/zEzFIBy/ajt+Tt0WGPAiqI2IDDmL47b5RVC2yRXzYRp6c96egdGYGkbZG+hdiky1SBdN3pRg1wMDu8BlsMpPWaEaFZeSAixQ8NGX7syvkYdTfkQ7XkHZDf7fEJF1pa8gtQkJvMJUkUVx+RomGW25e5WgA3r10WQbsylB5Z7HOsDzgq8sfzjHpx2XwSsp4S+LXnzF+ckIMt1u4J2zKo5F3G5Ae4l2rPKkHgBwRHWdHgJyVxLSjwvNS8YpUlPiTRYXWpYmsV3ubX1gNIDtsALu0zK3youmngiOoLlciwfwTa+8F2gga5TvZRnXWOhED9wdoeQflJd7lY0mNdClGWaUImeFeaGTNJmzR7kPaZNigJQ1qSuiFu/uIgCbQJEj2Vywuap1o9nlw/DdJSm9QH6uFqKcN+5M/yK8PZJIKx2qzuyoqP8n3/c3xUWQR1VHXIGkpv8civdapYpnS+SAzVD/SSce8+aMz7YRRIq7u4l79qHqqxfSWQ9Y6nSB9VjRK+/43oK5pkI6RdkNW2dMiuY9Fuz8LiSvmBR2C7jjBZf389f06hqwlkppNe0eqeW4Ct0pTjHfLvAntu7WviS1bhk+YnQJAB9NMH6HpTW8GWxNjFMf/OL7+FPNw8rmz1P8EJTkJH4b0P7xnJo152Pxk7GMmMLW49u/F9f77npkE4zZVVt9GT4AduzoeQi8dJrkcaO6Z0cStLp3aofKd1z3F4IfLzpNN6CRmbh5oxxOdR8SCvXSd8GdS+e4ruxAsEakNg91stT/BPX1I9bB92q9mp2t0fPoL1GY+iCjth0GfhllwpHiJEiVKlChRokSJEiVKlChRokSJt8OwUFot2/4/WtsxohwLMOg0m/sDQ7O5vZyjNA5Prz5aOP1D6q84w4Nx53u8ao1L02wl4T8rNQYCs3rbczWn8Zfzvl/r5byXN3nntR5jsVMpwn4R/zVAy4Xwk3y/QKe/rG7y81H64nvrmLysLuVFMEjznzm43PVTsR9S3p1Ufl7p3HhyGNGU09MnTyn54ocXud2lA744uaOVSjSvxfiZox9SRhM1vxROtoHv1FFuSkk6F1KX6kr7wlJzIoYGZM2N8wRFOWeLwlDOsoAYyiml4D7DatVDF8/eY0geJI6R8cRdOg8ZmlIS8ywMdcLmbW8R4hLD5KD4nawqWuQ/nyczVFLoyEkWFv9meCdPkX+NLojVM4TUXeTVJUtVPB+ntynzXBsQ1UmSK+V0GEj3dNbuMUzGYTrnf4SQ2xSpOROGciqH/qFjoxRMg4kcPpAlT+cDhvOKlOFJThWDGEpHdauX+KV3GbLE4WBJf0YM8e8camOQJBkWyPeh5j6ZrGbZGDPx4BirMoIYynewdrMwrM57Z+mxmKElXSenCViR7qDKfYD+Tq55HV5kqCJmKFtXTZIDqdTct4p8AUPZumo0iaShc99983cM4+Q3cmk6hm3dY9/PME5wIestHcOp7rFvYOiAsbmfUO//gWHFpqo+uFdcIqX/ZPitUipi3MC+43QmmkY6aqVhKNUxd1agAhnOb9eHb7Uzh4ShlLtJc0uOlBw3U0b9Bww3p13nIvLfd3Y7+VhJXoZxjJupvTsmZig73j4BiG9CMViojnSUNf+9qEQ5xoXy/gPI157mZYiyWICRFpWYoZL1x+s1O+coKSaY3Z18HUv+vAMyw6vsUMi2+K7nDXrPG2s9K33HEfJLs+ZFZ0ittPwL8uxJmV/Kl+llmT3h9pK1nnp3OmaYJ0167inwwxmwPELyzoCVNKqW4g607wn9Q+S/Cu7xKoYU35t3FUPV65Y83vAqRvZM4p3c4e6PV6LsTAxtPcOUj4yzrkkM7WtWgk8k45QYpvJMSXPThGG21cSUbZbT2mPDJh1Xf4B8CQUFrG4tRpiafcIhjP+6QIs4EKCnULvaneT7WlqgYI3+LC1HWGT/z1TUbvBcULh1Z30+qlPOVX18VYlmxOCn0qv6zXV96v+6iu1ozftOu/azP37FkYyXYCT5r3n+b4pbOmxNi/zHkVxm89c1KVGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJT6P/wHKxil3GvCX+gAAAABJRU5ErkJggg=='
   },
   {
    id:2,
    did:48,
    img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAhFBMVEX////+AAD+XFz/oqL+V1f/s7P/3d3//Pz/1tb+l5f+YGD+TU3+e3v/7e3+Dg7+U1P/0ND/t7f/4uL+b2/+kpL/8vL+c3P/v7//xcX+nJz/6en/+Pj+goL+UVH+Z2f/rKz+i4v+Jyf+QED/rq7+eXn+MzP+HBz/pqb+R0f+JSX+ODj/yso/6itlAAAD6UlEQVR4nO3aaXuiMBSGYVGsG451qY5LXbrZDv///w3tVfRkw6BUM9c890chnPAikAC1GgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/1XBQz/Usi5dpYzWuFxjMxdqj3nFjd5atPR+LPcrfiwrU6931OJls7lvG5lZxvkq8slRrHXvz+LtUKC6N6MhYOOxFJ72I9e/E721LsY6j2Okqn+J7bXOD47K6pVpLtG2WDsamIKz0l88uJKLFuWF5FdJqZeLjkq6l2jXDmpTfgZ8OK9oqmwsnrL1n/68aVtSXzYIJ68G3+9cNqyObBROW3K+Awopls2DCegozrJ1sFkxY3t2fikY/O3T49CqbhRKWcsna+m7s3LAKrWVX1nJJKGH1ZQ9nvhurPqzWNlIoOx1KWOqZ0fWcLVQdVssY6ymLgwnrTevlyjbX01UbVsu8I6sTnmDC0v7+mdf98tTGKg1rbvQg0v7gwYSlXLRy9ROnY4VhNfTa2cW9r60TTFiu6U7h6VhZWJbiqwdjrXDCsh3bL7u92e1vFYW1MYsmtpoBhVVbjB1xRXXHYKKSsJ7Nei/2wxNSWFm55rsrL+vpWEFYTXPqM9WvVbmwwsr0O/ogIvfRMI73xWENzajGrqgCDCvTThxxRbF2Ol4Y1sw8LutFQd9DDCszq7vySuTpeFFYsw9j491RYd8DDatWW+5fHXGJFysXhDXbGRuOi6MKOKzMyBzVfzk+0To7rL55JOLT8ysR1s3f7lik1tHEYcYmw7IN9leOYuYz7J4ta50I68myWE5CbhFWxjKaGOTLZFhzS1v5+FX+rr+efPeJSgnL1vf09mFlR2yu37XyGbYM681sOIrsxdpnRaWGNTQXd0MIK9NWx0Pp989KGmO90XLnCEuendFOf+/sptyijbuBMl2zZHmG88JSDurxuKmPKj42YgeWbfVBnnzz8EcuePbvxFTZYpKKQfJiqF4tfvJbh1ZUymEH/ZvIe32JSsqF3Pt1neV/d7uwDgN551TSIK//JSopX/qkp9fPVZJVNWEd/v++7/zVQ12ikvpZlHezaa0SVYQ1KN9uIPvQPb1+Tg3L89uVKPJ5gXClsERXhp5NlEcJTf9S2gd3nq+ybZ+63SisidyeY0qk0YYH/rW0sKxvCgxxrSKXh6UdNo//1k6/N7VPt/mmf8q59Pg2cVKryqVh/TJHMHPzWYuyv5Zn0nc7z3LvRtP7dXGLrfvhYWn2D3DFt6tFph37cHsx6yRry5e041Ujdbx8bHemHgXjxNp2s51ayq2TybCa8RUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAf9lfwSEwl2+A4EYAAAAASUVORK5CYII='
   }
   
  ]);

 
  return (
    <div style={{padding:'20px'}} className={ic.Container}>
     
            <p  className={ic.h4} style={{marginTop:'30px',marginBottom:'20px',
            color:'rgba(67, 143, 173, 0.933);'}}>
            Explore the Ever-growing List of Brands</p>

          <div className={ic.largeView}>
    
              {box.map((it,key) => (
                <Link key={key} href="/supplier/[id]" as={`/supplier/${it.did}`}>
                  <div className={ic.catDiv}>
                  <Image src={box[key].img}  height="100" width="100"
                  style={{margin:'10px',
                  border:'0.095rem solid lightgrey',borderTopLeftRadius:'8px',borderTopRightRadius:'8px'}}/>
                
                  
                  </div>
              
              </Link>
            
              ))}
         
          </div>

          <div className={ic.mobileView}>
  

              {box.map((it,key) => (
                <Link key={key} href="/supplier/[id]" as={`/supplier/${it.did}`}>
                <div className={ic.catDiv}>
                 <Image src={box[key].img} height='90px' width='170px' 
                  style={{margin:'10px',
                  border:'0.095rem solid lightgrey',borderTopLeftRadius:'8px',borderTopRightRadius:'8px'}}/>
                  
                  
                  </div>
              
              </Link>
            
              ))}
        
          </div>
      

     
      </div>
  
  );
};
export default Brands;
