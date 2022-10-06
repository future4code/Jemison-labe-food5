import { Box, CardContent, CardMedia, Typography, Tabs, Tab, Card, ThemeProvider } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { HeaderFeed } from "../../Components/Header/header";
import { BarraBusca } from '../../Components/BarraBusca/BarraBusca'
import { Contexts } from "../../Global/context";
import { goToDefaultRestaurantePage } from "../../Routes/coordinator";
import { BodyStyle, CardStyled, MainCard, SelectCat } from "./styled-feed";
import { midGreen, greyish } from "../../Constants/colors";
import { theme } from '../../Constants/theme'

import { goToSearchPage } from "../../Routes/coordinator";


export const FeedPage = () => {

  const navigate = useNavigate();


  const { states } = useContext(Contexts);

  const [category, setCategory] = useState('');


  return (
    <ThemeProvider theme={theme}>
      <HeaderFeed />
      <BarraBusca onClick={() => { goToSearchPage(navigate)}} />
    <BodyStyle>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
        <Tabs
          value={category}
          onChange={(ev, val) => setCategory(val)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Categorias"
          textColor="secondary"
          indicatorColor="#fff"
        >
          <Tab label="Árabe" value="árabe"/>
          <Tab label="Sorvete" value="sorvetes" />
          <Tab label="Carnes" value="carnes" />
          <Tab label="Petiscos" value="petiscos" />
          <Tab label="Asiática" value="asiática" />
          <Tab label="Hamburguer" value="hamburguer" />
          <Tab label="Italiana" value="italiana" />
          <Tab label="Baiana" value="baiana" />
          <Tab label="Mexicana" value="mexicana" />
        </Tabs>
      </Box>
      {states && !states.loadingRestaurants && states.rest && states.rest.restaurants && states.rest.restaurants.filter((item) => {
        return item.category.toLowerCase().includes(category.toLowerCase())
      }).map((restaurant, index) => {
        return (
          <Card sx={{ minWidth: 330 }} key={restaurant.id} onClick={() => { goToDefaultRestaurantePage(navigate, restaurant.id) }}>
            <CardMedia component='img' height='140' image={restaurant.logoUrl} alt='Logo do restaurante' />
            <CardContent >
              <Typography color={midGreen}>{restaurant.name}</Typography>
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
      }
      {states && !states.loadingRestaurants && states.errorRestaurants && <p>Erro. Tente outra vez!</p>}
    </BodyStyle>
    </ThemeProvider>
  )

}