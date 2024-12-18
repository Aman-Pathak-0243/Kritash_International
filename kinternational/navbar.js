document.addEventListener("DOMContentLoaded", function () {
  var navbarHtml = `
  <ul class="navbar">
    <div class="img1">
      <div class="img2"></div>
    </div>
    <li><a href="#" class="link focus">MERCH STORE</a></li>
    <div class="dropdown">
      <button class="dropbtn">
        Past Teams
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="../Past Team/Past19.html" class="link">2019 - 2020</a>
        <a href="../Past Team/Past20.html" class="link">2020 - 2021</a>
        <a href="../Past Team/Past21.html" class="link">2021 - 2022</a>
        <a href="../Past Team/Past22.html" class="link">2022 - 2023</a>
        <a href="../Past Team/Past23.html" class="link">2023 - 2024</a>
      </div>
    </div>
    <li><a href="Team/Team.html" class="link">Current Team</a></li>
    <div class="dropdown">
      <button class="dropbtn">
        Events
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="Events/events.html">All Events</a>
        <a href="https://docs.google.com/spreadsheets/d/1Q0u5SEDxk36zkmO9ZIAIVQZUQZt6S49u3d0mhjZR0P8/edit#gid=0">Calendar</a>
        <a href="https://youtube.com/playlist?list=PLdb92Tztcqtp_z7CoDuFW0SODjeNdjrYD&si=FX7XYfRv8Vk1QD87">Eye On Social</a>
        <a href="Events/gallery.html">Gallery</a>
      </div>
    </div>
    <li><a href="https://drive.google.com/file/d/1l4UIyA2W8eHFzQydLXVhFlfF3km1IE7x/view?usp=sharing" class="link"><strong>🔥<u>SAMAARAMBHA</u>🔥</strong></a></li>
    <li><a href="https://drive.google.com/file/d/1qGVU0iSgpNdv_ZhAUg5G_XAGpBXoHQkC/view?usp=drive_link" class="link">sponsors</a></li>
    <li><a href="About/about.html" class="link">about</a></li>
    <li><a href="#" class="link active">home</a></li>
  </ul>`;
  document.body.insertAdjacentHTML("afterbegin", navbarHtml);
});
