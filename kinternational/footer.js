document.addEventListener("DOMContentLoaded", function () {
  var footerHtml = `
    <footer class="footer">
      <div class="footer-grid-container">
        <section class="footer-grid-items cols">
          <h1 class="h21">&mdash; CONTACT US</h1>
          <address class="h22">
            <div class="email"><a href="mailto:Kritash@iitjammu.ac.in">Kritash@iitjammu.ac.in</a></div> <br />
            <div class="number"><a href="tel:+917905001664">+91 7905001664</a>, <a href="tel:+919103540634">+91 6006138801</a></div>
          </address>
        </section>
        <section class="footer-grid-items">
          <h1 class="h21">&mdash; SOCIAL</h1>
          <p class="h22">
            <a href="https://www.linkedin.com" class="link">LinkedIn</a> <br />
            <a href="https://www.instagram.com/kritash_iitjammu/" class="link">Instagram</a> <br />
            <a href="https://www.facebook.com/S.W.B.IITJMU" class="link">Facebook <br/></a> <br />
            <a href="https://youtube.com/@kritash-iitjammu1587?si=RA0vC0E_tF-guM-t" class="link">Youtube <br/></a>  <br />
          </p>
        </section>
        <section class="footer-grid-items">
          <div id="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6707.144116272302!2d74.88793085390624!3d32.80360450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e814038301e31%3A0xe3a42e213df5c738!2sIndian%20Institute%20Of%20Technology%E2%80%93Jammu%20(IIT%E2%80%93Jammu)!5e0!3m2!1sen!2sin!4v1694952874044!5m2!1sen!2sin"
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
      </div>
      <h5 class="last-line">
        Copyright &#169; 2023 NSS IIT JAMMU. All Rights Reserved. Created by Development Team
      </h5>
    </footer>`;
  document.body.insertAdjacentHTML("beforeend", footerHtml);
});
