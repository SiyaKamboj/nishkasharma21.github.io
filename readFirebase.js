const firebaseConfig = {
  apiKey: "AIzaSyDGqssriWlEBfpEiuAx5wqmZefYi6e0t_0",
  authDomain: "lancerhacks-rl.firebaseapp.com",
  projectId: "lancerhacks-rl",
  storageBucket: "lancerhacks-rl.appspot.com",
  messagingSenderId: "187786374571",
  appId: "1:187786374571:web:647870cac99df8cb4436ee",
  measurementId: "G-LFF92JQN2P"
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

