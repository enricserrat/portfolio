document.addEventListener("DOMContentLoaded", (event) => {
  // La función fetchIpInfo hace una solicitud a tu script PHP
  const fetchIpInfo = (ip) => {
    return fetch(`https://eipreveal.enricserrat.com/api.php?ip=${ip}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  const $ = (selector) => document.querySelector(selector);

  const $form = $("#form");
  const $input = $("#input");
  const $submit = $("#submit");
  const $results = $("#results");

  $form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { value } = $input;

    if (!value) return;

    $submit.setAttribute("disabled", "");
    $submit.setAttribute("aria-busy", "true");

    const ipInfo = await fetchIpInfo(value);

    if (ipInfo) {
      $results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    $submit.removeAttribute("disabled");
    $submit.removeAttribute("aria-busy");
  });
});