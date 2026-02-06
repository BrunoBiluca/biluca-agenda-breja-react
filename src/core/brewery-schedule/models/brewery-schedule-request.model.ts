export class BreweryScheduleRequest {
  id: string;
  createdAt: Date;

  constructor(
    public breweryId: string,
    public breweryName: string,
    public visitDate: Date,
    public party: string[],
    public notes: string,
  ) {
    this.id = crypto.randomUUID();
    this.createdAt = new Date();
  }
}
