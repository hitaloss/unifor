export interface IMusicRequest {
  name: string;
  artist: string;
}

export interface IMusicPatch {
  name?: string;
  artist?: string;
}
