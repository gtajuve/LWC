import { LightningElement, track} from 'lwc';

export default class HelloWebComponent extends LightningElement {
    @track greeting = 'Joro'
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
    currentDate = new Date().toDateString();
    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }
}