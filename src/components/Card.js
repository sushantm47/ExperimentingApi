import React, { useState } from 'react';

import { NativeSelect, FormControl } from '@material-ui/core';

export default function Card({
  fdata,
  data2,
  characters,
  characters2,
  characters3,
  ...props
}) {
  const [selectedCharacterName, setSelectedCharacter] = useState('');
  const [selectedCharacterPower, setSelectedCharacterPower] = useState(0);
  const findpower = () => {
    console.log('inside power');
    characters.forEach((element) => {
      if (element.name === selectedCharacterName) {
        console.log(element.max_power);
        setSelectedCharacterPower(element.max_power);
        return;
      }
    });
    characters2.forEach((element) => {
      if (element.name === selectedCharacterName) {
        console.log(element.max_power);
        setSelectedCharacterPower(element.max_power);
        return;
      }
    });
  };
  return (
    <div>
      <div className='main-box2'>
        <div className='box2'>
          <h1>Avengers</h1>
          {characters.map((item) => (
            <li key={item.name}> {item.name}</li>
          ))}
        </div>
        <div className='box2'>
          <h1>X-Men</h1>
          {characters2.map((item) => (
            <li key={item.name}> {item.name}</li>
          ))}
        </div>
      </div>
      <FormControl style={{ width: '100%' }}>
        <div className='main-box'>
          <div className='box'>
            <NativeSelect
              defaultValue=''
              onChange={(e) => {
                setSelectedCharacter(e.target.value);
              }}
            >
              <option value=''>Select Your Hero</option>
              {characters.map((character, i) => (
                <option key={i} value={character.name}>
                  {character.name}
                </option>
              ))}
              {characters2.map((character, i) => (
                <option key={i + character.name} value={character.name}>
                  {character.name}
                </option>
              ))}
            </NativeSelect>
            <button onClick={findpower} className='box'>
              power
            </button>

            <div className='box'>
              <h2>{selectedCharacterPower}</h2>
            </div>
          </div>
        </div>
      </FormControl>
    </div>
  );
}
