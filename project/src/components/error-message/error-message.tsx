import { useSelector } from 'react-redux';
import { State } from '../../types/state';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useSelector<State, string | null>((state) => state.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
