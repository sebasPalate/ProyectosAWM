export class Pelicula {
    _id?: String
    title: String
    description: String
    category: String
    year: String
    image: String

    constructor(title: String, description: String, category: String, year: String, image: String) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.year = year;
        this.image = image;
    }
}