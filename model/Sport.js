export class Sporti {
  constructor(id, name, description) {
    this.id = id
    this.name = name
    this.description = description
  }

  static createMockedSports() {
    return [
      new Sporti(
        1,
        'Cycling',
        'Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as "cyclists", "bicyclists", or "bikers". Apart from two-wheeled bicycles, "cycling" also includes the riding of unicycles, tricycles, quadricycles, recumbent and similar human-powered vehicles (HPVs).'
      ),
      // ... other sports
      new Sporti(
        2,
        'Volleyball',
        "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules."
      ),
    ]
  }
}
