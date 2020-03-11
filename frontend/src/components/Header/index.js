import React, { useState } from 'react';
import { MdExitToApp, MdSettings, MdLocationSearching } from 'react-icons/md';

import { Header, SearchBar, UserAvatar, ProfileOptions } from './styles';

export default function Home() {
  // States
  const [visible, setVisible] = useState(false);

  // Functions
  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Header>
      <SearchBar>
        <MdLocationSearching size={25} color="#7159c1" />
        <input
          type="text"
          placeholder="Pesquise por artistas, músicas e álbuns..."
        />
      </SearchBar>
      <UserAvatar
        src="https://i.snipboard.io/lt8WpB.jpg"
        alt="Profile"
        onClick={handleToggleVisible}
      />
      {visible && (
        <ProfileOptions>
          <ul>
            <li>
              <MdSettings size={16} color="#7159c1" />
              Configurações
            </li>
            <li>
              <MdExitToApp size={16} color="#7159c1" />
              Sair
            </li>
          </ul>
        </ProfileOptions>
      )}
    </Header>
  );
}
