export interface Winebar {
  id: string;
  name: string;
  website: string;
  logo: {url: string};
  address: {lat: string; lon: string};
}

export interface Wine {
  id: string;
  name: string;
  image: {url: string};
  country?: string;
  region?: string;
  grape?: string;
  color?: string;
  type?: string;
  year?: string;
  description?: string;
  producer?: string;
  character?: string;
}
