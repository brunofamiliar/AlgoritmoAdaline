const table = CreateTable();
    //INICIALIZA O BIAS
    const bias = 1.0;

document.getElementById("content").innerHTML = table;

const divTools = `<div class="tools">
    <div class="trainningarea"><a href="#" class="btn color-red" onclick=adaline()>Treinar</a></div>
    <div class="testoptions">
        <ul id="types" class="inputselection input-filltype">
            <li class="input-wrapper itemtypes">
                <input class="fancy-radio" hidden id="radio1" name="radio-group" type="radio" value="0"></input>
                <label class="fancy-radio-label" for="radio1">
                <span class="fancy-label--text">Tipo 1</span>
                <span class="fancy-radiobutton">
                    <span class="radiobutton-dot"></span>
                </span>
                </label>
            </li>
            <li class="input-wrapper itemtypes">
                <input class="fancy-radio" hidden id="radio2" name="radio-group" type="radio" value="1"></input>
                <label class="fancy-radio-label" for="radio2">
                <span class="fancy-label--text">Tipo 2</span>
                <span class="fancy-radiobutton">
                    <span class="radiobutton-dot"></span>
                </span>
                </label>
            </li>
            <li class="input-wrapper itemtypes">
                <input class="fancy-radio" hidden id="radio3" name="radio-group" type="radio" value="2"></input>
                <label class="fancy-radio-label" for="radio3">
                <span class="fancy-label--text">Tipo 3</span>
                <span class="fancy-radiobutton">
                    <span class="radiobutton-dot"></span>
                </span>
                </label>
        </li>
        </ul>
        <ul id="letters" class="inputselection input-fillletter">
        <li class="input-wrapper itemletters">
            <input class="fancy-radio" hidden id="radioA" name="radio-groupletters" type="radio" value="0"></input>
            <label class="fancy-radio-label" for="radioA">
            <span class="fancy-label--text">A</span>
            <span class="fancy-radiobutton">
                <span class="radiobutton-dot"></span>
            </span>
            </label>
        </li>
        <li class="input-wrapper itemletters">
            <input class="fancy-radio" hidden id="radioB" name="radio-groupletters" type="radio" value="1"></input>
            <label class="fancy-radio-label" for="radioB">
            <span class="fancy-label--text">B</span>
            <span class="fancy-radiobutton">
                <span class="radiobutton-dot"></span>
            </span>
            </label>
        </li>
        <li class="input-wrapper itemletters">
            <input class="fancy-radio" hidden id="radioC" name="radio-groupletters" type="radio" value="2"></input>
            <label class="fancy-radio-label" for="radioC">
            <span class="fancy-label--text">C</span>
            <span class="fancy-radiobutton">
                <span class="radiobutton-dot"></span>
            </span>
            </label>
        </li>
            <li class="input-wrapper itemletters">
                <input class="fancy-radio" hidden id="radioD" name="radio-groupletters" type="radio" value="3"></input>
                <label class="fancy-radio-label" for="radioD">
                <span class="fancy-label--text">D</span>
                <span class="fancy-radiobutton">
                    <span class="radiobutton-dot"></span>
                </span>
                </label>
            </li>
            <li class="input-wrapper itemletters">
                <input class="fancy-radio" hidden id="radioE" name="radio-groupletters" type="radio" value="4"></input>
                <label class="fancy-radio-label" for="radioE">
                <span class="fancy-label--text">E</span>
                <span class="fancy-radiobutton">
                    <span class="radiobutton-dot"></span>
                </span>
                </label>
            </li>
            <li class="input-wrapper itemletters">
                <input class="fancy-radio" hidden id="radioJ" name="radio-groupletters" type="radio" value="5"></input>
                <label class="fancy-radio-label" for="radioJ">
                <span class="fancy-label--text">J</span>
                <span class="fancy-radiobutton">
                    <span class="radiobutton-dot"></span>
                </span>
                </label>
            </li>
            <li class="input-wrapper itemletters">
                <input class="fancy-radio" hidden id="radioK" name="radio-groupletters" type="radio" value="6"></input>
                <label class="fancy-radio-label" for="radioK">
                <span class="fancy-label--text">K</span>
                <span class="fancy-radiobutton">
                    <span class="radiobutton-dot"></span>
                </span>
                </label>
            </li>
        </ul>

    </div>
    <div class="testarea">
        <a href="#" class="btn trainning color-blue" onclick=SetLetter()>Carregar</a>
        <a href="#" class="btn color-green" onclick=test()>Testar</a>
    </div>
</div>`;

