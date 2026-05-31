/*
OOPS - Inheritance: Fundamental OOPS concept where the child class inherits properties and
methods from the parent class. 
*/


/* 

Abstract classes: A class that cannot be instantiated, you cannot create an object of an
abstract class. It is meant to be extended by other classes

If a method is marked as abstract, it means then all child classes must define that method.
*/

class webDriver {

    url: string;

    constructor(url: string) {
        this.url = url;
    }

    navigate(): void {
        console.log("Navigated to " + this.url);

    }
}

class chromeDriver extends webDriver {
    launchBrowser(): void{
        console.log("Launching Chrome Browser...");
    }

}

class FireFoxDriver extends webDriver {
    launchBrowser(): void{
        console.log("Launching Firefox Browser...");
    }

}

const chrome = new chromeDriver("https://www.app.lumosity.com");
chrome.launchBrowser();
chrome.navigate();

const firefox = new FireFoxDriver("https://www.app.lumosity.com");
firefox.launchBrowser();
firefox.navigate();



