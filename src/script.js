const cardData = [
    { title: "Page Views", value: 83, icon: "images/icon-facebook.svg", change: "+3", changeIcon: "images/icon-up.svg", changeColor: "text-green-600" },
    { title: "Likes", value: 52, icon: "images/icon-instagram.svg", change: "-2", changeIcon: "images/icon-down.svg", changeColor: "text-red-600" },
    { title: "Shares", value: 24, icon: "images/icon-twitter.svg", change: "+8", changeIcon: "images/icon-up.svg", changeColor: "text-green-600" },
    { title: "Followers", value: 900, icon: "images/icon-youtube.svg", change: "-1", changeIcon: "images/icon-down.svg", changeColor: "text-red-600" },
    { title: "Page Views", value: 83, icon: "images/icon-facebook.svg", change: "+3", changeIcon: "images/icon-up.svg", changeColor: "text-green-600" },
    { title: "Likes", value: 52, icon: "images/icon-instagram.svg", change: "-2", changeIcon: "images/icon-down.svg", changeColor: "text-red-600" },
    { title: "Shares", value: 24, icon: "images/icon-twitter.svg", change: "+8", changeIcon: "images/icon-up.svg", changeColor: "text-green-600" },
    { title: "Followers", value: 900, icon: "images/icon-youtube.svg", change: "-1", changeIcon: "images/icon-down.svg", changeColor: "text-red-600" },
  ];

  const container = document.getElementById('cardsContainer');

  cardData.forEach(card => {
    const cardHTML = `
      <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-[#252a41] shadow">
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-lg font-medium text-[#8b97c6]">${card.title}</h3>
            </div>
            <p class="mt-1 truncate text-3xl text-white font-bold">${card.value}</p>
          </div>
          <div>
            <img class="size-6 shrink-0 rounded-sm bg-gray-300" src="${card.icon}" alt="">
            <p class="mt-5 truncate text-lg font-bold ${card.changeColor} flex justify-between items-center">
              ${card.change}
              <img src="${card.changeIcon}" alt="" class="ml-2">
            </p>
          </div>
        </div>
      </li>
    `;
    container.innerHTML += cardHTML;
  });

const socialData=[
    {count:1900,increment:+12},
    {count:1600,increment:+15},
    {count:1200,increment:+12},
    {count:1970,increment:+14}
];

let socialAccounts=document.getElementById('socialAccounts');
socialData.forEach(data =>{
    const dataHtml=`<div class=" flex flex-col justify-center items-center p-6 h-2xl rounded-md bg-[#252a41] border-t-4 border-[#198ff5]">
    <h1 class="text-3xl text-white font-bold">${data.count}</h1>
    <p class="text-gray-400 mt-2">Followers</p>
    <p class="text-green-700 font-semibold text-sm mt-5">+${data.increment} Today</p> 
  </div>`
  socialAccounts.innerHTML+=dataHtml;
})
