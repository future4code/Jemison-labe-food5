import { Card, CardMedia } from "@mui/material";
import styled from "styled-components";
import { greyish } from "../../../Constants/colors";

export const CardProducts = styled(Card)`
  display: flex;
  width: 95vw;
  margin: 5px;
  position: relative;
  border: 1px solid ${greyish} !important;
`

export const ProductImage = styled(CardMedia)`
  max-width: 30vw;
  margin-right: 10px;
`

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95vw;
`