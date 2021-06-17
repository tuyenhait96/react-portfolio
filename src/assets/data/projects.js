import { v4 as uuidv4 } from 'uuid';
import summaImg from '../images/Summa.PNG';
import weeIgm1 from '../images/Wee_1.PNG';
import weeImg2 from '../images/Wee_2.PNG';
import weeImg3 from '../images/Wee_3.PNG';
import viettinbankDashboard from '../images/Viettinbank_1.PNG';
import viettinbankCounter from '../images/Viettinbank_2.PNG';
import vinmart from '../images/vinmart.PNG';
import accessControl from '../images/AccessControl.PNG';
import wincalImg1 from '../images/Wincal_1.svg';

const projects = [
  {
    id: uuidv4(),
    name: 'Summa',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: summaImg,
  },
  {
    id: uuidv4(),
    name: 'Wee Phone',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: weeIgm1,
  },
  {
    id: uuidv4(),
    name: 'Wee Back Office',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: weeImg3,
  },
  {
    id: uuidv4(),
    name: 'Wee',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: weeImg2,
  },
  {
    id: uuidv4(),
    name: 'Viettinbank Dashboard',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: viettinbankDashboard,
  },
  {
    id: uuidv4(),
    name: 'Viettinbank Counter',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: viettinbankCounter,
  },
  {
    id: uuidv4(),
    name: 'Vinmart',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: vinmart,
  },
  {
    id: uuidv4(),
    name: 'Access Control',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: accessControl,
  },
  {
    id: uuidv4(),
    name: 'Wincal-X',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: wincalImg1,
  },
  {
    id: uuidv4(),
    name: 'Wincal-X Dashboard',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: wincalImg1,
  },
];

export default projects;
