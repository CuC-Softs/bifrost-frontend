import { HTMLProps } from 'react';
import Link from 'next/link';

import { AddCircleOutline } from '@material-ui/icons';
import { HeaderExtension } from './styles';

interface ProfileHeaderProps extends HTMLProps<HTMLDivElement> {
  isSelf: boolean;
}

const ProfileSubheader: React.FC<ProfileHeaderProps> = ({ isSelf }) => (
  <HeaderExtension>
    {!isSelf ? (
      <span>Publicações de Luiz Sandes</span>
    ) : (
      <>
        <div className="info2">
          <div className="infoTile">
            <span>69</span>
            <span>seguidores</span>
          </div>
          <div className="infoTile">
            <span>24</span>
            <span>seguindo</span>
          </div>
          <div className="infoTile">
            <span>24</span>
            <span>logbooks</span>
          </div>
        </div>
        <span>Suas publicações</span>
        <button type="button">
          <AddCircleOutline />
        </button>
      </>
    )}
  </HeaderExtension>
);

export default ProfileSubheader;