document.getElementById("content").innerHTML += divTools;





//CARREGA AS CARACTERISTICAS DOS PACIENTES
const letters = [ // 21,64
    [
        -1, -1, 1, 1, -1, -1, -1 ,
        -1, -1, -1, 1, -1, -1, -1 ,
        -1, -1, -1, 1, -1, -1, -1,
        -1, -1, 1, -1, 1, -1, -1 ,
        -1, -1, 1,-1, 1, -1, -1,
        -1, 1, 1, 1, 1, 1, -1,
        -1, 1, -1, -1, -1, 1, -1 ,
        -1, 1, -1, -1, -1, 1, -1,
        1, 1, 1, -1, 1, 1, 1, 1
    ],
    [
        1, 1, 1, 1, 1, 1, -1 ,
        -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, 1, 1, 1, 1, -1 ,
         -1, 1, -1, -1, -1, -1, 1  ,
         -1, 1, -1, -1, -1, -1, 1  ,
         -1, 1, -1, -1, -1, -1, 1  ,
         1, 1, 1, 1, 1, 1, -1,1 
    ],
    [
        -1, -1, 1, 1, 1, 1, 1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, -1, 1, 1, 1, 1, 1, 1
    ],
    [
        1, 1,  1,  1,  1, -1, -1,
        -1, 1, -1, -1, -1, 1, -1 ,
        -1, 1, -1, -1, -1, -1, 1 ,
        -1, 1, -1, -1, -1, -1, 1 ,
        -1, 1, -1, -1, -1, -1, 1 ,
        -1, 1, -1, -1, -1, -1, 1 ,
        -1, 1, -1, -1, -1, -1, 1 ,
        -1, 1, -1, -1, -1,  1,-1 ,
        1, 1,  1,  1,  1, -1, -1,1
    ],
    [
        1, 1, 1, 1, 1, 1, 1 ,
        -1, 1, -1, -1, -1, -1,1 ,
        -1, 1, -1, -1, -1, -1, -1 ,
        -1, 1, -1, 1, -1, -1, -1,
        -1, 1, 1, 1, -1, -1, -1 ,
        -1, 1, -1, 1, -1, -1, -1,
        -1, 1, -1, -1, -1, -1, -1 ,
        -1, 1, -1, -1, -1, -1,1 ,
        1, 1, 1, 1, 1, 1, 1,1
    ],
    [
        -1, -1, -1, 1, 1, 1, 1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, 1, -1, -1, -1, 1, -1 ,
         -1, 1, -1, -1, -1, 1, -1 ,
         -1, -1, 1, 1, 1, -1, -1,1
    ],
    [
        1, 1, 1, -1, -1, 1, 1 ,
         -1, 1, -1, -1, 1, -1, -1 ,
         -1, 1, -1, 1, -1, -1, -1 ,
         -1, 1, 1, -1, -1, -1, -1 ,
         -1, 1, 1, -1, -1, -1, -1 ,
         -1, 1, -1, 1, -1, -1, -1 ,
         -1, 1, -1, -1, 1, -1, -1 ,
         -1, 1, -1, -1, -1, 1, -1,
         1, 1, -1,  -1, -1, 1, 1,1 
    ],
    [
        -1, -1, -1, 1, -1, -1, -1 ,
         -1, -1, -1, 1, -1, -1, -1 ,
         -1, -1, -1, 1, -1, -1, -1,
         -1, -1, 1, -1, 1, -1, -1 ,
         -1, -1, 1,-1, 1, -1, -1,
         -1, 1, -1, -1, -1, 1, -1,
         -1, 1, 1, 1, 1, 1, -1 ,
         -1, 1, -1, -1, -1, 1, -1,
         -1, 1, -1, -1, -1, 1, -1 ,1
    ],
    [
        1, 1, 1, 1, 1, 1, -1 ,
         1, -1, -1, -1, -1, -1, 1 ,
         1, -1, -1, -1, -1, -1, 1 ,
         1, -1, -1, -1, -1, -1, 1 ,
         1, 1, 1, 1, 1, 1, -1 ,
         1, -1, -1, -1, -1, -1, 1  ,
         1, -1, -1, -1, -1, -1, 1  ,
         1, -1, -1, -1, -1, -1, 1  ,
         1, 1, 1, 1, 1, 1, -1,1
    ],
    [
        -1, -1, 1, 1, 1, -1, -1 ,
        -1, 1, -1, -1, -1, 1, -1 ,
        1, -1, -1, -1, -1, -1, 1 ,
        1, -1, -1, -1, -1, -1, -1 ,
        1, -1, -1, -1, -1, -1, -1 ,
        1, -1, -1, -1, -1, -1, -1 ,
        1, -1, -1, -1, -1, -1, 1 ,
        -1, 1, -1, -1, -1, 1, -1 ,
        -1, -1, 1, 1, 1, -1, -1,1
    ],
    [
        1, 1,  1,  1,  1, -1, -1,
        1, -1, -1, -1, -1, 1, -1 ,
        1, -1, -1, -1, -1, -1, 1 ,
        1, -1, -1, -1, -1, -1, 1 ,
        1, -1, -1, -1, -1, -1, 1 ,
        1, -1, -1, -1, -1, -1, 1 ,
        1, -1, -1, -1, -1, -1, 1 ,
        1, -1, -1, -1, -1,  1,-1 ,
        1, 1,  1,  1,  1, -1, -1,1
    ],
    [
        1, 1, 1, 1, 1, 1, 1 ,
         1, -1, -1, -1, -1, -1,-1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, -1,
         1, 1, 1, 1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, -1,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1,-1 ,
         1, 1, 1, 1, 1, 1, 1,1 
    ],
    [
        -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, -1, -1, -1, -1, 1, -1 ,
         -1, 1, -1, -1, -1, 1, -1 ,
         -1, 1, -1, -1, -1, 1, -1 ,
         -1, -1, 1, 1, 1, -1, -1 ,1
    ],
    [
        1, -1, -1, -1, -1, 1, -1 ,
         1, -1, -1, -1, 1, -1, -1 ,
         1, -1, -1, 1, -1, -1, -1 ,
         1, -1, 1, -1, -1, -1, -1 ,
         1, 1, -1, -1, -1, -1, -1 ,
         1, -1, 1, -1, -1, -1, -1 ,
         1, -1, -1, 1, -1, -1, -1 ,
         1, -1, -1, -1, 1, -1, -1,
         1, -1, -1,  -1, -1, 1, -1,1
    ],
    [
        -1, -1, -1, 1, -1, -1, -1 ,
         -1, -1, -1, 1, -1, -1, -1 ,
         -1, -1, 1, -1, 1, -1, -1,
         -1, -1, 1, -1, 1, -1, -1 ,
         -1, 1, -1,-1, -1, 1, -1,
         -1, 1, 1, 1, 1, 1, -1,
         1, -1, -1, -1, -1, -1, 1 ,
         1, -1, -1, -1, -1, -1, 1,
         1, 1, -1, -1, -1, 1, 1,1
    ],
    [
        1, 1, 1, 1, 1, 1, -1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, 1, 1, 1, 1, -1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, -1, 1  ,
         -1, 1, -1, -1, -1, -1, 1  ,
         -1, 1, -1, -1, -1, -1, 1  ,
         1, 1, 1, 1, 1, 1, -1 ,1
    ],
    [
        -1, -1, 1, 1, 1, -1, 1 ,
         -1, 1, -1, -1, -1, 1, 1 ,
         1, -1, -1, -1, -1, -1, 1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, -1 ,
         1, -1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, 1, -1 ,
         -1, -1, 1, 1, 1, -1, -1 ,1
    ],
    [
        1, 1,  1,  1,  1, -1, -1,
         -1, 1, -1, -1, -1, 1, -1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1, -1, 1 ,
         -1, 1, -1, -1, -1,  1,-1 ,
         1, 1,  1,  1,  1, -1, -1,1 
    ],
    [
        1, 1, 1, 1, 1, 1, 1 ,
         -1, 1, -1, -1, -1, -1,1 ,
         -1, 1, -1, -1, 1, -1, -1 ,
         -1, 1, 1, 1, 1, -1, -1,
         -1, 1, -1, -1, 1, -1, -1 ,
         -1, 1, -1, -1, -1, -1, -1,
         -1, 1, -1, -1, -1, -1, -1 ,
         -1, 1, -1, -1, -1, -1,1 ,
         1, 1, 1, 1, 1, 1, 1,1
    ],
    [
        -1, -1, -1, -1, 1, 1, 1 ,
        -1, -1, -1, -1, -1, 1, -1 ,
        -1, -1, -1, -1, -1, 1, -1 ,
        -1, -1, -1, -1, -1, 1, -1 ,
        -1, -1, -1, -1, -1, 1, -1 ,
        -1, -1, -1, -1, -1, 1, -1 ,
        -1, -1, -1, -1, -1, 1, -1 ,
        -1, 1, -1, -1, -1, 1, -1 ,
        -1, -1, 1, 1, 1, -1, -1 ,1
    ],
    [
        1, 1, 1, -1, -1, 1, 1 ,
         -1, 1, -1, -1, -1, 1, -1 ,
         -1, 1, -1, -1, 1, -1, -1 ,
         -1, 1, -1, 1, -1, -1, -1 ,
         -1, 1, 1, -1, -1, -1, -1 ,
         -1, 1, -1, 1, -1, -1, -1 ,
         -1, 1, -1, -1, 1, -1, -1 ,
         -1, 1, -1, -1, -1, 1, -1,
         1, 1, -1,  -1, -1, 1, 1,1
    ]      
];
let weights = [ // pesos
    [
        0,0,0,0,0,0,0,0,0 ,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0
    ],
    [
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0
    ],
    [
       0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0, 0,0,0,0,0,0,0,0,
        0, 0,0,0,0,0,0,0,0,
        0, 0,0,0,0,0,0,0,0,
        0, 0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0
    ],
    [
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0
    ],
    [
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0
    ],
    [
         0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0
    ],
    [
         0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0
    ]
];


