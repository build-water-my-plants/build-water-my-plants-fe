import React from 'react';
import styled from 'styled-components';

export const FormGroup = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 20px;
  margin: 10px 0px 10px 0px;
`;

export const Input = styled.input`
  width: 50%;
  height: 25px;
  margin: 0px 25% 0px 25%;
`;

export const Button = styled.button`
  width: 50%;
  height: 50px;
  margin: 10px 25% 10px 25%;
`;

export const Table = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #a4bc31;
`;


export const TableRow = styled.div`
  width: 35%;
  display: flex;
  margin: 10px 0px 10px 0px;
`;

export const ImgLogo = styled.img`
  flex: 2;
  background-color: #f5ef5d;
  height: 100%;
`;

export const TextDiv = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const TableData = styled.p`
  margin: 10px 0px 10px 10px;
`;

export const UserButton = styled.button`
  flex: 1;
`;

export const ButtonDiv = styled.div`
  margin-left: 10px;
  display: flex;
`;
