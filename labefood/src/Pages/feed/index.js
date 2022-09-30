import { CardContent, CardMedia, Typography, MenuItem, FormControl, InputLabel, Card } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { HeaderFeed } from "../../Components/Header/header";
import { Contexts } from "../../Global/context";
import { goToDefaultRestaurantePage } from "../../Routes/coordinator";
import { BodyStyle, CardStyled, MainCard, SelectCat } from "./styled-feed";
import { midGreen, greyish } from "../../Constants/colors";
import { margin } from "@mui/system";

    
export const FeedPage = () => {
  const navigate = useNavigate();


  const {restaurants, getRestaurants, loadingRestaurants, errorRestaurants} = useContext(Contexts);
  

  console.log(restaurants)

  const [category, setCategory] = useState('')

  const catFilter = (event) => {
    setCategory(event.target.value);
  };

  const renderRestaurants = restaurants.restaurants && restaurants.restaurants
    .filter((restaurant) => {
      return restaurant.category
        .toLowerCase()
        .includes(category.toLowerCase());
    })
    .map((restaurant) => {
        
    return(
      
      
        
       
          <Card sx={{minWidth: 330}}   key={restaurant.id} onClick={() => {goToDefaultRestaurantePage(navigate, restaurant.id)}}>
            <CardMedia
              component = 'img'
              height= '140'
              image={restaurant.logoUrl}
              alt= 'Logo do restaurante'
            />
            <CardContent >
              <Typography color={midGreen}>
                {restaurant.name}
              </Typography>
              <MainCard>
                <Typography color={greyish}>
                  {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min
                </Typography>
                <Typography color={greyish}>
                  Frete: R${restaurant.shipping},00
                </Typography>
              </MainCard>
            </CardContent>
          </Card>
        
      
    )
  })
    

  return(

    <BodyStyle>
      <HeaderFeed />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Filtrar
            </InputLabel>
            <SelectCat
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={category}
              onChange={catFilter}
              autoWidth
              label="Filtrar"
            >
              <MenuItem value="">
                <em>Categoria</em>
              </MenuItem>
              <MenuItem value={"árabe"}>Árabe</MenuItem>
              <MenuItem value={"sorvetes"}>Sorvete</MenuItem>
              <MenuItem value={"carnes"}>Carnes</MenuItem>
              <MenuItem value={"petiscos"}>Petiscos</MenuItem>
              <MenuItem value={"asiática"}>Asiática</MenuItem>
              <MenuItem value={"hamburguer"}>Burguer</MenuItem>
              <MenuItem value={"italiana"}>Italiana</MenuItem>
              <MenuItem value={"baiana"}>Baiana</MenuItem>
              <MenuItem value={"mexicana"}>Mexicana</MenuItem>
      </SelectCat>
      </FormControl>
      { !loadingRestaurants && renderRestaurants}
      { !loadingRestaurants && errorRestaurants && <p>Erro. Tente outra vez!</p> }
    </BodyStyle>
  )
    
}