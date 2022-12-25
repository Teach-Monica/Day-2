Assignment Day-2:

Question-1:

Difference between document and window object-

Answer:

-Firstly Window object and Document object they are not the same.
-Well, the document object is present inside the Window object, the window is the first thing that gets loaded into the browser.
-This window object has the majority of the properties like length, innerWidth, innerHeight, name etc.

window->documnent(documnet gets loaded into window object)=window.document.{property}

-The window object represents the current browser window. It provides an access to all the browser API, DOM, console and javascript runtime.
Using this you can access to DOM that helps you to manipulate the HTML and CSS of the web page.That means if you want to access a property for the 
window it is window.property.

eg: Window object

Syntax:
window.property_name;

>>window.Closed;
//It holds a Boolean value that represents whether the window is closed or not.

window.console;
output-
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
//It returns a reference to the console object which provides access to the browser’s debugging console.

window.defaultStatus;
output-
//It is used to define the default message that will be displayed in the status bar when no activity is carried on by the browser.

window.controllers;
output-
//It returns the XUL controller objects for the current Chrome window.

window.customElements;
output-
CustomElementRegistry {}
//It returns a reference to the CustomElementRegistry object, which can be used to register new custom elements and also get information about already registered custom elements.

window.crypto;
output-
Crypto {subtle: SubtleCrypto}
//It returns the browser crypto object.

window.devicePixelRatio;
output-
1.5
//It returns the ratio between physical pixels and device-independent pixels in the current display.

window.Document;
output-
ƒ Document() { [native code] }
//It returns a reference to the document object of that window.

window.DOMMatrix;
output-
ƒ DOMMatrix() { [native code] }
//It returns a reference to a DOMMatrix object, which represents 4×4 matrices, suitable for 2D and 3D operations.

window.frames[];
output-
//It represents an array that contains all the frames of a given window.

window.DOMPoint;
output-
ƒ DOMPoint() { [native code] }
//It returns a reference to a DOMPoint object, which represents a 2D or 3D point in a coordinate system.

window.History;
output-
//It provides information on the URLs visited in the current window.

window.Length;
output-
//It represents the number of frames in the current window.

window.DOMRect;
output-
//It returns a reference to a DOMRect object, which represents a rectangle.

window.fullScreen;
output-
//This property indicates whether the window is displayed on full screen or not.

window.Location;
output-
//It contains the URL of the current window.

window.innerHeight;
output-
//It is used to get the height of the content area of the browser window.

window.innerWidth;
output-
//It is used to get the width of the content area of the browser window.

The methods of Window objects that are commonly used are listed:

window.alert();
output-
It is used to display an alert box. It displays a specified message along with an OK button and is generally used to make sure that the information comes through the user.

window.atob();
output-
//It is used for decoding a base-64 encoded string. It is used to decode a string of data that has been encoded using the btoa() method.

window.blur();
output-
//It is used to remove focus from the current window.

window.btoa();
output-
//It is used for encoding a string in base-64 format.

window.clearInterval();
output-
//It clears the interval which has been set by the setInterval() function before that.

window.clearTimeout();
output-
//It clears the timeout which has been set by the setTimeout()function before that.

window.close();
output-
//It is used for closing a certain window or tab of the browser which was previously opened.

window.confirm();
output-
//It is used to display a modal dialog with an optional message and two buttons i.e. OK and Cancel. It returns true if the user clicks “OK”, and false otherwise.

window.focus();
output-
//It is used to give focus to an element in the current window.


-Using  document object we can access the DOM to manipulate the content of the HTML and CSS.
With the help of document objects, we can add dynamic content to our web page.
The document object can be accessed with a window.document or just document.

eg: Document object

Syntax:
document.property_name;

>>document.title
output-
'Wikipedia'
//gets the title of the opened browser.

>>document.URL
output-
'https://www.wikipedia.org/'
//get the url of current browser.

>>document.body.style.backgroundColor="blue";
output-
'blue'
//this changes the backgroundColor of the curret browser to blue.

>>document.head;
output-
<head>....</head>
//this prints the entair head porsion of the website.

>>document.createElement("h1");
output-
<h1>​</h1>​
//this will create an element of type h1.

>>document.createElement("input");
output-
<input>​
//this will create an element of input type.

>>document.getElementsByClassName("site-license");
output-
HTMLCollection [p.site-license]
//this will return an HTML collection of all of the divs with each one of the topics.
//it's an HTML collection similar to an array.

>>document.baseURI;
output-
'https://www.wikipedia.org/'
//Returns the absolute base URI of a document

>>document.cookie;
output-
'GeoIP=IN:KA:Bengaluru:12.96:77.59:v4'
//Returns all name/value pairs of cookies in the document

>>document.lastModified
output-
'12/12/2022 16:07:38'
// It returns the date and time of the current document that was last modified.

The lists of most commonly used methods:

>>document.cookie;
document.addEventListener();
//It is used to attach an event handler to the specified element.

>>document.cookie;
document.adoptNode();
//It is used to adopt a node from another document and it returns a node object, representing the adopted node.

>>document.cookie;
document.close();
//It is used to close the output stream.

>>document.cookie;
document.createAttribute();
//It is used to create an attribute node with the specified name and returns the attribute object.

>>document.cookie;
document.createComment();
//It is used to create a comment node with some text.

>>document.cookie;
document.createDocumentFragment();
//It is used to create the document fragment to change the content of the document.

>>document.cookie;
document.createElement();
//It is used to create HTML element.

>>document.cookie;
document.createEvent();
//It is used to create a new events object.