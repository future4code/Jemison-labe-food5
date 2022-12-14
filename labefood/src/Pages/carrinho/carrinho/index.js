import { HeaderCarrinho } from "../../../Components/Header/header"
import { Footer } from "../../../Components/Footer/footer"
import { AddressDiv, CardProductsDiv, MainDiv, ProductDescription, ProductImage } from "./styled"
import { Typography } from "@mui/material"
import { Contexts } from "../../../Global/context"
import { useRequestData } from "../../../Hook/useRequestData"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import useProtectPage from "../../../Hook/useProtectPage"

export const CarrinhoPage = () => {

     useProtectPage();

     const { states } = useContext(Contexts);

     const [productInfo, setProductInfo] = useState([])

     console.log(states.productsCart)

     useEffect(() => {
          states && states.productsCart && states.productsCart.map((product) => {
               productInfo.push({id: product.id, quantity: product.quantity})
          })
     }, [])

     const productRender = states && states.productsCart && states.productsCart.map((product) => {
          return(
             <CardProductsDiv>
               <ProductImage
                    image={product.photoUrl}
                    alt='Foto do produto'
               />
               <ProductDescription>
                    <Typography>
                         {product.name}
                    </Typography>
                    <Typography>
                         {product.description}
                    </Typography>
                    <Typography>
                         {product.price}
                    </Typography>
               </ProductDescription>
             </CardProductsDiv>  
          )
     })
     console.log(productRender)
     return (

          <MainDiv>
               <HeaderCarrinho />
               <AddressDiv>
                    <Typography>
                         Endereço de entrega
                    </Typography>
                    <Typography>
                         Endereço de entrega
                    </Typography>
               </AddressDiv>
               {productRender}
          </MainDiv>

     )
}