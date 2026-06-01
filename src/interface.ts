/*Every class that implements an interface must inherit the properties and methods defined 
in that interface. 

You can implement multiple interfaces in a class, which allows you to create more flexible 
and reusable code.

Multiple inheritance is not possible with classes in TypeScript but can be achieved using
interfaces.
*/

interface Webdriver {
    text: string;

    navigate(): void;
}

interface RemoteWebDriver {
    launchBrowser(): void;
}
class Chrome implements Webdriver, RemoteWebDriver {
   text: string = "Chrome Browser";

   navigate(): void {
       console.log("Navigate using " + this.text);
   }

   launchBrowser(): void {
       console.log("Launching " + this.text);
   }
}

class Firefox implements Webdriver, RemoteWebDriver {
    text: string = "Firefox Browser";

    navigate(): void {
        console.log("Navigate using" + this.text);
    }

    launchBrowser(): void {
        console.log("Launching " + this.text);
    }
}

const ch = new Chrome();
let title = ch.text;
console.log(title);
ch.launchBrowser();
ch.navigate();

const ff = new Firefox();
let title1 = ff.text;
console.log(title1);
ff.launchBrowser();
ff.navigate();  