const alunos = [
    {name:"João",
    nota:5,
    turma:'1B'},
    {name:"Sofia",
    nota:9,
    turma:'1B'},
    {name:"Paulo",
    nota:6,
    turma:'2C'}
];

function alunosAprovados(arrAlunos,media){
    let aprovados = [];
    for (let aluno in arrAlunos) {
        const {nota,name} = arrAlunos[aluno];
        if (nota >= media) aprovados.push(name);
    }
    return aprovados;
}


console.log(alunosAprovados(alunos,6)); 