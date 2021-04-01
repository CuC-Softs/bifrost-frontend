import { AccountCircle } from '@material-ui/icons';
import Link from 'next/link';
import { HTMLProps } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../Logo';
import InstagramLogo from '../../../public/images/instagram-icon.svg';
import {
  Container,
  Header,
  InstagramButtonAndProfileAvatar,
  SubHeader,
} from './styles';
import { ApplicationState } from '../../store';
import { User } from '../../store/ducks/session/types';

const DesktopHeader: React.FC = ({ children }) => {
  const user = useSelector<ApplicationState, User | null>(s => s.session.user);
  return (
    <Container>
      <Header>
        <Link href="/">
          <button type="submit">
            <Logo />
          </button>
        </Link>
        <InstagramButtonAndProfileAvatar
          isLogged={!!user}
          hasAvatar={!!user?.imageUrl}
        >
          <Link href="/profile">
            <button type="submit">
              <InstagramLogo />
            </button>
          </Link>
          <Link href="/profile">
            <button type="button">
              <img src={user?.imageUrl} alt="userAvatar" />
              <AccountCircle color="action" />
            </button>
          </Link>
          <Link href="/login">
            <button type="submit">
              <AccountCircle color="action" />
            </button>
          </Link>
        </InstagramButtonAndProfileAvatar>
      </Header>
      <SubHeader>{children}</SubHeader>
    </Container>
  );
};

export default DesktopHeader;
