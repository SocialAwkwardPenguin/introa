//plays music    
//myAudio is declared at a global scope, so it doesn't get garbage collected.
myAudio = new Audio('Mario.mp3');
myAudio.loop = true;
myAudio.play();
    
var imageArray = [
    "Rowlett.jpg",
    "RowlettBush.jpg",
    "Dab.jpg",
    "Eggs.png",
    "Blizzard.jpg",
    "ProtectDaBird.jpg",
    "StrongRowlett.jpg",
    "Praise.jpg",
    "Bro.jpg",
    "aaaaa.png",
    "Bows.png",
    "RealRowlett.jpg",
    "BeaverBird.png",
    "HunkOfMan.jpg_large",
];

var currentIndex = 0;

function renderImage() {
    if (currentIndex < 0) {
        currentIndex = imageArray.length - 1;
    } else if (currentIndex >= imageArray.length) {
        currentIndex = 0;
    }
    Counter()

    $('#thePhoto').attr('src', imageArray[currentIndex]);
}
                  
renderImage();

    
    $('#NextButton').on('click', function() {
        //this is what happens when it is clicked!
        currentIndex++;
        renderImage();
    })
        
    $('#BackButton').on('click', function() {
        //this is what happens when it is clicked!
        currentIndex--;
        renderImage();
    })

    $('#ToStartButton').on('click', function() {
        //this is what happens when it is clicked!
        currentIndex = 0;
        renderImage();

    });
    
var name = prompt("What's your name?");
var outputString = ("Happy New Year, " + name + "!");
var outputString2 = ("Here are cute pictures of Rowlett to hold you over!");
$("h1").html(outputString);



// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
          

        // Create the data table.
function drawChart() { 
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Thing');
    data.addColumn('number', 'Minutes');
    data.addRows([
        ['Eating Pizza', 20],
        ['Eating Cake', 6],
        ['Playing the Sega Saturn', 27],
        ['Screaming like a little girl', 14],
        ['Destroying things within the room', 23],
        ['Dabbing', 90]
    ]);


        // Set chart options
        var options = {
            'title':'How I Partied at New Years Day',
            'width':600,
            'height':400,
            'backgroundColor': '#E8E595',
            'colors': ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
        };


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
}
function Counter() {
    console.log(currentIndex)
    $("#Counter").html("Picture Number: " + (currentIndex + 1));
}
