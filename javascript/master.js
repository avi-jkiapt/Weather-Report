//drizzle https://cdn.pixabay.com/photo/2013/12/09/13/45/waterfall-225961_960_720.jpg
//thunderstorm https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_960_720.jpg
//rain http://images.all-free-download.com/images/graphiclarge/drops_rain_glass_220210.jpg
//snow http://wallpaper-gallery.net/images/snow-wallpapers/snow-wallpapers-1.jpg
//fog http://images.all-free-download.com/images/graphiclarge/winter_fog_200960.jpg
//clear https://previews.123rf.com/images/tolokonov/tolokonov1208/tolokonov120800059/14889692-Sky-and-ocean-Abstract-natural-backgrounds-Stock-Photo.jpg
//cloudy https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579_960_720.jpg
$(function(){
  var C=false;
  var apiData;
  backgroundImg=['https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_960_720.jpg',
        'https://cdn.pixabay.com/photo/2013/12/09/13/45/waterfall-225961_960_720.jpg',
                 'http://images.all-free-download.com/images/graphiclarge/drops_rain_glass_220210.jpg','http://wallpaper-gallery.net/images/snow-wallpapers/snow-wallpapers-1.jpg','http://images.all-free-download.com/images/graphiclarge/winter_fog_200960.jpg','https://previews.123rf.com/images/tolokonov/tolokonov1208/tolokonov120800059/14889692-Sky-and-ocean-Abstract-natural-backgrounds-Stock-Photo.jpg','https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579_960_720.jpg'

  ]
  function displayTemp(F,C){
    if(C)
      return Math.round((F-32)*(5/9)) +'&deg; C';
    return Math.round(F) +'&deg; F';

  }

  function render(data,C){
    var currentWeather=data.weather[0].description;
    var currentTemp=displayTemp(data.main.temp,C);
    var icon=data.weather[0].icon;

    $('#currentTemp').html(currentTemp);
    $('#currentWeather').html(currentWeather);

    var apiIcon='https://openweathermap.org/img/w/' + icon +'.png';
    $('#currentTemp').prepend('<img src=' +apiIcon +'>');

  }




  $.getJSON('https://freegeoip.net/json/').done(function(location){

  //  console.log(location.city);

    $('#country').html(location.country_name);
    $('#city').html(location.city);
    $('#latitude').html(location.latitude);
    $('#longitude').html(location.longitude);

    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+location.latitude+'&lon='+location.longitude+'&units=imperial&appid=d99414c365ff0845c676431520203ea0', function(data){

      apiData=data;
      render(apiData,C);
     //$('#currentTemp').html(apiData.main.temp);
  //   console.log(apiData);
    //  $('#currentTemp').html(apiData.)
      $('#toggle').click(function(){
        C=!C
        render(data,C);
        })


        var id=data.weather[0].id;
          var  bgIndex;
           var  backgroundId= [299,499,599,699,799,800];

        backgroundId.push(id);

        bgIndex=backgroundId.sort().indexOf(id);
       // console.log(backgroundId);
        $('body').css('background-image', 'url(' +backgroundImg[bgIndex]+')');







    })
  })


})
