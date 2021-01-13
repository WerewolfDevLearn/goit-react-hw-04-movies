import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Error({ error }) {
  const notify = () => toast.error('error.massage');

  return (
    <div>
      <button onClick={notify}>Notify !</button>
    </div>
  );
}
