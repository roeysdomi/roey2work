
const scrollcontact=()=>
{
  var element = document.querySelector(".contact");
  element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  console.log("clickedddd")
}
