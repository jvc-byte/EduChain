import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export function ToastDestructive() {
    const notify = () => toast("Wow so easy!");

  return (
    <div className="">
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  )
}
