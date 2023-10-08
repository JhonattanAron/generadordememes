import React from 'react';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import { Button, NativeSelect , TextField } from '@mui/material';


function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [img, setImg] = useState("");

  const inputOnChange = (event) => {
    setLinea1(event.target.value);
  }
  const inputOnChange2 = (event) => {
    setLinea2(event.target.value);
  }
  const selectChange = (event) => {
    setImg(event.target.value);
  }
  const buttonOnClick = () => {
    html2canvas(document.querySelector("#cont")).then(canvas => {
      var imagenDataURL = canvas.toDataURL('image/png');
      var enlaceDescarga = document.createElement('a');
      enlaceDescarga.href = imagenDataURL;
      enlaceDescarga.download = 'mi_meme.png';
      enlaceDescarga.click();
    });
  }


  return (
    <div className='cont'>
      <h1>Crea Tu Momazo</h1>
      <div className='cont'>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={selectChange}
        >
          <option value="blanco.jpeg">Blanco y Negro</option>
          <option value="color.jpg">Color</option>
          <option value="super.jpg">Super Men</option>
        </NativeSelect>
        <TextField onChange={inputOnChange} id="outlined-basic" label="Linea 1" variant="filled"  />
        <br />
        <TextField onChange={inputOnChange2} id="outlined-basic" label="Linea 2" variant="filled"  />
        <br />
        <Button onClick={buttonOnClick} color="secondary" variant='outlined' >Guardar</Button>
      </div>
      <div className='cont' id='cont'>
        <span> <b>{linea1} </b> </span>
        <span> <b> {linea2} </b></span>
        <img id='meme' src={"/img/" + img} alt="" />
      </div>

    </div>
  );
}

export default App;
