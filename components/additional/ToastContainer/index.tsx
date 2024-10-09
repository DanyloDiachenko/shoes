import { Bounce, ToastContainer as ToastContainerLib } from "react-toastify";

const TOAST_AUTO_CLOSE_MILISECONDS = 5000;

export const ToastContainer = () => {
    return (
        <ToastContainerLib
            position="bottom-left"
            autoClose={TOAST_AUTO_CLOSE_MILISECONDS}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    );
};
