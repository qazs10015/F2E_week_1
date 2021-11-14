
export interface ActivityModel {
  ID: string;
  Name: string;
  Description: string;
  Particpation?: string;
  Location: string;
  Address?: string;
  Phone?: string;
  Organizer: string;
  StartTime: Date;
  EndTime: Date;
  Picture: Picture;
  Position: Position;
  Class1?: string;
  SrcUpdateTime: Date;
  UpdateTime: Date;
  Class2?: string;
  Cycle?: string;
  WebsiteUrl?: string;
  City?: string;
  ParkingInfo?: string;
  Charge?: string;
}



export interface Picture {
  PictureUrl1?: string;
  PictureDescription1?: string;
  PictureUrl2?: string;
  PictureDescription2?: string;
  PictureUrl3?: string;
  PictureDescription3?: string;
}

export interface Position {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
}
