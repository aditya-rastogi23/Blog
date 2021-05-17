import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const zero = 0;

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(zero, zero);
    }, [pathname]);
    return null;
};
export default ScrollToTop;
