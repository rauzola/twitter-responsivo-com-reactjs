import React from 'react';

import {
  Container,
  Baner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Baner>
        <Avatar />
      </Baner>

      <ProfileData>
        {/* <EditButton outlineo>Editar Perfil</EditButton> */}

        <h1>Raul Sigoli</h1>
        <h2>@Raul_sigoli</h2>

        <p>
          Developer at <a href="https://github.com/rauzola">@Rauzola</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Maringá, PR, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 18 fevereiro de 2000
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
    </Container>
  );
};

export default ProfilePage;
