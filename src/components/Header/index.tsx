import { AccountCircle } from '@material-ui/icons';
import Link from 'next/link';
import { HTMLProps } from 'react';
import Logo from '../Logo';
import InstagramLogo from '../../../public/images/instagram-icon.svg';
import {
  Container,
  Header,
  InstagramButtonAndProfileAvatar,
  SubHeader,
} from './styles';

interface DesktopHeaderProps extends HTMLProps<HTMLDivElement> {
  isLogged?: boolean;
  userAvatarUrl?: string;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  children,
  isLogged = false,
  userAvatarUrl,
}) => (
  <Container>
    <Header>
      <Link href="/">
        <button type="submit">
          <Logo />
        </button>
      </Link>
      <InstagramButtonAndProfileAvatar
        isLogged={isLogged}
        hasAvatar={!!userAvatarUrl}
      >
        <Link href="/profile">
          <button type="submit">
            <InstagramLogo />
          </button>
        </Link>
        <button type="button">
          <img src={userAvatarUrl} alt="userAvatar" />
          <AccountCircle color="action" />
        </button>
        <Link href="/profile">
          <button type="submit">
            <AccountCircle color="action" />
          </button>
        </Link>
      </InstagramButtonAndProfileAvatar>
    </Header>
    <SubHeader>{children}</SubHeader>
  </Container>
);

export default DesktopHeader;
