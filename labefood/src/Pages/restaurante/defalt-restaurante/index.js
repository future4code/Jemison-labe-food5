import { Typography } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom"
import { HeaderRestaurante } from "../../../Components/Header/header"
import { greyish } from "../../../Constants/colors";
import { BASE_URL } from "../../../Constants/constants";
import { Contexts } from "../../../Global/context";
import { useRequestData } from "../../../Hook/useRequestData";
import { CardProducts, ProductImage, ProductText } from "./style-restaurant";

export const DefaultRestauratePage = () => {

    const params = useParams();

    const {restaurantId, setRestaurantId} = useContext(Contexts)

    

    const [restaurantsDetails, getRestaurantsDetails] = useRequestData(
        [], `${BASE_URL}/restaurants/${params.id}`
    )

    const restaurantCart = restaurantsDetails.restaurant

    const categoryProduct =  restaurantCart && restaurantCart.products.map((product) => {
            <CardProducts key={product.id}>
                <ProductImage
                    component='img'
                    height='150'
                    image={product.photoUrl}
                />
                <ProductText>
                    <Typography variant="body" color={greyish}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color={greyish}>
                        {product.description}
                    </Typography>
                    <Typography variant="body">
                        R${product.price.toFixed(2)}
                    </Typography>
                </ProductText>
            </CardProducts>
        });
        console.log(restaurantsDetails)
    return (
     <div>
     <HeaderRestaurante/>
        {categoryProduct}
     </div>
    )
    }