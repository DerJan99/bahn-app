export interface ComStations {
  [id: string]: Stations;
}

export interface Stations {
  id: string;
  relevance: number;
  score: number;
  weight: number;
  type: string;
  additionalIds: any[];
  ril100: string;
  nr: number;
  name: string;
  location: Location;
  operator: Operator;
  address: Address;
  category: number;
  priceCategory: number;
  hasParking: boolean;
  hasBicycleParking: boolean;
  hasLocalPublicTransport: boolean;
  hasPublicFacilities: boolean;
  hasLockerSystem: boolean;
  hasTaxiRank: boolean;
  hasTravelNecessities: boolean;
  hasSteplessAccess: string;
  hasMobilityService: string;
  hasWiFi: boolean;
  hasTravelCenter: boolean;
  hasRailwayMission: boolean;
  hasDBLounge: boolean;
  hasLostAndFound: boolean;
  hasCarRental: boolean;
  federalState: string;
  regionalbereich: Regionalbereich;
  DBinformation?: DBinformation;
  localServiceStaff?: DBinformation;
  timeTableOffice: TimeTableOffice;
  szentrale: Szentrale;
  stationManagement: StationManagement;
  ril100Identifiers: Ril100Identifier[];
}

export interface DBinformation {
  availability: Availability;
}

export interface Availability {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
  holiday: Day;
}

export interface Day {
  fromTime: string;
  toTime: string;
}

export interface Address {
  city: string;
  zipcode: string;
  street: string;
}

export interface Location {
  type: string;
  latitude: number;
  longitude: number;
}

export interface Operator {
  type: string;
  id: string;
  name: string;
}

export interface Regionalbereich {
  number: number;
  name: string;
  shortName: string;
}

export interface Ril100Identifier {
  rilIdentifier: string;
  isMain: boolean;
  hasSteamPermission: boolean;
  geographicCoordinates: GeographicCoordinates;
}

export interface GeographicCoordinates {
  type: string;
  coordinates: number[];
}

export interface StationManagement {
  number: number;
  name: string;
}

export interface Szentrale {
  number: number;
  publicPhoneNumber: string;
  name: string;
}

export interface TimeTableOffice {
  email: string;
  name: string;
}
