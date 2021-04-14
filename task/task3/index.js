function replaceHtmlSymbols(str) {
    return str.replace(/</g,'&lt;').replace(/>/g,'&gt;') ;
}

//1
let div1 = document.getElementById('div1'),
    div2 = document.getElementById('div2');
console.log(...[document.body.children])
div1.innerHTML = `${[...document.body.children]
    .map((child) => {
        return replaceHtmlSymbols(child.outerHTML);
    })}`;
div2.innerHTML = replaceHtmlSymbols(document.querySelector("html").outerHTML);
//2
let mounth = document.getElementById('mounth');
function days(){
    mounth.innerHTML+=`
    <li>
        <ul>
            <li>Понедельник</li>
            <li>Вторник</li>
            <li>Среда</li>
            <li>Четверг</li>
            <li>Пятница</li>
            <li>Суббота</li>
            <li>Воскресенье</li>
        <ul/>
    </li>`
}
//3
let div3 = document.getElementById('div3');
const heading = document.querySelectorAll("main h1, main h2, main h3, main h4, main h5, main h6, main h7");
div3.innerHTML = `${[...heading]
    .map((child) => {
        return replaceHtmlSymbols(child.innerHTML);
    })}`;
//4
let main = document.querySelector('main');
let firstVar = document.getElementById('four'),
    secondVar = document.getElementsByClassName('four')[0],
    thirdVar = main.children[0];
if ((firstVar==secondVar)&&(firstVar==thirdVar)){
    alert('три элемента равны')
}
//5
let table = document.getElementById('table');
table.innerHTML = `
        <thead>
            <td>Признаки</td>
            <td class="grey">Сычи</td>
            <td class="grey">Ушастые совы</td>
            <td class="green">Филин</td>
        </thead>
        <tr>
            <td>Количество видов</td>
            <td class="grey">3</td>
            <td class="grey">6</td>
            <td class="green">16</td>
        </tr>
        <tr>
            <td>Большие уши</td>
            <td class="grey">нет</td>
            <td class="grey">да</td>
            <td class="green">да</td>
        </tr>
        <tr>
            <td>Латинское название</td>
            <td class="grey">Athene</td>
            <td class="grey">Aslo</td>
            <td class="green">Bubo</td>
        </tr>
        <tfoot>
            <td>Итого по размерам</td>
            <td class="grey">Мелкие</td>
            <td class="grey">Средние</td>
            <td class="green">Крупные</td> 
        </tfoot>
`;
