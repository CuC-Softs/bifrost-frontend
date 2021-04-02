import NextLink, { LinkProps } from 'next/link';
import { useSelector } from 'react-redux';
import { UrlObject } from 'url';
import { ApplicationState } from '../../store';
import { User } from '../../store/ducks/session/types';

interface MyLinkProps extends LinkProps {
  isPrivate?: boolean;
}

const Link: React.FC<MyLinkProps> = ({ children, href, isPrivate = false }) => {
  const isLogged = !!useSelector<ApplicationState, User | null>(
    s => s.session.user,
  );

  let link: string | UrlObject;

  if (isPrivate) {
    if (isLogged) {
      link = href;
    } else {
      link = '/login';
    }
  } else {
    link = href;
  }

  return (
    // eslint-disable-next-line no-nested-ternary
    <NextLink href={link}>{children}</NextLink>
  );
};

export default Link;
