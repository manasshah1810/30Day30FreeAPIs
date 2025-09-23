from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="geo_example")

location_name = "Pune"
location = geolocator.geocode(location_name)

if location:
    print(f"Location: {location_name}")
    print(f"Latitude: {location.latitude}")
    print(f"Longitude: {location.longitude}")
else:
    print("Location not found.")

"""Output :
Location: Pune
Latitude: 18.5213738
Longitude: 73.8545071
"""

