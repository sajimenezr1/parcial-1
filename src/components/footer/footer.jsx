import { FormattedMessage } from "react-intl"

export const Footer = () => {
    return(
        <div className="container d-flex flex-column justify-content-center align-items-center" id="footer">
            <p className="text-center" style={{fontSize: "16px"}}> <FormattedMessage id="ContactUs"/> +57 3102105253 - info@robot-lovers.com - @robot-lovers </p>
        </div>
    )   
}