import firebase from 'firebase/app'

const initialState = {
  slide: [{
    id: 'BRAC03',
    value: 'BRAC03',
    stain: 'H_E'
  }],
  data:[
      {x: 20022020, y: 80},
      {x: 21022020, y: 100},
      {x: 22022020, y: 140},
      {x: 23022020, y: 200},
      {x: 24022020, y: 280},
      {x: 25022020, y: 350},
      {x: 26022020, y: 480},
      {x: 27022020, y: 720},
      {x: 28022020, y: 950},
      {x: 30022020, y: 1500}
    ]

};

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_CONTACT':
    return Object.assign({}, state, {
      contacts: [
        ...state.contacts,
        action.payload
      ]
    });

    case "ActualSlide":
    console.log("case ActualSlide id : " + action.id)

    return {
      slide: [{
        id: action.id,
        value: action.value,
        stain: 'H_E'
      }],
      vehicle: "It is a Car"
    };

    case "CHART":
    const newCells = {[]};
    let newPost;
    const firebaseData = firebase.database().ref('/');

    var i = 0;

    firebaseData.on("child_added", function(snapshot, prevChildKey) {

      newPost = snapshot.val();
      newCells[i] = { x: 5 , y: 5 };

      console.log(" data : " + newCells[0] );
      i = i + 1;

    });



    return {
      slide: [{
        id: 'BRAC03',
        value: 'BRAC03',
        stain: 'H_E'
      }],
      data: newCells
    };

    default:
      return state
  }
}
