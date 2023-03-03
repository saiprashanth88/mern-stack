<script>

        const weatherApi = {
            key: "eb7a2d4a5a9b284fe54b7bb547238443",
            baseUrl: "https://api.openweathermap.org/data/2.5/weather",
        }
        const searchBox = document.getElementById("searchBox");
        searchBox.addEventListener("keypress", function(event){
            if(event.keyCode == 13){
                getWeatherReport(searchBox.value);
            }
        });

        function getWeatherReport(city) {

            //  https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=eb7a2d4a5a9b284fe54b7bb547238443&unit=metric
            fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
                .then(function (response) { return response.json() })
                .then(function (response) {
                    showWeatherReport(response);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }

        function showWeatherReport(curWeather){
            let city = document.getElementById("city");
            let date = document.getElementById("date");
            let image = document.getAnimations("image");
            let temp = document.getElementById("temp");
            let feel = document.getElementById("feel");
            let weather = document.getElementById("weather");
            let minmaxTemp = document.getElementById("minmaxTemp");
            let humidity = document.getElementById("humidity");
            let pressure = document.getElementById("pressure");
            let visibility = document.getElementById("visibility");
            let windspeed = document.getElementById("windspeed");


            console.log(curWeather);

            city.innerHTML = curWeather.name;

            let todayDate = new Date().toDateString();
            date.innerHTML = todayDate;
            image.src = manageImage(curWeather.weather[0].main);
            temp.innerHTML = Math.round(curWeather.main.temp) + "°C";
            feel.innerHTML = `(Feels Like ${Math.round(curWeather.main.feels_like)}°C)`;
            weather.innerHTML = curWeather.weather[0].main;
            minmaxTemp.innerHTML = `${Math.floor(curWeather.main.temp_min)}°C(min) / ${Math.ceil(curWeather.main.temp_max)}°C(max)`;

            humidity.innerHTML = `<span>Humidity</span> ${curWeather.main.humidity}`;
            pressure.innerHTML = `<span>Pressure</span> ${curWeather.main.pressure}`;
            visibility.innerHTML = `<span>Visibility</span> ${curWeather.visibility}`;
            windspeed.innerHTML = `<span>Wind Speed</span> ${curWeather.wind.speed}`;

        }


        function manageImage(weatherType) {
            if (weatherType === 'Clear') {

                return "/public/images/clear.jpg";

            } else if (weatherType === 'Smoke') {

                return "/public/images/smoke.jpg";

            } else if (weatherType === 'Haze') {

                return "/public/images/haze.jpg";

            } else if (weatherType === 'Rain') {

                return "/public/images/rain.jpg";

            } else if (weatherType === 'Snow') {

                return "/public/images/snow.jpg";

            } else if (weatherType === 'Thunderstorm') {

                return "/public/images/thunderstorm.jpg";

            } else if (weatherType === 'Mist') {

                return "/public/images/mist.jpg";

            } else if (weatherType === 'Clouds') {

                return "/public/images/clouds.jpg";

            }
            else {
                return "/public/images/clear.jpg";
            }
            return "/public/images/clouds.jpg";
        }


    </script>
