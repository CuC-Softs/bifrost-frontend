import Link from 'next/link';

import { AddCircleOutline, ArrowBack } from '@material-ui/icons';
import { Header } from './styles';

const ProfileSubheader: React.FC = () => (
  <Header>
    <Link href="/profile">
      <ArrowBack />
    </Link>
    <span>Seus diários de bordo</span>
    <button type="button">
      <AddCircleOutline />
    </button>
  </Header>
);

export default ProfileSubheader;
