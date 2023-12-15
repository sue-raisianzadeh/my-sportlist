// model/Sporti.js
export class SportType {
  constructor(id, name, description, imageUrl) {
    this.id = id
    this.name = name
    this.description = description
    this.imageUrl = imageUrl
  }

  static fromApiData(data) {
    return new SportType(
      data.idSport,
      data.strSport,
      data.strSportDescription,
      data.strSportThumb
    )
  }
}