//SABER SE REDE FOI TREINADA OU NAO
var trained = false;

//FUNÇÃO PARA CARREGAR TABELA
function CreateTable(){
    let table = `
    <div class="table-style">
        <div id="message-fill" class="message-fill">
        <p>Treinada: <span class="traininganswer-Red" id="trainingresponse">${trained?"Sim":"Não"}</span></p>
        <p><span class="traininganswer-Red" id="trainingresponsecontrol"></span></p>
        </div>
        <table class="table-fill">
            <thead>
                <tr>
                    <th class="text-center">1</th>
                    <th class="text-center">2</th>
                    <th class="text-center">3</th>
                    <th class="text-center">4</th>
                    <th class="text-center">5</th>
                    <th class="text-center">6</th>
                    <th class="text-center">7</th>
                </tr>
            </thead>
            <tbody class="table-hover">`;

    let tr = "";
                for(let i = 0; i<9; i++){
                    let td = "";
                    for(let j=0; j<7; j++){
                        td += `<td class="text-left"><input class="input" id="input[${i}]-[${j}]" value="-" onblur=SetText(this) onclick=RemoveText(this)></input></td>`;
                    }
                    tr +=  `<tr>${td}</tr>`
                }
                   
    let closeTable =  `</tbody></table></div>`;

                table += tr + closeTable;

    return table;
}

