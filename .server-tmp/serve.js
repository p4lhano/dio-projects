const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Servidor iniciado! Porta 3100');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSERS_TEST);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSERS_TEST ? Math.max.apply(null, COURSERS_TEST.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSERS_TEST.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSERS_TEST.findIndex(courseIterator => courseIterator.id === courseId);
  COURSERS_TEST[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSERS_TEST.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = Number( request.params['id'] );
  COURSERS_TEST = COURSERS_TEST.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

//  var COURSERS_TEST = [
//     {
//         id: 1,
//         name: 'Angular: CLI',
//         releaseDate: 'November 2, 2019',
//         description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
//         duration: 120,
//         code: 'XLF-1212',
//         rating: 3,
//         price: 12.99,
//         imageUrl: '/assets/images/cli.png',
//     },
//     {
//         id: 2,
//         name: 'Angular: Forms',
//         releaseDate: 'November 4, 2019',
//         description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
//         duration: 80,
//         code: 'DWQ-3412',
//         rating: 3.5,
//         price: 24.99,
//         imageUrl: '/assets/images/forms.png',
//     },
//     {
//         id: 3,
//         name: 'Angular: HTTP',
//         releaseDate: 'November 8, 2019',
//         description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
//         duration: 80,
//         code: 'QPL-0913',
//         rating: 4.0,
//         price: 36.99,
//         imageUrl: '/assets/images/http.png',
//     },
//     {
//         id: 4,
//         name: 'Angular: Router',
//         releaseDate: 'November 16, 2019',
//         description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
//         duration: 80,
//         code: 'OHP-1095',
//         rating: 4.5,
//         price: 46.99,
//         imageUrl: '/assets/images/router.png',
//     },
//     {
//         id: 5,
//         name: 'Angular: Animations',
//         releaseDate: 'November 25, 2019',
//         description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
//         duration: 80,
//         code: 'PWY-9381',
//         rating: 5,
//         price: 56.99,
//         imageUrl: '/assets/images/animations.png',
//     }
// ];
var COURSERS_TEST =  [
    {
      id: 1,
      name: "ADS",
      code: 1,
      durationInSemester: 5,
      price: 123
    },{
      id: 2,
      name: "MED",
      code: 2,
      durationInSemester: 10,
      price: 987
    },{
      id: 3,
      name: "Eng.Civil",
      code: 3,
      durationInSemester: 8,
      price: 564
    }
  ];
  