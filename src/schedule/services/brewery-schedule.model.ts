export interface BrewerySchedule {
  id: string;
  breweryId: string;
  breweryName: string;
  visitDate: Date;
  party: string[];
  notes: string;
}
