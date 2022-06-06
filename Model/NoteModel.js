import uuid from "react-uuid";

export default class Note {

    dateFormatter(date) {
        return date.toLocaleDateString("en-GB", { hour : "2-digit", minute : "2-digit" });
    }
    
    constructor(title = "", content = "") {
        this.id = uuid();
        this.title = title;
        this.content = content;
        this.lastModified = this.dateFormatter(new Date());
    }

    get getId() {
        return this.id;
    }

    get getTitle() {
        return this.title;
    }

    get getContent() {
        return this.content;
    }

    get getLastModified() {
        return this.lastModified;
    }

    set setTitle(title) {
        this.title = title;
    }

    set setContent(content) {
        this.content = content;
    }

    set setLastModified(date) {
        this.lastModified = this.dateFormatter(date);
    }
}