// //INICIALIZA O ALGORITMO
// let c = adaline();

// const divCicly = `<div><span>${c}</span></div>`

// document.getElementById("content").innerHTML += divCicly;

//Função de treinamento
function adaline(){

    let desiredOutput = [ // saída desejada
        [ 1,-1,-1,-1,-1,-1,-1  ],
        [ -1, 1,-1,-1,-1,-1,-1 ],
        [ -1,-1,1,-1,-1,-1,-1 ],
        [ -1,-1,-1,1,-1,-1,-1],
        [ -1,-1,-1,-1,1,-1,-1],
        [ -1,-1,-1,-1,-1,1,-1],
        [ -1,-1,-1,-1,-1,-1,1],

        [ 1,-1,-1,-1,-1,-1,-1  ],
        [ -1, 1,-1,-1,-1,-1,-1 ],
        [ -1,-1,1,-1,-1,-1,-1 ],
        [ -1,-1,-1,1,-1,-1,-1],
        [ -1,-1,-1,-1,1,-1,-1],
        [ -1,-1,-1,-1,-1,1,-1],
        [ -1,-1,-1,-1,-1,-1,1],

        [ 1,-1,-1,-1,-1,-1,-1  ],
        [ -1, 1,-1,-1,-1,-1,-1 ],
        [ -1,-1,1,-1,-1,-1,-1 ],
        [ -1,-1,-1,1,-1,-1,-1],
        [ -1,-1,-1,-1,1,-1,-1],
        [ -1,-1,-1,-1,-1,1,-1],
        [ -1,-1,-1,-1,-1,-1,1]
    ]


    let quadraticError = 0; //erro quadrado
    let error = 0; //erro
    let biggestMistake = 1; //maior erro
    let minimumError = 0.0002; // erro minino / taxa de aprendizagem
    let cycles = 1; //ciclos

    while (biggestMistake > minimumError)
    {
        biggestMistake = 0;
        
        
        for (let i = 0; i < 21; i++)
        {
            for(let j = 0; j < 7; j++)
            {
                error = desiredOutput[i][j] - sum(i,j);

                for(let k = 0; k < 64; k++)
                {
                    weights[j][k] += deltaW(error, letters[i][k],minimumError);
                }
                quadraticError = QuadraticError(error);
                
                if(quadraticError > biggestMistake){
                    biggestMistake = quadraticError;
                }
            }         
        }

        cycles++;
    }
    trained = true;

    let messageFill = document.getElementById("message-fill");
    let pclycles = `<p>Total de Cliclos: ${cycles}</p>`

    let trainingresponse = document.getElementById("trainingresponse");
    trainingresponse.innerHTML = "SIM";
    trainingresponse.classList.remove("traininganswer-Red")
    trainingresponse.classList.add("traininganswer-Green")

    messageFill.innerHTML += pclycles;

}

