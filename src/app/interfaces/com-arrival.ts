export interface ComArrival {
  tripId: string;
  stop: Stop;
  when: null | string;
  plannedWhen: string;
  prognosedWhen?: null;
  delay: number | null;
  platform: null | string;
  plannedPlatform: null | string;
  prognosedPlatform?: null;
  direction: null;
  provenance: string;
  line: Line;
  remarks: Remark[];
  origin: null;
  destination: null;
  cancelled?: boolean;
  currentTripPosition?: Tion;
}

export interface Tion {
  type: string;
  latitude: number;
  longitude: number;
  id?: string;
}

export interface Line {
  type: string;
  id: string;
  fahrtNr: string;
  name: string;
  public: boolean;
  adminCode: string;
  productName: string;
  mode: string;
  product: string;
  operator: Operator;
  additionalName?: string;
}

export interface Operator {
  type: string;
  id: string;
  name: string;
}

export interface Remark {
  type: string;
  code: string;
  text: string;
  tripId?: string;
}

export interface Stop {
  type: string;
  id: string;
  name: string;
  location: Tion;
  products: Products;
  station?: Stop;
}

export interface Products {
  nationalExpress: boolean;
  national: boolean;
  regionalExp: boolean;
  regional: boolean;
  suburban: boolean;
  bus: boolean;
  ferry: boolean;
  subway: boolean;
  tram: boolean;
  taxi: boolean;
}
