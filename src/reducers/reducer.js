const initialState = {
  slide: [{
    id: 'BRAC03',
    value: 'BRAC03',
    stain: 'H_E'
  }],

  dataRN:[],
  dataBG:[]
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

    //console.log(action.data)
    //const firebaseData = firebase.database().ref('/');

    /*var i = 0;

    firebaseData.on("child_added", function(snapshot, prevChildKey) {

      newPost = snapshot.val();

      newCells[i] = { x: 5 , y: 5 };

      console.log(" data : " + newCells[0] );
      i = i + 1;

    });*/

    console.log(action.data)

    return {
      slide: [{
        id: 'BRAC03',
        value: 'BRAC03',
        stain: 'H_E'
      }],
      dataRN: action.dataRN,
      dataBG: action.dataBG
    };

    default:
      return state
  }
}
