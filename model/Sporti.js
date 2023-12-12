// model/Sporti.js
export class Sporti {
  constructor(id, name, description, imageUrl) {
    this.id = id
    this.name = name
    this.description = description
    this.imageUrl = imageUrl
  }

  static fromApiData(data) {
    return new Sporti(
      data.idSport,
      data.strSport,
      data.strSportDescription,
      data.strSportThumb
    )
  }
}
