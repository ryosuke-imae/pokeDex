import { gen8 } from "./gen8-jp.json.js";

const poke_container = document.querySelector('#poke_container');
// console.log(gen8[0].name);
const pokeNumber = 101;

const innerOl = document.createElement('ol');
poke_container.append(innerOl);

const poke_list = document.querySelector('#poke_container > ol');
poke_list.classList.add('poke-list')

for (let i = 0; i <= pokeNumber; i++) {
    const pokeNumber = gen8[i].no;
    const pokeName = gen8[i].name;
    const pokeList = document.createElement('li');
    poke_list.insertAdjacentHTML('beforeend',
        `<li>
            <div class="poke-number">${i + 1}</div>
            <div class="poke-img"><img src="img/${pokeNumber}.png" alt="${pokeName}"></div>
            <div class="poke-name">${pokeName}</div>
            <label class="poke-checker">
                <input type="checkbox" name="check${pokeNumber}">
            </label>
        </li>`
    );
}

//modal
const pokeElms = document.querySelectorAll('.poke-name');
let index;
pokeElms.forEach((elm) => {
    elm.addEventListener("click", () => {
        index = [].slice.call(pokeElms).indexOf(elm);
        // console.log(index);
        const pokeNumber = gen8[index].no;
        const pokeName = gen8[index].name;
        poke_container.insertAdjacentHTML('beforeend',
            `<div class="modal-windw">
                <div class="modal-wrap">
                    <div class="poke-img">
                        <img src="img/${pokeNumber}.png" alt="${pokeName}">
                    </div>
                <h1>No.${index} ${pokeName}</h1>
                <p>生息地 : 不明</p>
                <div class="btn-close" onclick="document.querySelector('.modal-windw').remove();">×</div>
                </div>
            </div>`
        );
    })
});

// const closeBtn = document.querySelector('.btn-close');
// closeBtn.addEventListener("click", () => {
//     console.log("sdfghjkl")
//     const modalWin = document.querySelector('.modal-windw');
//     modalWin.remove();
// });

// const removeElms = () => {
//         const modalWin = document.querySelector('.modal-windw');
//         modalWin.remove();  
// }

