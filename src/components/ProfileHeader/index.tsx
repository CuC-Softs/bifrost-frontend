import { HTMLProps } from 'react';
import Link from 'next/link';

import { ArrowBack } from '@material-ui/icons';
import { Header1, Header2 } from './styles';

import Instagram from '../../../public/images/instagram-logo.svg';

interface ProfileHeaderProps extends HTMLProps<HTMLDivElement> {
  isSelf: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ isSelf }) => (
  <>
    {!isSelf ? (
      <Header1>
        <Link href="/">
          <button className="back" type="submit">
            <ArrowBack />
          </button>
        </Link>
        <div className="false">
          <div id="userinfo">
            <img
              src="https://f4.bcbits.com/img/a3638493734_10.jpg"
              alt="profile_pic"
            />
            <div className="info">
              <div className="span">
                <span>@sandenson</span>
              </div>
              <div>
                <div className="span">
                  <span>Diários de bordo: 2</span>
                </div>
                <div className="span">
                  <span>Seguidores: 69</span>
                </div>
              </div>
              <button className="follow" type="button">
                SEGUIR
              </button>
            </div>
          </div>
        </div>
      </Header1>
    ) : (
      <Header2>
        <Link href="/">
          <button className="back" type="submit">
            <ArrowBack />
          </button>
        </Link>
        <div className="true">
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
              <span>diários de bordo</span>
            </div>
          </div>
          <div className="pfp">
            <div>
              <img
                src="https://f4.bcbits.com/img/a3638493734_10.jpg"
                alt="profile_pic"
              />
              <span>@sandenson</span>
            </div>
          </div>
          <div className="ig">
            <Instagram />
          </div>
        </div>
      </Header2>
    )}
  </>
);

export default ProfileHeader;
