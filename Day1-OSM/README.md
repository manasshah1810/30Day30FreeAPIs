# Day 1: OpenStreetMap API 🗺️

## API Name:
**OpenStreetMap (OSM)**

## Purpose of API:
OpenStreetMap is a **completely free, open-source map data platform**. It provides geolocation, routing, and map visualization capabilities. Ideal for **students, hobbyists, and startups** who want to integrate maps into their projects **without paying for Google Maps or other paid services**.  

---

## Steps to Use the API:
OpenStreetMap does **not require an API key**. You can directly make HTTP requests to their endpoints.   

---

## Cost-Saving Comparison:

| Feature / API        | Google Maps (Paid)       | OpenStreetMap (Free)       |
|---------------------|-------------------------|----------------------------|
| Map Data            | Paid, limited free tier | Completely free            |
| Cost (10,000 requests/month) | ₹80,000/month          | ₹0/month                   |
| API Key Required    | Yes                     | No                         |
| Use Cases           | Geolocation, routing, mapping | Same as Google Maps   |
| Restrictions        | Free tier limits requests | No limits                  |

**Takeaway:** Using OpenStreetMap instead of Google Maps can save you **₹80,000/month**, making it ideal for **student projects, prototypes, and startups**. 💰  

---

## Python Code Snippet:

```python
import requests

url = "https://nominatim.openstreetmap.org/search"
params = {"q": "Mumbai, India", "format": "json"}
response = requests.get(url, params=params).json()

print(response[0]['display_name'], response[0]['lat'], response[0]['lon'])
```

### Output:
```python
Mumbai, Maharashtra, India 19.075984 72.877656
```

---

## Javascript Code Snippet:

```javascript
fetch("https://nominatim.openstreetmap.org/search?q=Mumbai, India&format=json")
  .then(res => res.json())
  .then(data => console.log(data[0].display_name, data[0].lat, data[0].lon));
```

### Output:
```javascript
Mumbai, Maharashtra, India 19.075984 72.877656
```

---
## Project Ideas
- Interactive city maps
- Location-based event apps
- Delivery & routing dashboards
- Location-based notifications or reminders
- Travel guides with geolocation