//REALIZAR SOMATÓRIO
function sum(i,j)
{
    let sum = 0;

    for(let k = 0; k < 64; k++)
    {
        sum += letters[i][k] * weights[j][k];
    }
    return sum;
}

//CALCULA DELTAW
function deltaW(error,x,minimumError){ //erro, entrada, taxa de aprendizagem
    return error * x * minimumError;
}

//CALCULA A SYPNASE
function sypnase(x,w){
    return x*w;
}

//FUNÇÃO DE ATIVAÇÃO
function activation(vetor_grid){
    let sum2 = 0;
    let res = new Array(7);

    for (let i = 0; i < 7; i++){
        sum2 = 0;

        for (let j = 0; j < 64; j++){
            sum2 += vetor_grid[j] * weights[i][j];
        }

        if (sum2 >= 0)
            res[i] = 1;
        else
        res[i] = -1;
    }
    return res;
}


function calculateError(desiredOutput, sypnase){
        return desiredOutput - sypnase;
}

//CARREGAR PESOS
function WeigthLoad(){
    let vector = [];
    for(let i = 0; i < 63; i++){
        vector.push(0);
    }

    vector.push(bias);
    return vector;
}

//ERRO QUADRATICO
function QuadraticError(error){
    return (error * error)/2;
}


function RemoveText(event){
    if(event.value === "-")
        event.value = "";
}

