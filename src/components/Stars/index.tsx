import { HTMLProps } from 'react';
import { Rating } from '@material-ui/lab';
import { Container } from './styles';

interface StarsProps extends HTMLProps<HTMLDivElement> {
  rate: number;
}

const Stars: React.FC<StarsProps> = ({ rate }) => (
  <Container>
    <Rating
      name="half-rating-read"
      precision={0.1}
      readOnly
      value={rate}
      classes={{ iconFilled: 'Filled', iconEmpty: 'Empty' }}
    />
  </Container>
);

export default Stars;
