import "./Footer.css"

export default function Footer(){
    return (
    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <h4>NAVIGATION</h4>
                <a href="#">HOME</a>
                <a href="#">ABOUT BRANDS</a>
                <a href="#">CATALOG</a>
            </div>
            <div class="footer-col">
                <h4>HELP</h4>   
                <a href="#">NEWSLETTER</a>
                <a href="#">CONTACTS</a>
                <a href="#">SHIPPING</a>
            </div>
            <div class="footer-logo-section">
                <span class="logo">BELLA</span>
                <div class="socials">INSTAGRAM — TWITTER — FACEBOOK</div>
            </div>
            <div class="footer-col">
                <h4>STAY UPDATED</h4>
                <div class="subscribe-box">
                    <input type="text" placeholder="ENTER YOUR EMAIL"/>
                    <span class="subscribe-btn">→</span>
                </div>
            </div>
        </div>
    </footer>

    )
}