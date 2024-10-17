const body=document.querySelector("body"),
   modeToggle=body.querySelector(".mode-toggle");
   sidebar = body.querySelector("nav");
   sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click",() =>{
      body.classList.toggle("dark");
});

sidebarToggle.addEventListener("click",()=> {
      sidebar.classList.toggle("close");
})

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Income', 'Expenses', 'Saving'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]);

  var options = {
    chart: {
      title: 'Budget Tracker',
      subtitle: 'Income, Expenses, and Saving: 2014-2017',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
  var chart1 = new google.charts.Bar(document.getElementById('columnchart_material1'));
  var chart2 = new google.charts.Bar(document.getElementById('columnchart_material2'));


  chart.draw(data, google.charts.Bar.convertOptions(options));
  chart1.draw(data, google.charts.Bar.convertOptions(options));
  chart2.draw(data, google.charts.Bar.convertOptions(options));

}