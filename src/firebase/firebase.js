import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID
  };


  firebase.initializeApp(config);

  const database =  firebase.database();



    export { firebase, database as default};














































    // database.ref('expenses').on('child_removed', (snapshot) => {

    //   console.log(snapshot.key, snapshot.val());
    // });

    // database.ref('expenses').on('child_changed', (snapshot) => {

    //   console.log(snapshot.key, snapshot.val());
    // });





















    // database.ref('expenses').push({
    //   description:'Rent',
    //   note:'This is this month rent',
    //   amount:343,
    //   createdAt:10000
    // });


    // database.ref().on('value', snapshot => {
    //   const val = snapshot.val();
  
    //   console.log(val);
    // });

    // database.ref('expenses/-LTMt1T89b7RBT_reXu3').remove();


      // database.ref('expenses').once('value').then((snapshot)=> {

      //   const expenses = [];

      //   snapshot.forEach(childSnapshot => {

      //       expenses.push({
      //             id:childSnapshot.key,
      //             ...childSnapshot.val()
      //       });
      //   });
      //     console.log(expenses);
      // });


        // database.ref('expenses').on('value', (snapshot) => {

        //     const expenses = [];

        //     snapshot.forEach((childSnapshot) => {
        //         expenses.push({
        //             id:childSnapshot.key,
        //             ...childSnapshot.val()
        //         });
        //     });

        //     console.log(expenses);
        // });





  // database.ref().on('value', (snapshort) => {

  //     const val = snapshort.val();

  //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // });







  // database.ref()
  // .once('value')
  // .then((snapshort) => {
  //   //feching the data from database
  //   const val = snapshort.val();
  //   console.log(val);
  // }).catch((err) => {
  //   console.log(`Data filed to fetch from database ${err}`);
  // });


  // database.ref().set({
  //   name: 'chikwado okoye',
  //   stressLevel:6,
  //   job:{
  //     title:'software dev',
  //     company:'rad5 tech hub'
  //   },
  //   age:25,
  //   isSingle:false,
  //   location: {
  //       city: 'Aba',
  //       state:'Abia state'
  //   }
  // });


  // database.ref('attributes').set({
  //     height:34,
  //     weight:100
  // }).then(() => {
  //     console.log("Data saved!");
  // }).catch((error)=> {
  //     console.log(`saving data to firebase filed ${error}`); 
  // });

  
  // database.ref().update({
   
  //   stressLevel:9,
  //   'job/company':'IG HUB',
  //   'location/city':'Tennate Road'

  // }).then(() => {
  //   console.log("Database was Updated");
  // }).catch((err) => {
  //   console.log('filed', err);
  // });