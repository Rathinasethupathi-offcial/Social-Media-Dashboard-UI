const cardData = [
  { title: "Page Views", value: 83, icon: "images/icon-facebook.svg", change: "+3" },
  { title: "Likes", value: 52, icon: "images/icon-instagram.svg", change: "-2" },
  { title: "Shares", value: 24, icon: "images/icon-twitter.svg", change: "+8" },
  { title: "Followers", value: 900, icon: "images/icon-youtube.svg", change: "-1" },
  { title: "Page Views", value: 83, icon: "images/icon-facebook.svg", change: "+3" },
  { title: "Likes", value: 52, icon: "images/icon-instagram.svg", change: "-2" },
  { title: "Shares", value: 24, icon: "images/icon-twitter.svg", change: "+8" },
  { title: "Followers", value: 900, icon: "images/icon-youtube.svg", change: "-1" }
];

const container = document.getElementById('cardsContainer');

// Render Cards
container.innerHTML = cardData.map(card => {
  const isPositive = card.change.startsWith('+');
  const changeColor = isPositive ? "text-green-600" : "text-red-600";
  const changeIcon = isPositive ? "images/icon-up.svg" : "images/icon-down.svg";

  return `
    <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-[#252a41] shadow hover:bg-slate-700 transition-all duration-300">
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <h3 class="truncate text-lg font-medium text-[#8b97c6] hover:text-white">${card.title}</h3>
          <p class="mt-1 truncate text-3xl text-white font-bold">${card.value}</p>
        </div>
        <div>
          <img class="size-6 shrink-0 rounded-sm" src="${card.icon}" alt="">
          <p class="mt-5 truncate text-lg font-bold ${changeColor} flex items-center">
            ${card.change}
            <img src="${changeIcon}" alt="" class="ml-2">
          </p>
        </div>
      </div>
    </li>
  `;
}).join('');


// Social Data Section
const socialData = [
  { count: 1900, increment: "+12" , borderColor: "#198ff5"},
  { count: 1600, increment: "+15",borderColor: "#198ff5" },
  { count: 1200, increment: "+12",borderColor: "#198ff5" },
  { count: 1970, increment: "+14",borderColor: "#198ff5" }
];

let socialAccounts = document.getElementById('socialAccounts');

// Render Social Data
socialAccounts.innerHTML = socialData.map(data => {
  const isPositive = data.increment.startsWith('+');
  const incrementColor = isPositive ? "text-green-700" : "text-red-700";

  return `
    <div class="flex flex-col justify-center items-center p-6 h-2xl rounded-md bg-[#252a41] border-t-4 ${data.borderColor} hover:shadow-lg transition-all duration-300">
      <h1 class="text-3xl text-white font-bold">${data.count}</h1>
      <p class="text-gray-400 mt-2">Followers</p>
      <p class="${incrementColor} font-semibold text-sm mt-5">${data.increment} Today</p>
    </div>
  `;
}).join('');
