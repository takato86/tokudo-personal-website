

export default class PublicationModel {
    title: string
    authors: string
    year: number
    booktitle: string
    doi: string
    volume: number | null
    number: number | null
    pages: string | null
    constructor(title: string, authors: string, year: number, booktitle: string, doi: string, volume: number | null, number: number | null, pages: string | null){
        this.title = title
        this.authors = authors
        this.year = year
        this.booktitle = booktitle
        this.doi = doi
        this.volume = volume
        this.number = number
        this.pages = pages
    }
}