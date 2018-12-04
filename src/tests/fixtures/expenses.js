import moment from 'moment';

const expenses = [{

    id:'1',
    description:'uber',
    note:'',
    amount:195,
    createdAt:0
},{

    id:'2',
    description:'Rent',
    note:'',
    amount:109500,
    createdAt:moment(0).subtract(4, 'days').valueOf()
}, {

    id:'3',
    description:'ubr',
    note:'',
    amount:100,
    createdAt:moment(0).add(4,'days').valueOf()
}]


export default expenses;