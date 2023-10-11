import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Context from "../contextApi/Context";
import './Home.css';

export default function Home() {
  const { character } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    if (!Array.isArray(character)) {
      return;
    }

    // Arama sorgusuna göre karakterleri filtrele
    const filtered = character.filter(oneCharacter =>
      oneCharacter.displayName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCharacters(filtered);
  }, [character, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='home'>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Karakterleri Ara...'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <FontAwesomeIcon icon={faSearch} className='icon' />
      </div>

      <div className='character-cards'>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((oneCharacter) => (
            <div className='onecharacter-card' key={oneCharacter.uuid}>
              <img src={oneCharacter.displayIcon} alt={oneCharacter.displayName} />
              <div className='abilities'>
                {oneCharacter.abilities.map((ability, index) => (
                  <img className='abilities-image' key={index} src={ability.displayIcon} alt={ability.slot} />
                ))}
              </div>
              <h4>{oneCharacter.displayName}</h4>
              <p className='description'>{oneCharacter.description}</p>
            </div>
          ))
        ) : (
          <div className='onecharacter-card empty-card'>
            <h4>Karakter Yok</h4>
            <p>Görüntülenecek karakter verisi bulunmamaktadır.</p>
          </div>
        )}
      </div>
    </div>
  );
}
