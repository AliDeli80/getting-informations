# IP & Location Information Retrieval  

This project retrieves geolocation information such as IP address, country, city, and more using two different APIs. It demonstrates how to effectively utilize external APIs to enhance your applications by gathering location-based data.  

## Features  

- Fetches user IP address.  
- Retrieves location data including country, region, city, and latitude/longitude coordinates.  
- Uses two APIs to provide more comprehensive data.  
- Simple and user-friendly interface for displaying information.  

## APIs Used  

1. **API 1:** [ipify](https://www.ipify.org/)  
   - This API provides basic functionalities for fetching user IP and location.  
  
2. **API 2:** [ipwhois](https://ipwhois.io/)  
   - This API offers additional details and data points to enhance the accuracy and completeness of the information retrieved.  

## Getting Started  

To get a local copy of the repository for development and testing purposes, follow these steps:  

### Prerequisites  

- Node.js (version)  
- npm (or Yarn)  

### Installation  

1. Clone the repository:  
   ```bash
      git clone https://github.com/AliDeli80/getting-informations.git  
2. Navigate to the project directory:
  ```bash
  cd getting-informations
 ```
3. Install the dependencies:
  ```bash
  npm install
```
or
  ```bash
   yarn install
```
  
## Running the Application
To run the application in development mode, use:
  ```bash
  npm start
```  
or
  ```bash
  yarn start
```
  
The application will be accessible at http://localhost:3000 in your browser.

## Example Usage
Upon loading the application, it automatically fetches and displays your IP address and corresponding location information.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch:
  ```bash
  git checkout -b feature/YourFeature
``` 
3. Commit your changes:
  ```bash
  git commit -m "Add some feature"
```  
4. Push to the branch:
  ```bash
  git push origin feature/YourFeature
```  
5. Open a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).
