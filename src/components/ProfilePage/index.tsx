import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Raul Sigoli</h1>
        <h2>@raul_sigoli</h2>

        <p>
          Developer at <a href="https://github.com/rauzola">@Raul_Sigoli</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Maringá, Paraná
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 18 de fevereiro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
