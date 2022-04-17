const onBackToTopClick = (e) => {
    window.scrollTo(0, 0);
}

const Footer = () => {
    return (
        <footer>
            <a href="#" onClick={onBackToTopClick}> &uarr; Back to top &uarr;</a>
            <img src="https://www.iconninja.com/files/521/347/770/euro-currency-symbol-icon.png" alt="" />
            <p>GVA Finance 2021</p>
            <p>@All Rights Reserved &copy;</p>
        </footer>
    );
};

export default Footer;