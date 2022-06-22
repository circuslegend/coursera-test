
var dec=false;

document.addEventListener("DOMContentLoaded",
      function (event) {  
        dec=true;
        document.querySelector("#hidden")
                  .innerHTML = '<span id="choose">ДОБРО ПОЖАЛОВАТЬ!<br>ВЫБЕРИТЕ КАТЕГОРИЮ</span>';

});
      

      /////////// Choosing category and generating the random word from the database /////////

      var Cat = function (id) {
         Gen();
        document.querySelector("#catty")
                  .innerHTML = '<span id="txtt">КАТЕГОРИЯ: ' +  
                  document.querySelector("#"+id)
                  .innerHTML.toUpperCase() + "</span>" ;
        document.querySelector("#hiddenID")
                  .innerHTML = id;                 
        $ajax.sendGetRequest("data/data.json", 
            function (request) {
              var arr = []; 
              if (id=="food") {arr = request.food;} else 
              if (id=="animals") {arr = request.animals;} else 
              if (id=="math") {arr = request.math;} else 
              if (id=="furniture") {arr = request.furniture;} else 
              if (id=="plants") {arr = request.plants;} else
              
               console.log(arr);
              function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }

          var randomArrayIndex = randomIntFromInterval(0,arr.length-1);
          const word = arr[randomArrayIndex].toUpperCase();
          console.log("word :" + word);
          document.querySelector("#words")
                  .innerHTML = word;
          var hiddenWord="";
              
          for ( var i=0; i<word.length; i++){
            if (word[i]!=" ") { hiddenWord+="_"; } else { hiddenWord+=" "; }
          }

          document.querySelector("#hidden")
                  .innerHTML = hiddenWord;
                document.querySelector("#hiddenwords")
                  .innerHTML = hiddenWord;
        }, true); 
        }

         ///////// END /////////


        //////// Generating buttons ///////// 

        var Gen = function () {
          dec =false;
            var symbols = [];
            var check=false;
            counterjpg = 0;
            document.getElementById("photo").src="images/"+counterjpg.toString()+".jpg";
                var k=0;
                for ( var i=1072; i<1104; i++) // generate array of letters
                {
                  if ( (i==1078) && (check===false)) {symbols[k]="ё"; i--; check=true;  } else {symbols[k]=String.fromCharCode(i);} 
                  k++;
                }

                  var temp="";
                  var message="";
                  for ( var i=0; i<30; i++) // create buttons
                  { 
                    temp="<button id={{insex}} class={{classi}} type={{typ}} onclick={{click}} enabled><p>{{name}}</p></button>";
                    temp = insertIn (temp,"insex",'"'+symbols[i]+'"');  
                    temp = insertIn (temp,"name",symbols[i]);
                    temp = insertIn (temp,"classi",'"'+"btn btn-outline-dark rounded"+'"');
                    temp = insertIn (temp,"typ",'"'+"button"+'"');
                    temp = insertIn (temp,"click",'"'+"myFunction(this.id)"+'"');
                    message+=temp; 
                  }
                  message+='<div class="container"><div class="row"><div class="col"></div><div class="col">' + 
                  '<button id="э" class="btn btn-outline-dark rounded" type="button" onclick="myFunction(this.id)" enabled><p>э</p></button>'+ 
                  '<button id="ю" class="btn btn-outline-dark rounded" type="button" onclick="myFunction(this.id)" enabled><p>ю</p></button>' + 
                  '<button id="я" class="btn btn-outline-dark rounded" type="button" onclick="myFunction(this.id)" enabled><p>я</p></button>' +
                  '</div><div class="col">'+'</div></div></div>';
                  InsertHTML("#insert",message);
                  // console.log(message);
                            
        ///////// END /////////
      }


    //////// Onclick events /////////

    	var counterjpg = 0;
    	var final=false;
       		function myFunction(clicked_id) {
       			var checked = false;
       			var word1=document.querySelector("#words").innerHTML;
       			var hiddenWord1=document.querySelector("#hiddenwords").innerHTML;
        		var value = clicked_id.toUpperCase();
        		// console.log("letter: " + value + "  word: " + word1 + "  hiddenWord: " + hiddenWord1 );
        			for (var i=0; i<word1.length; i++) {
        				if (word1[i]==value) { checked=true; hiddenWord1=hiddenWord1.replaceAt(i, value); } 
        		}
        		console.log(hiddenWord1);
        		document.querySelector("#hidden")
                	.innerHTML = hiddenWord1;
                document.querySelector("#hiddenwords")
                	.innerHTML = hiddenWord1;
        		if (checked==true) {document.getElementById(clicked_id).className +=" disabled disabled2"; } else 
        		{ document.getElementById(clicked_id).className +=" disabled"; if(counterjpg<7) { counterjpg++; 
        			document.getElementById("photo").src="images/"+counterjpg.toString()+".jpg"; } else {final = true; }   }

        				//////// Final Screens ///////// 



    							if (final==true) { var falseMessage = 
    								"<div class=" + ' "container" id="aboba">' +
        					'<img id="photo3" class="img-fluid rounded mx-auto d-block" ' + 
        					' alt="пеинт виселица" src="images/7.jpg"></img>' + 
                   '<h2 id="hidden" class="text-center"> Слово: ' + word1 + '</h2>' 
    								+ '<h2 id="lose"> К СОЖАЛЕНИЮ, ВЫ ПРОИГРАЛИ :(( </h2>';
    							falseMessage+='<div id="container"><img id="photolose" class="img-fluid rounded mx-auto d-block" ' + 
    							'alt="lose" src="final-gifs/lose.gif">  ' + '</img></div></div>';	
    									InsertHTML("#aboba1",falseMessage);
    							}		

                  if (hiddenWord1==word1) { 
                    final=true;
                    var victoryMessage = "<div class=" + ' "container" id="aboba">' +
                  '<img id="photo3" class="img-fluid rounded mx-auto d-block" ' + 
                  ' alt="пеинт виселица" src="images/' + counterjpg + '.jpg"></img>' 
                    victoryMessage +=
                      '<h2 id="finish" class="text-center"> Слово: ' + word1 + '</h2>';
                    victoryMessage += 
                    "<h2 id="+'"congrats"> ПОЗДРАВЯЛЕМ С ПОБЕДОЙ!!! </h2>';
                    victoryMessage+='<img id="photolose" class="img-fluid rounded mx-auto d-block" ' + 
                  'alt="victory" src="final-gifs/vic.gif">  ' + '</img></div></div>'; 
                      InsertHTML("#aboba1",victoryMessage); }

    									
    					///////// END /////////
        		
        	}

    ///////// END /////////



    //////// Inserting and helpful functions /////////  

        	var InsertHTML = function ( html, insertion) {
        		document.querySelector(html)
                	.innerHTML = insertion;
        	}

        	var insertIn = function (string, propName, propValue) {
  				var propToReplace = "{{" + propName + "}}";
  					string = string.toString().replace(new RegExp(propToReplace, "g"), propValue);
  				return string;
			};

			String.prototype.replaceAt = function(index, replacement) {
  					return this.substr(0, index) + replacement + this.substr(index + replacement.length);
			}

 
    ///////// END /////////


    ///////// Second time generating function, because author - daun /////////

    // ya razobralsa cock sdelat i tut bolsche niche net. Poluchaetsa ne daun

    ///////// END /////////


    ///////// Pravila dlya dodikov /////////
    var pizarella=false;
    var Govno = function() {
            pizarella=true;
              $ajax.sendGetRequest("data/pravila.txt", 
            function (request) {
              var message3 = '<div class="container-fluid">' + '<img id="cover" class="img-fluid rounded mx-auto d-block" ' + 
                  ' alt="пеинт виселица" src="images/cover.jpg"></img>' 
              + '<p id="pravila">';
              message3+= request;
              message3+='</p></div>';
              console.log(message3);
              InsertHTML("#aboba1",message3);
        }, false);
    }

    ///////// END /////////

    ///////// Refresh function /////////
    var Refresh = function() {
      if ( ( final==false ) && (pizarella==false) && (dec==false) ) {
      Cat(document.querySelector("#hiddenID")
                  .innerHTML); } else {
        location. reload()
      }
    }
    //////// END /////////


 // document.getElementById("myImageId").src="newSource.png"; // типо изменить источник изображения
// document.getElementById('id').className +=" my-class" // добавляем класс элементу


// <div class="col-1" ><button id="э" class="btn btn-outline-dark rounded" onclick="myFunction(this.id)" enabled><p>э<p></button></div>
// <div class="col-1" ><button id="ю" class="btn btn-outline-dark rounded" onclick="myFunction(this.id)" enabled><p>ю</p></button></div>
// <div class="col-1" ><button id="я" class="btn btn-outline-dark rounded" onclick="myFunction(this.id)" enabled><p>я</p></button></div>