

#include <ESP8266WiFi.h>
 
const char* ssid = "iPhone da Camis";
const char* password = "vamolaaa";
 
int ledPinr = 14; 

WiFiServer server(80);
 
void setup() {
  Serial.begin(115200);
  delay(10);
 
  pinMode(ledPinr, OUTPUT);
  digitalWrite(ledPinr, LOW);

   
  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
 
  // Start the server
  server.begin();
  Serial.println("Server started");
 
  // Print the IP address
  Serial.print("Use this URL to connect: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
 
}
 
void loop() {
  // Check if a client has connected
  WiFiClient client = server.available();
  if (!client) {
    return;
  }
 
  // Wait until the client sends some data
  Serial.println("new client");
  while(!client.available()){
    delay(1);
  }
 
  // Read the first line of the request
  String request = client.readStringUntil('\r');
  Serial.println(request);
  client.flush();
 
  // Match the request
 
  
  
  if (request.indexOf("/Red") != -1)  {
    digitalWrite(ledPinr, HIGH);
    
    
    
  }
  if (request.indexOf("/Green") != -1)  {
    digitalWrite(ledPinr, LOW);
       
    
  }
    

 
// Set ledPin according to the request
//digitalWrite(ledPin, value);
 
  // Return the response
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.println(""); //  do not forget this one
  client.println("<!DOCTYPE HTML>");
  client.println("<html><head><META HTTP-EQUIV=""refresh""CONTENT=""5"">\n");  
  client.println("<title>FemLED</title></head>");  
  client.println("<body>\n");   
  client.println("<h1>FemLED</h1>");  
  client.println("<h3>Controle sua FemLED</h3>"); 
  
 
  client.print("");//
 
   
   
 
    client.print("led");
  
  client.println("<br><br>");
  client.println("<a href=\"/Red\"\"><button>ON </button></a>");
  client.println("<a href=\"/Green\"\"><button>OFF </button></a>");
  client.println("</html>");
 
  delay(1);
  Serial.println("Client disonnected");
  Serial.println("");
 
}
