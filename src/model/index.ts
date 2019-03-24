export interface IIncident {
  address: string,
  description: string,
  id: number,
  location_description: string,
  location_type: string,
  media: IMedia,
  occurred_at: Date,
  source: string,
  title: string
  type: string,
  type_properties: string,
  updated_at: Date,
  url: string
}

export interface IMedia { 
  image_url: string, 
  image_url_thumb: string 
}