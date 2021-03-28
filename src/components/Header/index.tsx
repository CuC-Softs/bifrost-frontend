import { AccountCircle } from '@material-ui/icons';
import Link from 'next/link';
import Logo from '../Logo';
import { Container, Header, SubHeader } from './styles';

const DesktopHeader: React.FC = ({ children }) => (
  <Container>
    <Header>
      <Link href="/">
        <button type="submit">
          <Logo />
        </button>
      </Link>
      <Link href="/login">
        <button type="submit">
          <AccountCircle color="action" />
        </button>
      </Link>
    </Header>
    <SubHeader>{children}</SubHeader>
  </Container>
);

export default DesktopHeader;
