# Day 2: Open-Meteo Weather API 🌦️  

## API Name:  
**Open-Meteo**  

## Purpose of API:  
Open-Meteo is a **completely free, open-source weather API**. It provides **current weather, forecasts, historical weather, and climate data** for any location worldwide. Best of all, it’s **no API key required** — perfect for **students, hobbyists, and startups** building weather-based apps.  

---

## Steps to Use the API:  
Open-Meteo does **not require an API key**. You can directly call its endpoints with latitude & longitude values.  

**Example Endpoint:**
[https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&hourly=temperature_2m](https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&hourly=temperature_2m)
---

## Cost-Saving Comparison:  

| Feature / API        | Paid Weather APIs (e.g., OpenWeatherMap) | Open-Meteo (Free) |
|----------------------|------------------------------------------|-------------------|
| Current Weather      | Paid, limited free tier                  | Free              |
| Forecast (Hourly/Daily) | Paid after quota                       | Free              |
| Historical Data      | Paid add-on                              | Free              |
| Cost (100k requests/month) | ~₹50,000/month                      | ₹0/month          |
| API Key Required     | Yes                                      | No                |

**Takeaway:** Using Open-Meteo instead of paid APIs can save you **₹50,000/month**, making it a **must-use for weather-based apps**. 💰  

---

## Python Code Snippet:  

```python
import requests

url = "https://api.open-meteo.com/v1/forecast"
params = {"latitude": 19.07, "longitude": 72.87, "hourly": "temperature_2m"}
response = requests.get(url, params=params).json()

print("Hourly Temperatures:", response["hourly"]["temperature_2m"][:5])
```

### Output : 
```
Hourly Temperatures: [27.3, 27.1, 26.9, 26.7, 26.5]
```

---

## Javascript Code Snippet:  

```javascript
fetch("https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&hourly=temperature_2m")
  .then(res => res.json())
  .then(data => console.log("Hourly Temperatures:", data.hourly.temperature_2m.slice()

```

### Output : 
```
Hourly Temperatures: [27.3, 27.1, 26.9, 26.7, 26.5]
```

---

## 🚀 Project Ideas using Open-Meteo API

1. **Weather Dashboard** – Display live temperature, humidity, and forecasts for multiple cities.  
2. **Travel Planner** – Suggest the best travel dates and destinations based on weather conditions.  
3. **Farming Assistant** – Provide rainfall forecasts and temperature trends to help farmers plan crops.  
4. **Outdoor Activity Planner** – Recommend the best times for sports, hiking, or events.  
5. **Smart Home Automation** – Adjust AC, fans, or lights automatically based on live weather.  
6. **Disaster Alert System** – Warn users of storms, heatwaves, or heavy rainfall in advance.  
7. **Clothing Suggestion App** – Suggest outfits based on daily weather (e.g., carry an umbrella).  
8. **Energy Optimization Tool** – Predict electricity usage (AC/heating) based on weather trends.  
9. **Logistics & Delivery Dashboard** – Optimize routes and timings by avoiding bad weather.  
10. **Historical Weather Analyzer** – Show past weather data trends for research or business insights.  



