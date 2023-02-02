export class Curso {
    _id?: String
    name: String
    subtitle: String
    duration: String
    description: String
    urlImage: String

    constructor(name: String, subtitle: String, duration: String, description: String, urlImage: String) {
        this.name = name;
        this.subtitle = subtitle;
        this.duration = duration;
        this.description = description;
        this.urlImage = urlImage;
    }
}