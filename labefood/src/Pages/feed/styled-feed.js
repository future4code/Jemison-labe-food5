import { Card, Select } from "@mui/material";
import styled from "styled-components";

export const BodyStyle = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

`

export const CardStyled = styled.div`
  margin: 10px;
  width: 85vw;
  text-align: left;
  border-radius: 10px;
  border-style: groove;
  
  
`
export const MainCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  
`
export const TextStyled = styled.label`
  width: 95vw;
  margin: 20px !important;
`
export const SelectCat = styled(Select)`
  width: 40vw;
`
