$(() => {
  console.log($(".parrafo"));

  $(".parrafo").prepend("<p>parrafo de ejemplo");
  $(".parrafo").append("<p>agregando mediante jQuery");
});

$("#parrafoEjemplo")
  .animate({
    "font-size": "5rem",
  })
  .slideUp(2000)
  .delay(3000)
  .fadeIn(2000);