function SetText(event){
    if(event.value !== "#"){
        event.value = "-";
        event.style.background = "#FFFFFF"
    }
    else{
        event.style.background = "#0FB379";
    }
}

function getOption(){
    let resp = [];
    let types = document.getElementsByClassName("itemtypes");
    let letters = document.getElementsByClassName("itemletters");

    for(let i=0; i < types.length; i++){
        let radiobutton = types[i].getElementsByClassName("fancy-radio");
        if(radiobutton[0].checked){
            let data = parseInt(radiobutton[0].value)
            if(data == 1){
                data += 6;
            }else if(data == 2){
                data += 12;
            }

            resp.push(data);
        }
    }

    for(let i=0; i < letters.length; i++){
        let radiobutton = letters[i].getElementsByClassName("fancy-radio");
        if(radiobutton[0].checked)
            resp.push(parseInt(radiobutton[0].value));
    }

    return resp;
}

function SetLetter(){
    let resp = getOption();

    let position = (resp[0] + resp[1]);
    let contj = 0

    if(resp.length > 1){
        for(let i = 0; i<9; i++){
            for(let j=0; j<7; j++){
               let teste = document.getElementById(`input[${i}]-[${j}]`);
               teste.value = letters[position][contj] == 1 ? "#":"-";
               if(teste.value == "#")
                    teste.style.background = "#0FB379";
                else{
                    teste.style.background = "#FFFFFF";
                }
               contj++;
            }
        }
    }else
        console.log("Selecione");


}

function getValues(){
    let values = [];
    let value;
    for(let i = 0; i<9; i++){
        for(let j=0; j<7; j++){
           let teste = document.getElementById(`input[${i}]-[${j}]`);
           value = teste.value == "#" ? 1 : -1;
            values.push(value);
        }
    }

    values.push(bias);

    return values;
}

function test(){
    const result = activation(getValues());
    if(trained){
        let found = [];
    
            for(let i = 0; i < 7; i++){
                if(result[i] == 1){
                    found.push(getLetter(i));
                }
            }

            document.getElementById("trainingresponsecontrol").classList.remove("traininganswer-Red")
            document.getElementById("trainingresponsecontrol").classList.add("traininganswer-Green")

            if(found.length == 1)
                document.getElementById("trainingresponsecontrol").innerHTML = `Letra reconhecida: ${found}`;
            else
                document.getElementById("trainingresponsecontrol").innerHTML = `Letras reconhecidas: ${found}`;

       }else{
           document.getElementById("trainingresponsecontrol").innerHTML += "É preciso treinar rede primeiramente"

        //    let messageFill = document.getElementById("message-fill");
        //    let pclycle qs = `<p>Total de Cliclos: ${cycles}</p>`
       
        //    let trainingresponse = document.getElementById("trainingresponse");
        //    trainingresponse.innerHTML = "SIM";
        //    trainingresponse.classList.remove("traininganswer-Red")
        //    trainingresponse.classList.add("traininganswer-Green")
       
        //    messageFill.innerHTML += pclycles;
       }
}


function getLetter(index){

    if(typeof index == "undefined")
        return null;

    const letter = ['A','B','C','D','E','j','k'];

    return letter[index];
}

