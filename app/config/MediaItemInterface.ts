export enum MediaType {
    Image = 'image',
    Video = 'video',
    YouTube = 'youtube',
    LocalImage = 'local-image',
  }
  
  export interface MediaItem {
    url: string;
    type: MediaType;
    index: number;
  }