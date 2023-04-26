import "./Fleche.scss";
import ScrollToTop from "react-scroll-to-top";

export default function Fleche() {
    return (
        <div className="Fleche">
        <ScrollToTop smooth viewBox="0 0 800 800"
            svgPath="M789.3,556.1L425.7,192.5c-6.8-6.8-16.1-10.6-25.7-10.6c-9.6,0-18.9,3.8-25.7,10.7L10.6,556.1
            c-14.2,14.2-14.2,37.2,0,51.4c14.2,14.2,37.2,14.2,51.4,0L400,269.6l337.9,337.9c7.1,7.1,16.4,10.6,25.7,10.6s18.6-3.5,25.7-10.7
            C803.5,593.3,803.5,570.3,789.3,556.1z" color="white"/>
        </div>
    )
}
