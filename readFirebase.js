const firebaseConfig = {
  apiKey: "AIzaSyC1CbFa6LBLPDVkCyE3ZtUqhR6U8tryo94",
  authDomain: "lancerhacks4.firebaseapp.com",
  projectId: "lancerhacks4",
  storageBucket: "lancerhacks4.appspot.com",
  messagingSenderId: "943030832844",
  appId: "1:943030832844:web:5a91260eba756617957c69",
  measurementId: "G-KQKW0XTFP9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database= firebase.firestore();

function read(theme){
  //Reading from database: 
  var count = 0;  //keeps track of how many documents we have for a specific field
database.collection("Individual Photos").where("photoTheme", "==", theme)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            var info=doc.data();
            var userUID= doc.id;
            var theme=info.photoTheme;
            var url=info.imageURL;
            //append info into the code
            var paraNew = document.createElement("div");
            //paraNew.setAttribute("class", "AllProjects_Div");
            var codeBlock2 =
          ` <div class="` + userUID+ ` outerDivForEach">
        <img class="` + userUID+ ` indivNFT" src="`+ url + `" alt="` + theme + ` Photo">
        </div> `;
        paraNew.innerHTML = codeBlock2 ;
        //var placeToAppend= divToAppend+theme;
        if (theme=="Animals"){
            divToAppend.appendChild(paraNew);
        }
        else if (theme=="Climate"){
          divToAppendClimate.appendChild(paraNew);
        }
        else if (theme=="Food"){
          divToAppendFood.appendChild(paraNew);
        }
        else{
          divToAppendOther.appendChild(paraNew);
        }
         
        count=count+1;
        
        });
        if (count<=28){
          read(theme);
        }
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

