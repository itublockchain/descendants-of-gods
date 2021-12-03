import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { animated, useSpring } from "react-spring";

import styles from "./Modal.module.scss";
import { useClickOutside } from "hooks/useClickOutside";

type ModalProps = {
    isOpen: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
    closeOutside?: boolean;
    opacity?: number;
};

const Modal = ({
    isOpen,
    close,
    children,
    closeOutside = true,
    opacity = 0.3,
}: ModalProps) => {
    const { ref } = useClickOutside(closeOutside ? close : null);

    React.useEffect(() => {
        if (isOpen) {
            const bodyEl = document.querySelector("body");
            if (bodyEl) {
                bodyEl.style.overflow = "hidden";
            }
        } else {
            const bodyEl = document.querySelector("body");
            if (bodyEl) {
                bodyEl.style.overflow = "visible";
            }
        }
    }, [isOpen]);

    const style = `rgba(0, 0, 0, ${opacity})`;

    const fadeIn = useSpring({
        opacity: isOpen ? 1 : 0,
        config: { duration: 200 },
    });

    return (
        <>
            {isOpen && (
                <animated.div style={{ ...fadeIn }} className={styles.modal}>
                    <div className={styles.content} ref={ref}>
                        {children}
                    </div>
                    <div
                        className={styles.overlay}
                        style={{ backgroundColor: style }}
                    ></div>
                </animated.div>
            )}
        </>
    );
};

export default Modal;
