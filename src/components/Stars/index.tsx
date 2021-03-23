import { HTMLProps } from 'react';
import { Rating } from '@material-ui/lab';
import { Container } from './styles';
import NotFilledStar from '../../../public/images/not_filled_star.svg';
import FilledStar from '../../../public/images/filled_star.svg';

interface StarsProps extends HTMLProps<HTMLDivElement> {
  rate: number;
}

const Stars: React.FC<StarsProps> = ({ rate }) => (
  <Container>
    <Rating
      readOnly
      value={rate}
      classes={{ iconEmpty: NotFilledStar, iconActive: FilledStar }}
    />
  </Container>
);

export default Stars;
